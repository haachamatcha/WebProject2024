<script setup lang="ts">
import { type Stats , get} from '../models/stats'
import { ref, watch } from 'vue'

const props = defineProps<{ userid: number }>();
const stats = ref<Stats | null>(null);

watch(() => props.userid, (newUserid) => {
  if (newUserid) {
    get(newUserid).then((data) => {
      console.log(data);
      stats.value = data.data;
    });
  }
}, { immediate: true });
</script>

<template>
  <div class="container has-gap">
    <div class="columns">
      <div class="column is-half">
        <div class="box has-background-dark">
          <p class="has-text-centered has-text-primary">Today</p>
          <div class="content">
            <h1 class="has-text-centered value">{{ stats?.today_lift }} lbs</h1>
            <p class="label has-text-centered has-text-primary">Maximum Lift</p>
            <h1 class="has-text-centered value">{{ stats?.today_time }} mins</h1>
            <p class="label has-text-centered has-text-primary">Workout Time</p>
            <h1 class="has-text-centered value">{{ stats?.today_dist }} m</h1>
            <p class="label has-text-centered has-text-primary">Distance</p>
            <h1 class="has-text-centered value">{{ stats?.today_cal }}</h1>
            <p class="label has-text-centered has-text-primary">Calories Burned</p>
          </div>
        </div>
      </div>
      <div class="column is-half">
        <div class="box has-background-dark">
          <p class="has-text-centered has-text-primary">All Time</p>
          <div class="content">
            <h1 class="has-text-centered value">{{ stats?.max_lift }} lbs</h1>
            <p class="label has-text-centered has-text-primary">Maximum Lift</p>
            <h1 class="has-text-centered value">{{ stats?.max_time }} mins</h1>
            <p class="label has-text-centered has-text-primary">Workout Time</p>
            <h1 class="has-text-centered value">{{ stats?.max_dist }} m</h1>
            <p class="label has-text-centered has-text-primary">Distance</p>
            <h1 class="has-text-centered value">{{ stats?.max_cal }} </h1>
            <p class="label has-text-centered has-text-primary">Calories Burned</p>
          </div>
        </div>
      </div>
    </div>
    <RouterLink to="/stats"><button class="button is-primary is-fullwidth">Update</button></RouterLink>
  </div>
</template>

<style scoped></style>
