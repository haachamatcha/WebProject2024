<script setup lang="ts">
import { ref } from 'vue'
import {type User, add, getAll} from '@/models/users'
import { RouterLink, useRouter } from 'vue-router'

const first = ref<string>('')
const last = ref<string>('')
const username = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const confirmPassword = ref<string>('')
const router = useRouter()

const registerUser = async () => {
  if (password.value !== confirmPassword.value || password.value === '') {
    alert('Passwords do not match')
    return
  }
  else if((await getAll()).data.some((user: User) => user.email === email.value)) {
    alert('Email already in use')
    return
  }
  else if((await getAll()).data.some((user: User) => user.username === username.value)) {
    alert('Username already in use')
    return
  }

  const newUser: User = {
    firstname: first.value,
    lastname: last.value,
    username: username.value,
    email: email.value,
    password: password.value,
    userid: (await getAll()).data.length + 1,
    isadmin: false,
    bio: '',
  }

  try {
    await add(newUser)
    router.push('/login');
  } catch (error) {
    console.error('Failed to register user:', error)
  }
}
</script>

<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-half">
        <form action="" class="box has-background-dark">
          <p class="title">Register</p>
          <div class="columns">
            <div class="column is-half">
              <div class="field">
                <label for="firstName" class="label">First Name</label>
                <div class="control">
                  <input type="text" id="firstname" class="input" v-model="first"/>
                </div>
              </div>
            </div>
            <div class="column is-half">
              <div class="field">
                <label for="lastName" class="label">Last Name</label>
                <div class="control">
                  <input type="text" id="lastname" class="input" v-model="last"/>
                </div>
              </div>
            </div>
          </div>
          <label for="username" class="label">Username</label>
          <div class="field">
            <div class="control">
              <input type="text" id="username" class="input" v-model="username"/>
            </div>
          </div>
            <div class="field">
                <label for="email" class="label">Email</label>
                <div class="control">
                <input type="email" id="email" class="input" v-model="email"/>
                </div>
            </div>
          <div class="field">
            <label for="password" class="label">Password</label>
            <div class="control">
              <input type="password" id="password" class="input" v-model="password"/>
            </div>
          </div>
          <div class="field">
            <label for="confirmPassword" class="label">Confirm Password</label>
            <div class="control">
              <input type="password" id="confirmPassword" class="input" v-model="confirmPassword"/>
            </div>
          </div>
          <div class="field has-text-centered">
            <button class="button is-primary" @click.prevent="registerUser">
              <span class="icon">
                <i class="fas fa-user-plus"></i>
              </span>
              &ensp; Register
            </button>
          </div>
        </form>

        <div class="has-text-centered">
          <br /><RouterLink to="/login" class="has-text-info"
            >Already have an account? Click here to Login</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
