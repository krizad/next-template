import { NextResponse } from 'next/server';

/**
 * GET /api/users/[id]/profile
 * Fetch user profile by ID
 */
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Mock profile data
  const profile = {
    id,
    email: 'john.doe@example.com',
    name: 'John Doe',
    bio: 'Full-stack developer passionate about building great user experiences.',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev',
    skills: ['React', 'TypeScript', 'Node.js', 'Next.js'],
    createdAt: new Date('2023-01-15').toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json({
    success: true,
    data: profile,
  });
}

/**
 * PUT /api/users/[id]/profile
 * Update user profile
 */
export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Mock update
    const updatedProfile = {
      id,
      email: 'john.doe@example.com',
      name: body.name || 'John Doe',
      bio: body.bio,
      location: body.location,
      website: body.website,
      skills: body.skills || [],
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      data: updatedProfile,
      message: 'Profile updated successfully',
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update profile',
      },
      { status: 500 },
    );
  }
}
