import { NextResponse } from 'next/server';

/**
 * GET /api/users/[id]/stats
 * Fetch user statistics
 */
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Mock stats data
  const stats = {
    userId: id,
    postsCount: 42,
    followersCount: 1234,
    followingCount: 567,
  };

  return NextResponse.json({
    success: true,
    data: stats,
  });
}
