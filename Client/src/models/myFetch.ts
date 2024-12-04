import { refSession } from './session';

const API_URL = 'http://localhost:3000/api/v1/';

export function rest<T>(url: string, data?: any, method?: string, headers?: any): Promise<T> {
  const session = refSession();
  return fetch(url, {
    method: method ?? (data ? 'POST' : 'GET'),
    headers: {
      'Content-Type': 'application/json',
      ...(session.token ? { 'Authorization': `Bearer ${session.token}` } : {}),
      ...headers
    },
    body: data ? JSON.stringify(data) : undefined
  }).then((x) => x.json());
}

export function api<T>(url: string, data?: any, method?: string, headers?: any): Promise<T> {
  return rest<T>(API_URL + url, data, method, headers);
}