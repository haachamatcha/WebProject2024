import { ref } from 'vue';
import type { DataListEnvelope, DataEnvelope } from './dataEnvelope';
import { api } from './myFetch';
export const currentUser = ref<User | null>(null);

export async function getAll() {
  return api<DataListEnvelope<User>>('users')
}

export async function get(id: number) {
  return api<DataEnvelope<User>>(`users/${id}`)
}

export async function login(email: string, password: string) {
  try {
    const response = await api<DataEnvelope<{ user: User, token: string }>>('users/login', { email, password });
    if (response.isSuccess) {
      currentUser.value = response.data?.user || null;
      return response.data?.user;
    } else {
      console.error(`Login failed} ${response.error}`);
    }
  } catch (error) {
    console.error(`Login error: ${error}`);
  }
  return undefined;
}

export function logout(): void {
  currentUser.value = null; 
}

export async function add(user: User) {
  return api<DataEnvelope<User>>('users', user)
}

export async function update(user: User) {
  return api<DataEnvelope<User>>(`users/${user.userid}`, user, 'PATCH')
}

export async function remove(id: number) {
  return api<DataEnvelope<User>>(`users/${id}`, undefined, 'DELETE')
}

export interface User {
  userid: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  isadmin: boolean;
  bio:string;
}
