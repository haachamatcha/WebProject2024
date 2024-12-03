import { ref } from 'vue';
import data from '../data/users.json';
import type { DataListEnvelope, DataEnvelope } from './dataEnvelope';
import { api } from './myFetch';
export const currentUser = ref<User | null>(null);

/*export function getAll(): DataListEnvelope<User> {
  return {
    data: data.users,
    total: data.users.length,
  };
}*/

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

export async function getAll() {
  return api<DataListEnvelope<User>>('users')
}

export async function get(id: number) {
  return api<DataEnvelope<User>>(`users/${id}`)
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

