<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink to="/home" class="navbar-item">
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
        <RouterLink to="/home" class="navbar-item"> Home </RouterLink>

        <RouterLink to="/about" class="navbar-item"> About </RouterLink>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <RouterLink to="/login" class="has-text-primary">Login</RouterLink>
            <RouterLink to="/register" class="has-text-primary"> Register </RouterLink>
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
