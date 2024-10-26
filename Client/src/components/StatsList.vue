<script setup lang="ts">
import { useAuth } from '@/models/auth'
import { ref } from 'vue'

const { loggedInUser } = useAuth()

const isLoggedIn = ref<boolean>(!!loggedInUser.value)
</script>

<template>
  <div class="container has-gap" v-if="isLoggedIn">
    <div class="columns">
      <div class="column is-one-third">
        <div class="box has-background-dark">
          <p class="has-text-centered has-text-primary">Today</p>
          <div class="content">
            <h1 class="has-text-centered value">{{ loggedInUser?.statsToday?.maxlift }} lbs</h1>
            <p class="label has-text-centered has-text-primary">Maximum Lift</p>
            <h1 class="has-text-centered value">{{ loggedInUser?.statsToday?.maxtime }} hrs</h1>
            <p class="label has-text-centered has-text-primary">Workout Time</p>
            <h1 class="has-text-centered value">{{loggedInUser?.statsToday?.maxdist}} m</h1>
            <p class="label has-text-centered has-text-primary">Distance</p>
            <h1 class="has-text-centered value">{{loggedInUser?.statsToday?.maxcal}}</h1>
            <p class="label has-text-centered has-text-primary">Calories Burned</p>
          </div>
        </div>
      </div>
      <div class="column is-one-third">
        <div class="box has-background-dark">
          <p class="has-text-centered has-text-primary">This Week</p>
          <div class="content">
            <h1 class="has-text-centered value">{{ loggedInUser?.statsWeek?.maxlift }} lbs</h1>
            <p class="label has-text-centered has-text-primary">Maximum Lift</p>
            <h1 class="has-text-centered value">{{ loggedInUser?.statsWeek?.maxtime }} hrs</h1>
            <p class="label has-text-centered has-text-primary">Workout Time</p>
            <h1 class="has-text-centered value">{{loggedInUser?.statsWeek?.maxdist}} m</h1>
            <p class="label has-text-centered has-text-primary">Distance</p>
            <h1 class="has-text-centered value">{{loggedInUser?.statsWeek?.maxcal}}</h1>
            <p class="label has-text-centered has-text-primary">Calories Burned</p>
          </div>
        </div>
      </div>
      <div class="column is-one-third">
        <div class="box has-background-dark">
          <p class="has-text-centered has-text-primary">All Time</p>
          <div class="content">
            <h1 class="has-text-centered value">{{ loggedInUser?.statsAll?.maxlift }} lbs</h1>
            <p class="label has-text-centered has-text-primary">Maximum Lift</p>
            <h1 class="has-text-centered value">{{ loggedInUser?.statsAll?.maxtime }} hrs</h1>
            <p class="label has-text-centered has-text-primary">Workout Time</p>
            <h1 class="has-text-centered value">{{loggedInUser?.statsAll?.maxdist}} m</h1>
            <p class="label has-text-centered has-text-primary">Distance</p>
            <h1 class="has-text-centered value">{{loggedInUser?.statsAll?.maxcal}}</h1>
            <p class="label has-text-centered has-text-primary">Calories Burned</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="box has-background-danger has-text-centered has-gap container content">
    <h1 class="has-text-white">Error</h1>
    <p class="has-text-white">You need to be logged in to view your profile.</p>
    <RouterLink to="/login" class="button is-light">Go to Login</RouterLink>
  </div>
</template>

<style scoped></style>
