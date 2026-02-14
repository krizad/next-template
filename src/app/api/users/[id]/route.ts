import { NextResponse } from 'next/server';

// Mock database (shared with /api/users/route.ts)
interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
}

// In production, you'd fetch this from your actual database
const mockUsers: User[] = [
  {
    id: '1',
    email: 'john.doe@example.com',
    name: 'John Doe',
    role: 'user',
    createdAt: new Date('2023-01-15').toISOString(),
  },
  {
    id: '2',
    email: 'jane.smith@example.com',
    name: 'Jane Smith',
    role: 'admin',
    createdAt: new Date('2023-02-20').toISOString(),
  },
  {
    id: '3',
    email: 'bob.johnson@example.com',
    name: 'Bob Johnson',
    role: 'user',
    createdAt: new Date('2023-03-10').toISOString(),
  },
];

/**
 * GET /api/users/[id]
 * Fetch a single user by ID
 */
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: 'User ID is required',
          code: 'MISSING_ID',
        },
        { status: 400 },
      );
    }

    const user = mockUsers.find((u) => u.id === id);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: `User with ID ${id} not found`,
          code: 'NOT_FOUND',
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error(`GET /api/users/[id] error:`, error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch user',
        code: 'FETCH_FAILED',
      },
      { status: 500 },
    );
  }
}

/**
 * PUT /api/users/[id]
 * Update a user by ID
 */
export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: 'User ID is required',
          code: 'MISSING_ID',
        },
        { status: 400 },
      );
    }

    const userIndex = mockUsers.findIndex((u) => u.id === id);

    if (userIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: `User with ID ${id} not found`,
          code: 'NOT_FOUND',
        },
        { status: 404 },
      );
    }

    // Validate update data
    if (body.name !== undefined && (!body.name || body.name.length < 2)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Name must be at least 2 characters long',
          code: 'VALIDATION_ERROR',
        },
        { status: 422 },
      );
    }

    if (body.email !== undefined) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(body.email)) {
        return NextResponse.json(
          {
            success: false,
            error: 'Invalid email format',
            code: 'VALIDATION_ERROR',
          },
          { status: 422 },
        );
      }

      // Check for duplicate email (excluding current user)
      if (mockUsers.some((u) => u.email === body.email && u.id !== id)) {
        return NextResponse.json(
          {
            success: false,
            error: 'Email already exists',
            code: 'EMAIL_EXISTS',
          },
          { status: 409 },
        );
      }
    }

    // Update user
    const updatedUser = {
      ...mockUsers[userIndex],
      ...(body.name && { name: body.name }),
      ...(body.email && { email: body.email }),
      ...(body.role && { role: body.role }),
    };

    mockUsers[userIndex] = updatedUser;

    return NextResponse.json({
      success: true,
      data: updatedUser,
      message: 'User updated successfully',
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid JSON in request body',
          code: 'INVALID_JSON',
        },
        { status: 400 },
      );
    }

    console.error(`PUT /api/users/[id] error:`, error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update user',
        code: 'UPDATE_FAILED',
      },
      { status: 500 },
    );
  }
}

/**
 * DELETE /api/users/[id]
 * Delete a user by ID
 */
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: 'User ID is required',
          code: 'MISSING_ID',
        },
        { status: 400 },
      );
    }

    const userIndex = mockUsers.findIndex((u) => u.id === id);

    if (userIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: `User with ID ${id} not found`,
          code: 'NOT_FOUND',
        },
        { status: 404 },
      );
    }

    // Delete user
    const deletedUser = mockUsers.splice(userIndex, 1)[0];

    return NextResponse.json({
      success: true,
      data: deletedUser,
      message: 'User deleted successfully',
    });
  } catch (error) {
    console.error(`DELETE /api/users/[id] error:`, error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete user',
        code: 'DELETE_FAILED',
      },
      { status: 500 },
    );
  }
}
