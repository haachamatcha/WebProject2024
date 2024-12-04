import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { api } from '../models/myFetch';
import { type DataEnvelope } from '../models/dataEnvelope';
import { type User } from '../models/users';

const session = reactive({
  user: JSON.parse(localStorage.getItem('user') || 'null') as User | null,
  token: localStorage.getItem('token') as string | null,
  loading: 0
});

export function showError(err: any) {
  console.error(err);
}

export function useLogin() {
  return {
    async login(email: string, password: string): Promise<boolean> {
      const response = await api<DataEnvelope<{ user: User, token: string }>>('users/login', { email, password });
      
      if (response.isSuccess) {
        session.user = response.data?.user || null;
        session.token = response.data?.token || null;

        if (session.user == null || session.token == null) {
          return false;
        }

        localStorage.setItem('user', JSON.stringify(session.user));
        localStorage.setItem('token', session.token);

        return true;
      } else {
        showError(response.error || "Login failed");
        return false;
      }
    },
    logout() {
      session.user = null;
      session.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      const router = useRouter();
      router.push("/login");
    }
  };
}

export const refSession = () => session;

export function getSession() {
  return session;
}