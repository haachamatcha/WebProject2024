<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { type Workout, create } from '../models/workout'
import { refSession } from '@/models/session'
import dayjs from 'dayjs'

const session = refSession()
const router = useRouter()

const userid = session.user.userid
const exercise_name = ref<string>('')
const type = ref<string>('')
const record = ref<number>(0)
const unit = ref<string>('')
const count = ref<number>(0)

const isModalActive = ref<boolean>(false)

const submitWorkout = () => {
  if (!exercise_name.value || type.value === 'Type') {
    alert('Please fill out all fields correctly')
    return
  }

  if (!session.user) {
    alert('User is not logged in')
    return
  }

  const newWorkout: Workout = {
    userid: userid,
    exercise_name: exercise_name.value,
    type: type.value,
    date: dayjs().format('DD MMMM YYYY'),
    record: record.value,
    unit: unit.value,
    count: count.value,
    workoutid: 0
  }

  create(newWorkout)
  router.push('/activity/workouts')
  isModalActive.value = false
}
</script>

<template>
  <div class="content has-text-centered">
    <button class="button" @click="isModalActive = true">Create Workout</button>
  </div>

  <div class="modal" :class="{ 'is-active': isModalActive }">
    <div class="modal-background" @click="isModalActive = false"></div>
    <div class="modal-content">
      <div class="box has-background-dark">
        <h1 class="has-text-centered has-text-white">Add Workout</h1>

        <div class="container">
          <div class="field">
            <div class="control">
              <label for="title" class="label has-text-white">Exercise</label>
              <input
                type="text"
                id="title"
                class="input"
                v-model="exercise_name"
                placeholder="Enter a workout name"
              />
            </div>
          </div>

          <div class="field">
            <div class="select">
              <select id="postType" v-model="type">
                <option disabled value="">Select Exercise Type</option>
                <option value="Cardio">Cardio</option>
                <option value="Strength">Strength</option>
              </select>
            </div>
          </div>

          <div v-if="type === 'Cardio'">
            <div class="field">
              <label class="label has-text-white">Record</label>
              <div class="control">
                <input type="number" class="input" v-model="record" placeholder="Enter record " />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Unit</label>
              <div class="select">
                <select id="postUnit" v-model="unit">
                  <option disabled value="">Select Unit</option>
                  <option value="Minutes">Minutes</option>
                  <option value="Miles">Miles</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Count (Laps/Rounds)</label>
              <div class="control">
                <input type="number" class="input" v-model="count" placeholder="Enter count" />
              </div>
            </div>
          </div>

          <!-- Strength-specific Fields -->
          <div v-else-if="type === 'Strength'">
            <div class="field">
              <label class="label has-text-white">Weight</label>
              <div class="control">
                <input
                  type="number"
                  class="input"
                  v-model="record"
                  placeholder="Enter calories burned"
                />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Count (Reps)</label>
              <div class="control">
                <input
                  type="number"
                  class="input"
                  v-model="count"
                  placeholder="Enter weight lifted"
                />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Unit</label>
              <div class="select">
                <select id="postUnit" v-model="unit">
                  <option disabled value="">Select Unit</option>
                  <option value="Pounds">Pounds</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div class="field has-text-centered">
          <div class="is-grouped">
            <button class="button is-primary" @click="submitWorkout">Post</button>
            &ensp;
            <button class="button is-danger" @click="isModalActive = false">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="isModalActive = false"></button>
  </div>
</template>

<style scoped></style>
