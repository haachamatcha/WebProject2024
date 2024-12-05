<script setup lang="ts">
import { getAll, type Stats } from '../models/stats'
import { ref } from 'vue'

const stats = ref<Stats[]>([]);

getAll().then((data) => {
  console.log(data);
  stats.value = data.data;
});
</script>

<template>
  <div class="container has-gap">
    <div class="columns">
      <div class="column is-half">
        <div class="box has-background-dark">
          <p class="has-text-centered has-text-primary">Today</p>
          <div class="content">
            <h1 class="has-text-centered value">{{ stats.today_lift }} lbs</h1>
            <p class="label has-text-centered has-text-primary">Maximum Lift</p>
            <h1 class="has-text-centered value">{{ stats.today_time }} mins</h1>
            <p class="label has-text-centered has-text-primary">Workout Time</p>
            <h1 class="has-text-centered value">{{ stats.today_dist }} m</h1>
            <p class="label has-text-centered has-text-primary">Distance</p>
            <h1 class="has-text-centered value">{{ stats.today_cal }}</h1>
            <p class="label has-text-centered has-text-primary">Calories Burned</p>
          </div>
        </div>
      </div>
      <div class="column is-half">
        <div class="box has-background-dark">
          <p class="has-text-centered has-text-primary">All Time</p>
          <div class="content">
            <h1 class="has-text-centered value">{{stats.max_lift}} lbs</h1>
            <p class="label has-text-centered has-text-primary">Maximum Lift</p>
            <h1 class="has-text-centered value">{{stats.max_time}} mins</h1>
            <p class="label has-text-centered has-text-primary">Workout Time</p>
            <h1 class="has-text-centered value">{{stats.max_dist}} m</h1>
            <p class="label has-text-centered has-text-primary">Distance</p>
            <h1 class="has-text-centered value">{{ stats.max_cal }} </h1>
            <p class="label has-text-centered has-text-primary">Calories Burned</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
