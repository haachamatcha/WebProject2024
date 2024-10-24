import { ref } from 'vue';
import type { User } from '../models/users';

const loggedInUser = ref<User | null>(null);

export function loginUser(user: User) {
  loggedInUser.value = user;
}

export function logoutUser() {
  loggedInUser.value = null;
}

export function useAuth() {
  return {
    loggedInUser,
    loginUser,
    logoutUser,
  };
}
