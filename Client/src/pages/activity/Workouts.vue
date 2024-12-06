<!--eslint-disable vue/multi-word-component-names-->
<script setup lang="ts">
import ExcerciseCard from '@/components/ExcerciseCard.vue';
import SideMenu from '@/components/SideMenu.vue'
import { refSession } from '@/models/session';
import { getByUser, type Workout } from '@/models/workout';
import { ref } from 'vue';

const session = refSession();
const userWorkouts = ref<Workout[]>([]);

if (session.user) {
  getByUser(session.user.userid).then((data) => {
    userWorkouts.value = data.data;
  });
}
</script>

<template>
  <div class="columns" v-if="session.user">
    <SideMenu />
    <ExcerciseCard v-for="workout in userWorkouts" :key="workout.workoutid" :workout="workout" />
  </div>
</template>

<style scoped></style>
