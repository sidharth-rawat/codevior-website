const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:6969';

export type ApiResponse<T> = {
  data: T;
  error?: string;
};

/**
 * Fetches data from the API
 */
export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('API request failed:', error);
    return {
      data: {} as T,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
} 