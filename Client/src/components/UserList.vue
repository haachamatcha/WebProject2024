<script setup lang="ts">
import { getAll, type User } from '@/models/users'
import { ref } from 'vue'
import { useAuth } from '@/models/auth'

const { loggedInUser } = useAuth()
const isLoggedIn = ref<boolean>(!!loggedInUser.value)
const isAdmin = ref<boolean>(loggedInUser.value?.isadmin || false)
const users = ref<User[]>([])
users.value = getAll().data

</script>

<template>
  <div class="container content" v-if="isLoggedIn && isAdmin">
    <div class="box has-background-dark">
      <h1>Users</h1>
      <table class="table is-fullwidth has-background-dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.username">
            <td>{{ user.firstname }}</td>
            <td>{{ user.lastname }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.isadmin }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="container content" v-else>
    <div class="box has-background-danger has-text-centered">
      <h1 class="has-text-white">Error</h1>
      <p class="has-text-white">You need to be logged in as an Admin to view this page.</p>
      <RouterLink to="/login" class="button is-light">Go to Login</RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
