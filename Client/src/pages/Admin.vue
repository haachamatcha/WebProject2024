<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import UserList from '@/components/UserList.vue'
import { refSession } from '@/models/session'
//import { ref } from 'vue'

const session = refSession()
</script>

<template>
  <div class="container has-gap content" v-if="session.user?.isadmin">
    <UserList />
  </div>
  <div class="container has-gap content" v-else>
    <div class="box has-background-danger has-text-centered">
      <h1 class="has-text-white">Error</h1>
      <p class="has-text-white">You need to be logged in as an Admin to view this page.</p>
      <RouterLink to="/login" class="button is-light">Go to Login</RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
