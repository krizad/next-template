import { NextRequest, NextResponse } from 'next/server';

/**
 * Test API route for simulating different error responses
 * Used in api-error-demo page for testing error handling
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');

  // Simulate errors based on code parameter
  switch (code) {
    case '400':
      return NextResponse.json(
        {
          error: 'Bad Request',
          message: 'The request was invalid or cannot be served',
          code: 'VALIDATION_ERROR',
        },
        { status: 400 },
      );

    case '401':
      return NextResponse.json(
        {
          error: 'Unauthorized',
          message: 'Authentication is required to access this resource',
          code: 'AUTH_REQUIRED',
        },
        { status: 401 },
      );

    case '403':
      return NextResponse.json(
        {
          error: 'Forbidden',
          message: 'You do not have permission to access this resource',
          code: 'PERMISSION_DENIED',
        },
        { status: 403 },
      );

    case '404':
      return NextResponse.json(
        {
          error: 'Not Found',
          message: 'The requested resource could not be found',
          code: 'RESOURCE_NOT_FOUND',
        },
        { status: 404 },
      );

    case '422':
      return NextResponse.json(
        {
          error: 'Unprocessable Entity',
          message: 'The request was well-formed but contains semantic errors',
          code: 'VALIDATION_FAILED',
          details: {
            email: ['Email is required', 'Email must be valid'],
            password: ['Password must be at least 8 characters'],
          },
        },
        { status: 422 },
      );

    case '429':
      return NextResponse.json(
        {
          error: 'Too Many Requests',
          message: 'Rate limit exceeded. Please try again later',
          code: 'RATE_LIMIT_EXCEEDED',
        },
        { status: 429 },
      );

    case '500':
      return NextResponse.json(
        {
          error: 'Internal Server Error',
          message: 'An unexpected error occurred on the server',
          code: 'INTERNAL_ERROR',
        },
        { status: 500 },
      );

    case '502':
      return NextResponse.json(
        {
          error: 'Bad Gateway',
          message: 'The server received an invalid response from upstream',
          code: 'BAD_GATEWAY',
        },
        { status: 502 },
      );

    case '503':
      return NextResponse.json(
        {
          error: 'Service Unavailable',
          message: 'The service is temporarily unavailable',
          code: 'SERVICE_UNAVAILABLE',
        },
        { status: 503 },
      );

    default:
      return NextResponse.json(
        {
          message: 'Test error endpoint',
          usage: 'Add ?code=400|401|404|500 to simulate errors',
        },
        { status: 200 },
      );
  }
}
