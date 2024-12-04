<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { type Post, create } from '../models/posts'
import { refSession } from '@/models/session'
import dayjs from 'dayjs'

const caption = ref<string>('')
const postType = ref<string>('')
const isModalActive = ref<boolean>(false)
const calories = ref<number>(0)
const record = ref<number>(0)
const unit = ref<string>('')

const router = useRouter()
const session = refSession()

const submitPost = () => {
  if (!caption.value || postType.value === 'Post Type') {
    alert('Please fill out all fields correctly')
    return
  }

  if (!session.user) {
    alert('User is not logged in')
    return
  }

  const newPost: Post = {
    firstName: session.user.firstname,
    lastName: session.user.lastname,
    username: session.user.username,
    postType: postType.value,
    record: record.value,
    unit: unit.value,
    date: dayjs().format('DD MMMM YYYY'),
    caption: caption.value,
    calories: calories.value,
    photo: 'generic',
    postid: 0,
    userid: session.user.userid
  }

  create(newPost)
  router.push('/')
  isModalActive.value = false
}

const cancelPost = () => {
  router.push('/')
  isModalActive.value = false
}
</script>

<template>
  <div class="content has-text-centered">
    <button class="button" @click="isModalActive = true">Create Post</button>
  </div>

  <div class="modal" :class="{ 'is-active': isModalActive }">
    <div class="modal-background" @click="isModalActive = false"></div>
    <div class="modal-content">
      <div class="box has-background-dark">
        <h1 class="has-text-centered has-text-white">Create a Post</h1>

        <div class="container">
          <div class="field">
            <div class="control">
              <label for="title" class="label has-text-white">Caption</label>
              <input
                type="text"
                id="title"
                class="input"
                v-model="caption"
                placeholder="Enter a caption"
              />
            </div>
          </div>

          <div class="field">
            <div class="select">
              <select id="postType" v-model="postType">
                <option disabled value="">Select Exercise Type</option>
                <option value="Cardio">Cardio</option>
                <option value="Strength">Strength</option>
              </select>
            </div>
          </div>

          <div v-if="postType === 'Cardio'">
            <div class="field">
              <label class="label has-text-white">Calories Burned</label>
              <div class="control">
                <input
                  type="number"
                  class="input"
                  v-model="calories"
                  placeholder="Enter calories burned"
                />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Record</label>
              <div class="control">
                <input
                  type="number"
                  class="input"
                  v-model="record"
                  placeholder="Enter duration or distance"
                />
              </div>
            </div>
            <div class="field">
              <div class="select">
                <select id="postUnit" v-model="unit">
                  <option disabled value="">Select Unit</option>
                  <option value="Minutes">Minutes</option>
                  <option value="Miles">Miles</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Strength-specific Fields -->
          <div v-else-if="postType === 'Strength'">
            <div class="field">
              <label class="label has-text-white">Calories Burned</label>
              <div class="control">
                <input
                  type="number"
                  class="input"
                  v-model="calories"
                  placeholder="Enter calories burned"
                />
              </div>
            </div>
            <div class="field">
              <label class="label has-text-white">Weight</label>
              <div class="control">
                <input
                  type="number"
                  class="input"
                  v-model="record"
                  placeholder="Enter weight lifted"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input type="hidden" class="input" v-model="unit" value="Pounds" />
              </div>
            </div>
          </div>
        </div>

        <br />

        <div class="field has-text-centered">
          <div class="is-grouped">
            <button class="button is-primary" @click="submitPost">Post</button>
            &ensp;
            <button class="button is-danger" @click="cancelPost">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="isModalActive = false"></button>
  </div>
</template>

<style scoped>
.modal {
  transition: opacity 0.3s ease;
}

.modal.is-active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button.is-active {
  border-left: 4px solid #00d1b2;
  color: #00d1b2;
  font-weight: bold;
}
</style>
