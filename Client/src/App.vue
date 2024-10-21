<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

import { onMounted } from 'vue';

onMounted(() => {
  document.documentElement.setAttribute('data-theme', 'dark');
});
</script>

<template>
  <header>
    <NavBar />
    <div class="wrapper">
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
