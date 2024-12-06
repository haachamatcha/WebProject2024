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

const removeWorkout = (workoutId: number) => {
  userWorkouts.value = userWorkouts.value.filter(workout => workout.workoutid !== workoutId);
};

</script>

<template>
  <div class="columns" v-if="session.user">
    <SideMenu />
    <div class="column is-half">
    <ExcerciseCard v-for="workout in userWorkouts" :key="workout.workoutid" :workout="workout" @workout-deleted="removeWorkout"/>
  </div>
  </div>
</template>

<style scoped></style>
