<script setup lang="ts">
import type { User } from '@/models/users'
defineProps<{ user: User }>()
</script>

<template>
  <div>
    <h1>User List</h1>
    <div v-for="user in user" :key="user.id">
      <p>{{ user.firstName }} {{ user.lastName }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.username }}</p>
    </div>
  </div>
</template>

<style scoped></style>
