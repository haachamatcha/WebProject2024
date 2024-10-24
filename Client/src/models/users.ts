import { ref } from 'vue';
import data from '../data/users.json';
import type { DataListEnvelope } from './dataEnvelope';

export const currentUser = ref<User | null>(null);

export function getAll(): DataListEnvelope<User> {
  return {
    data: data.users,
    total: data.users.length,
  };
}

export function login(email: string, password: string): User | undefined {
  const user = data.users.find(u => u.email === email && u.password === password);
  if (user) {
    currentUser.value = user;
  }
  return user;
}

export function logout(): void {
  currentUser.value = null; 
}

export interface User {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password?: string;
  userid: number;
  isadmin: boolean;
}
