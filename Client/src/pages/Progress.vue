<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import StatList from '../components/StatsList.vue'
import { refSession } from '@/models/session';
import WelcomeHero from '@/components/WelcomeHero.vue'

const session = refSession();

</script>

<template>
    <div v-if="session.user">
        <StatList :userid="session.user.userid" />
    </div>
    <div v-else>
        <WelcomeHero />
    </div>
</template>

<style scoped>

</style>