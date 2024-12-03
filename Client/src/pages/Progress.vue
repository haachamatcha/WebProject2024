<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import StatList from '../components/StatsList.vue'
import {useAuth} from '../models/auth'
import {ref} from 'vue' 
import {getAll, type Stats} from '../models/stats'
import WelcomeHero from '@/components/WelcomeHero.vue'
const {loggedInUser} = useAuth();
const stats = ref<Stats[]>([]);

getAll().then((data) => {
    console.log(data);
    stats.value = data.data;
});
</script>

<template>
    <div v-if="loggedInUser">
        <StatList v-for="stat in stats" :key="stat.userid" :stats="stat" />
    </div>
    <div v-else>
        <WelcomeHero />
    </div>
</template>

<style scoped>

</style>