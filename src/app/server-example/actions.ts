'use server';

import { mockUsers, validateUser } from '@/app/api/_data/users';

/**
 * Server Action: Create a new user
 * Can be called from a form action or client component
 */
export async function createUserAction(formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const role = (formData.get('role') as string) || 'user';

  // Validate
  const validation = validateUser({ name, email });
  if (!validation.valid) {
    return { success: false, error: validation.error };
  }

  // Check duplicate email
  if (mockUsers.some((u) => u.email === email)) {
    return { success: false, error: 'Email already exists' };
  }

  const newUser = {
    id: Math.random().toString(36).substring(2, 9),
    name,
    email,
    role,
    createdAt: new Date().toISOString(),
  };

  mockUsers.push(newUser);

  return { success: true, data: newUser };
}

/**
 * Server Action: Delete a user by ID
 */
export async function deleteUserAction(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const index = mockUsers.findIndex((u) => u.id === userId);
  if (index === -1) {
    return { success: false, error: 'User not found' };
  }

  const deleted = mockUsers.splice(index, 1)[0];
  return { success: true, data: deleted };
}
