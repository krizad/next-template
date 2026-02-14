import { apiClient } from '@/lib/api-client';
import { type ApiResponse, type PaginatedResponse } from '@/types/api';
import { type User } from '@/types/user';

export interface GetUsersQuery {
  page?: number;
  limit?: number;
  search?: string;
}

/**
 * User service - user listing, fetching, management
 * Example: CRUD operations with pagination
 */
export const userService = {
  async getUsers(query?: GetUsersQuery): Promise<PaginatedResponse<User>> {
    const params = new URLSearchParams();
    if (query?.page) params.append('page', query.page.toString());
    if (query?.limit) params.append('limit', query.limit.toString());
    if (query?.search) params.append('search', query.search);

    const queryString = params.toString();
    const endpoint = queryString ? `/users?${queryString}` : '/users';

    return apiClient.get<User[]>(endpoint) as Promise<PaginatedResponse<User>>;
  },

  async getUserById(id: string): Promise<ApiResponse<User>> {
    return apiClient.get<User>(`/users/${id}`);
  },

  async updateUser(id: string, data: Partial<User>): Promise<ApiResponse<User>> {
    return apiClient.patch<User>(`/users/${id}`, data);
  },

  async deleteUser(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(`/users/${id}`);
  },

  async createUser(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<User>> {
    return apiClient.post<User>('/users', data);
  },
};
