<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useAuth } from '../models/auth'

const isOpen = ref(false)
const { loggedInUser, logoutUser } = useAuth()
const handleLogout = () => {
  logoutUser()
}
</script>

<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink to="/" class="navbar-item">
        <p class="title is-4 has-text-primary">MaxFit</p>
      </RouterLink>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        :class="{ 'is-active': isOpen }"
        @click="isOpen = !isOpen"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbar"
      class="navbar-menu is-white"
      :class="{ 'is-active': isOpen }"
      @click="isOpen = !isOpen"
    >
      <div class="navbar-start">
        <RouterLink to="/" class="navbar-item">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
          Home
        </RouterLink>
        <RouterLink to="/activity/allposts" class="navbar-item">
          <span class="icon">
            <i class="fas fa-running"></i>
          </span>
          My Activity
        </RouterLink>
        <RouterLink to="/progress" class="navbar-item">
          <span class="icon">
            <i class="fas fa-signal"></i>
          </span>
          My Progress
        </RouterLink>
        <RouterLink to="/search" class="navbar-item">
          <span class="icon">
            <i class="fas fa-search"></i>
          </span>
          Search
        </RouterLink>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
              <RouterLink v-if="!loggedInUser" to="/login" class="navbar-item has-text-primary">Login</RouterLink>
              <RouterLink v-if="!loggedInUser" to="/register" class="has-text-primary">Register</RouterLink>
              <button v-else class="button is-light" @click="handleLogout">Logout</button>
            <RouterLink to="/admin" class="navbar-item has-text-primary">Admin</RouterLink>
            <RouterLink to="/about" class="navbar-item has-text-primary">About</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  border-bottom: 2px solid #00d1b2;
  color: #00d1b2;
  font-weight: bold;
}
</style>
