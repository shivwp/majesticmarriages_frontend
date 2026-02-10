/// <reference types="vite/client" />
const BASE_URL = import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? 'https://majesticmarriages.com' : 'http://127.0.0.1:5000');

const API_URL = BASE_URL.endsWith('/api') ? BASE_URL : `${BASE_URL.replace(/\/$/, '')}/api`;

export async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    if (data.errors && Array.isArray(data.errors)) {
      const errorMessages = data.errors.map((err: any) => err.msg).join(', ');
      throw new Error(errorMessages || data.message || 'Validation failed');
    }
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
}
