import { NextResponse, NextRequest } from 'next/server';
import { mockUsers, MockUser, validateUser } from '../_data/users';

/**
 * GET /api/users
 * Fetch all users
 * Query params: page, limit, search
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = Number.parseInt(searchParams.get('page') || '1', 10);
    const limit = Number.parseInt(searchParams.get('limit') || '10', 10);
    const search = searchParams.get('search') || '';

    // Validation
    if (page < 1) {
      return NextResponse.json(
        {
          success: false,
          error: 'Page must be greater than 0',
          code: 'INVALID_PAGE',
        },
        { status: 400 },
      );
    }

    if (limit < 1 || limit > 100) {
      return NextResponse.json(
        {
          success: false,
          error: 'Limit must be between 1 and 100',
          code: 'INVALID_LIMIT',
        },
        { status: 400 },
      );
    }

    // Filter users by search
    let filteredUsers = mockUsers;
    if (search) {
      const searchLower = search.toLowerCase();
      filteredUsers = mockUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower),
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    return NextResponse.json({
      success: true,
      data: paginatedUsers,
      pagination: {
        page,
        limit,
        total: filteredUsers.length,
        pages: Math.ceil(filteredUsers.length / limit),
      },
    });
  } catch (error) {
    console.error('GET /api/users error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch users',
        code: 'FETCH_FAILED',
      },
      { status: 500 },
    );
  }
}

/**
 * POST /api/users
 * Create a new user
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    const validation = validateUser(body);
    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          error: validation.error,
          code: 'VALIDATION_ERROR',
        },
        { status: 422 },
      );
    }

    // Check for duplicate email
    if (mockUsers.some((user) => user.email === body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email already exists',
          code: 'EMAIL_EXISTS',
        },
        { status: 409 },
      );
    }

    // Create new user
    const newUser: MockUser = {
      id: Math.random().toString(36).substring(2, 9),
      name: body.name,
      email: body.email,
      role: body.role || 'user',
      createdAt: new Date().toISOString(),
    };

    // Add to mock database
    mockUsers.push(newUser);

    return NextResponse.json(
      {
        success: true,
        data: newUser,
        message: 'User created successfully',
      },
      { status: 201 },
    );
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

    console.error('POST /api/users error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create user',
        code: 'CREATE_FAILED',
      },
      { status: 500 },
    );
  }
}
