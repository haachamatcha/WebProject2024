<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 
import { login } from '../models/users'; 
import { useAuth } from '../models/auth';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();
const { loginUser } = useAuth(); 


const handleLogin = (e: Event) => {
  e.preventDefault();
  const user = login(email.value, password.value);

  if (user) {
    loginUser(user);
    router.push({ name: '/' });
  } else {
    errorMessage.value = 'Invalid email or password.';
  }
};
</script>

<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-half">
        <form @submit="handleLogin" class="box has-background-dark">
          <p class="title">Login</p>

          <p v-if="errorMessage" class="has-text-danger">{{ errorMessage }}</p>

          <div class="field">
            <label for="email" class="label">Email</label>
            <div class="control">
              <input type="email" class="input" v-model="email" required />
            </div>
          </div>

          <div class="field">
            <label for="password" class="label">Password</label>
            <div class="control">
              <input type="password" class="input" v-model="password" required />
            </div>
          </div>

          <div class="field has-text-centered">
            <button class="button is-primary" type="submit">
              <span class="icon">
                <i class="fas fa-sign-in-alt"></i>
              </span>
              &ensp; Login
            </button>
          </div>
        </form>

        <div class="has-text-centered">
          <br />
          <RouterLink to="/register" class="has-text-info">
            Don't have an account? Click here to Register
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
