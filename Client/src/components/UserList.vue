<script setup lang="ts">
import { getAll, remove, type User } from '@/models/users'
import { ref } from 'vue'
import { useAuth } from '@/models/auth'

const { loggedInUser } = useAuth()
const isLoggedIn = ref<boolean>(!!loggedInUser.value)
const isAdmin = ref<boolean>(loggedInUser.value?.isadmin || false)
const users = ref<User[]>([])
getAll().then((data) => {
  console.log(data)
  users.value = data.data
})

const handleRemove = async (userId: number) => {
  try {
    await remove(userId) // Call the API to remove the user
    // Filter out the removed user from the users array
    users.value = users.value.filter(user => user.userid !== userId)
  } catch (error) {
    console.error('Failed to remove user:', error)
  }
}
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.userid">
            <td>{{ user.firstname }}</td>
            <td>{{ user.lastname }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.isadmin }}</td>
            <td>
              <button @click="handleRemove(user.userid)" class="button is-danger is-small">Remove</button>
            </td>
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
