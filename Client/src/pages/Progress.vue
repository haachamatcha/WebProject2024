<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import StatList from '../components/StatsList.vue'
import { refSession } from '@/models/session';
import {ref} from 'vue' 
import {getAll, type Stats} from '../models/stats'
import WelcomeHero from '@/components/WelcomeHero.vue'
const stats = ref<Stats[]>([]);

const session = refSession();

getAll().then((data) => {
    console.log(data);
    stats.value = data.data;
});
</script>

<template>
    <div v-if="session.user">
        <StatList />
    </div>
    <div v-else>
        <WelcomeHero />
    </div>
</template>

<style scoped>

</style>