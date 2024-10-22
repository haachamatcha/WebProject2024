<script setup lang="ts">
import { type User} from '@/models/users'
import { ref } from 'vue'

const users = ref<User[]>([])
const email = ref('');
const password = ref('');

</script>

<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-half">
        <form action="" class="box has-background-dark">
          <p class="title">Login</p>
          <div class="field">
            <label for="email" class="label">Email</label>
            <div class="control">
              <input type="email" class="input" v-model="email"/>
            </div>
          </div>
          <div class="field">
            <label for="password" class="label">Password</label>
            <div class="control">
              <input type="password" class="input" v-model="password"/>
            </div>
          </div>
          <div class="field has-text-centered">
            <button class="button is-primary" type="submit" @click="login">
              <span class="icon">
                <i class="fas fa-sign-in-alt"></i>
              </span>
              &ensp; Login</button>
          </div>
        </form>

        <div class="has-text-centered">
          <br><RouterLink to="/register" class="has-text-info">Don't have an account? Click here Register</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
