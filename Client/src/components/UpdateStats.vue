<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { update, get, type Stats } from '../models/stats'
import { refSession } from '../models/session'
import { useRouter } from 'vue-router'
const session = refSession()
const userid = session.user?.userid || 0
const router = useRouter()

const stats = ref<Stats>({
  userid: userid,
  today_lift: 0,
  today_time: 0,
  today_dist: 0,
  today_cal: 0,
  max_lift: 0,
  max_time: 0,
  max_dist: 0,
  max_cal: 0
})

onMounted(async () => {
  const response = await get(userid)
  if (response.data) {
    stats.value = response.data
  }
})

const handleSubmit = async () => {
  const response = await update(stats.value)
  if (response.isSuccess) {
    router.push('/progress')
  } else {
    alert('Failed to update stats')
  }
}
</script>

<template>
  <div>
    <div class="section">
      <div class="columns is-centered">
        <div class="column is-half">
          <form @submit.prevent="handleSubmit" class="box has-background-dark">
            <p class="title">Update Stats</p>
            <div class="field">
              <label for="todayLift" class="label">Today's Lift</label>
              <div class="control">
                <input v-model="stats.today_lift" type="number" id="todayLift" class="input" />
              </div>
            </div>
            <div class="field">
              <label for="todayTime" class="label">Today's Time</label>
              <div class="control">
                <input v-model="stats.today_time" type="number" id="todayTime" class="input" />
              </div>
            </div>
            <div class="field">
              <label for="todayDist" class="label">Today's Distance</label>
              <div class="control">
                <input v-model="stats.today_dist" type="number" id="todayDist" class="input" />
              </div>
            </div>
            <div class="field">
              <label for="todayCal" class="label">Today's Calories</label>
              <div class="control">
                <input v-model="stats.today_cal" type="number" id="todayCal" class="input" />
              </div>
            </div>
            <div class="field">
              <label for="maxLift" class="label">Max Lift</label>
              <div class="control">
                <input v-model="stats.max_lift" type="number" id="maxLift" class="input" />
              </div>
            </div>
            <div class="field">
              <label for="maxTime" class="label">Max Time</label>
              <div class="control">
                <input v-model="stats.max_time" type="number" id="maxTime" class="input" />
              </div>
            </div>
            <div class="field">
              <label for="maxDist" class="label">Max Distance</label>
              <div class="control">
                <input v-model="stats.max_dist" type="number" id="maxDist" class="input" />
              </div>
            </div>
            <div class="field">
              <label for="maxCal" class="label">Max Calories</label>
              <div class="control">
                <input v-model="stats.max_cal" type="number" id="maxCal" class="input" />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-primary">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
