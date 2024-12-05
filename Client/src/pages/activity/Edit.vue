<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import EditProfile from '@/components/EditProfile.vue';
import { refSession } from '@/models/session';
const session = refSession();

</script>

<template>
    <div v-if="session.user">
        <EditProfile />
    </div>
</template>

<style scoped>

</style>