<script setup lang="ts">
import { getAll, type User } from '@/models/users'
import { ref } from 'vue'

const users = ref<User[]>([])
users.value = getAll().data
</script>

<template>
  <div class="container content">
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
</template>

<style scoped></style>
