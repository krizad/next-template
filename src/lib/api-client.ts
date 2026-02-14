import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { ApiResponse } from '@/types/api';

/**
 * API client using axios with error handling & interceptors
 */
class ApiClient {
  private readonly instance: AxiosInstance;

  private readonly defaultTimeout: number;

  constructor(baseUrl: string = '/api', timeout: number = 30000) {
    this.defaultTimeout = timeout;

    this.instance = axios.create({
      baseURL: baseUrl,
      timeout,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Response interceptor for error handling
    this.instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError<{ message?: string }>) => {
        // Handle errors gracefully
        if (error.response?.data) {
          // Server responded with error status
          error.message = error.response.data.message || error.message;
        } else if (error.code === 'ECONNABORTED') {
          error.message = 'Request timeout';
        }
        return Promise.reject(error);
      },
    );
  }

  private async request<T>(
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    endpoint: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance[method]<T>(endpoint, data, config);

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      const axiosError = error as AxiosError<unknown>;
      let errorMessage = 'An error occurred';

      if (axiosError.response?.data && typeof axiosError.response.data === 'object') {
        const data = axiosError.response.data as Record<string, unknown>;
        errorMessage =
          (data.error as string) ||
          (data.message as string) ||
          axiosError.message ||
          'An error occurred';
      } else if (axiosError.message) {
        errorMessage = axiosError.message;
      }

      return {
        success: false,
        error: errorMessage,
      };
    }
  }

  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>('get', endpoint, undefined, config);
  }

  async post<T>(
    endpoint: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this.request<T>('post', endpoint, data, config);
  }

  async put<T>(
    endpoint: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this.request<T>('put', endpoint, data, config);
  }

  async patch<T>(
    endpoint: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    return this.request<T>('patch', endpoint, data, config);
  }

  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>('delete', endpoint, undefined, config);
  }

  /**
   * Set default headers (useful for auth tokens)
   */
  setHeader(key: string, value: string): void {
    this.instance.defaults.headers.common[key] = value;
  }

  /**
   * Remove a header
   */
  removeHeader(key: string): void {
    delete this.instance.defaults.headers.common[key];
  }

  /**
   * Get the underlying axios instance for advanced usage
   */
  getInstance(): AxiosInstance {
    return this.instance;
  }
}

export const apiClient = new ApiClient();
