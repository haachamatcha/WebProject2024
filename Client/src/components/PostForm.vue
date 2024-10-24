<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { type Post, addPost } from '../models/posts'

const caption = ref<string>('')
const time = ref<string>('')
const postType = ref<string>('Post Type')
const isModalActive = ref<boolean>(false)

const router = useRouter()

const submitPost = () => {
  if (!caption.value || !time.value || postType.value === 'Post Type') {
    alert('Please fill out all fields correctly')
    return
  }

  const newPost: Post = {
    firstName: '(First)',
    lastName: '(Last)',
    username: 'User',
    postType: postType.value,
    time: time.value,
    date: new Date().toISOString(),
    caption: caption.value,
    calories: 500,
    postid: 0,
    userid: 0
  }

  addPost(newPost)
  router.push('/')
  isModalActive.value = false // Close modal after posting
}

const cancelPost = () => {
  router.push('/')
  isModalActive.value = false // Close modal on cancel
}
</script>

<template>
  <div class="column is-half">
    <!-- Button to trigger modal -->
    <div class="content has-text-centered">
      <button class="button is-primary has-gap" @click="isModalActive = true">Create Post</button>
    </div>

    <!-- Modal -->
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
              <div class="control">
                <label for="duration" class="label has-text-white">Duration</label>
                <input
                  type="text"
                  id="duration"
                  class="input"
                  v-model="time"
                  placeholder="Enter duration"
                />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label for="postType" class="label has-text-white">Exercise Type</label>
                <div class="select">
                  <select id="postType" v-model="postType">
                    <option disabled value="Post Type">Post Type</option>
                    <option value="Cardio">Cardio</option>
                    <option value="Strength">Strength</option>
                  </select>
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
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="isModalActive = false"
      ></button>
    </div>
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
</style>
