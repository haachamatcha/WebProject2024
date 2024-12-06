<script setup lang="ts">
import { ref } from 'vue'
import { type Workout, remove } from '../models/workout';

defineProps<{ workout: Workout }>();

const emit = defineEmits<{
  (e: 'workout-deleted', workoutId: number): void;
}>();

const handleDelete = async (workoutId: number) => {
  await remove(workoutId);
  emit('workout-deleted', workoutId);
};

</script>

<template>
  <div class="adjusted">
    <div class="media box content has-gap has-background-dark has-gap">
      <div class="media-content">
        <h1 class="has-text-primary bold has-text-centered">
          {{ workout.exercise_name }}
        </h1>
        <h3 class="has-text-white"> Type: {{ workout.type }}</h3>

        <h3 class="has-text-white" v-if="workout.type == 'Strength'">Details: {{ workout.record }} {{ workout.unit }} x {{
          workout.count }} set(s)</h3>
        <h3 class="has-text-white" v-else> Details: {{ workout.record }} {{ workout.unit }} for {{ workout.count }} Lap(s)</h3>
        <h3 class="has-text-white"> Completed: {{ workout.date }}</h3>
        <div class="buttons is-centered">
        <button class="button is-danger" @click="handleDelete(workout.workoutid)">Delete</button>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
