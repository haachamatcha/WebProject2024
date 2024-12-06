<script setup lang="ts">
import { ref } from 'vue'
import { type Workout, remove } from '../models/workout';

defineProps<{ workout: Workout }>();
</script>

<template>
  <div class="adjusted">
    <div class="media box content has-gap has-background-dark has-gap">
      <div class="media-content">
        <h1 class="has-text-primary bold">
          {{ workout.exercise_name }}
        </h1>
        <h3 class="has-text-white"> Type: <br> {{ workout.type }}</h3>

        <h3 class="has-text-white" v-if="workout.type == 'Strength'">Details: <br> {{ workout.record }} {{ workout.unit }} x {{
          workout.count }} set(s)</h3>
        <h3 class="has-text-white" v-else> Details: <br> {{ workout.record }} {{ workout.unit }} for {{ workout.count }} Lap(s)</h3>
        <h3 class="has-text-white"> Completed: <br>{{ workout.date }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
