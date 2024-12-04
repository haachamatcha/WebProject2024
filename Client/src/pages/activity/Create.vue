<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue';
import { refSession } from '@/models/session';

const session = refSession();
</script>

<template>
  <div class="columns" v-if="session.user">
    <SideMenu />
  </div>
  <div v-else>
    <p>You need to be logged in to create a post.</p>
  </div>
</template>

<style scoped>
</style>