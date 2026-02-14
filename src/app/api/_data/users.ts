// Shared mock database — import from a single source of truth
// In production, replace with a real database (Prisma, Drizzle, etc.)

export interface MockUser {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
}

export const mockUsers: MockUser[] = [
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

// Validation helpers
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateUser(data: unknown): { valid: boolean; error?: string } {
  const body = data as Record<string, unknown>;

  if (!body.name || typeof body.name !== 'string') {
    return { valid: false, error: 'Name is required and must be a string' };
  }

  if (body.name.length < 2) {
    return { valid: false, error: 'Name must be at least 2 characters long' };
  }

  if (!body.email || typeof body.email !== 'string') {
    return { valid: false, error: 'Email is required and must be a string' };
  }

  if (!validateEmail(body.email)) {
    return { valid: false, error: 'Invalid email format' };
  }

  return { valid: true };
}
