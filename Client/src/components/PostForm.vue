<!--<script setup lang="ts"></script>

<template>
  <div class="has-gap content column is-half">
    <div class="box has-background-dark">
      <h1 class="has-text-centered">Create a Post</h1>

      <div class="container">
        <div class="field">
          <div class="control">
            <label for="title" class="label">Caption</label>
            <input type="text" id="title" class="input" />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label for="content" class="label">Duration</label>
            <input id="content" class="input" />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label for="content" class="label">Exercise Type</label>
            <div class="select">
              <select id="content">
                <option>Post Type</option>
                <option value="cardio">Cardio</option>
                <option value="strength">Strength</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="field has-text-centered">
        <div class="is-grouped">
          <RouterLink to="allposts" class="button is-primary">Post</RouterLink>
          &ensp;
          <RouterLink to="allposts" class="button is-danger">Cancel</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>-->
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { type Post, addPost } from '../models/posts'

const caption = ref<string>('')
const time = ref<string>('')
const postType = ref<string>('Post Type')


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
    postid: 0
  }

  addPost(newPost)
  router.push('/')
}

const cancelPost = () => {
  router.push('/')
}
</script>

<template>
  <div class="has-gap content column is-half">
    <div class="box has-background-dark">
      <h1 class="has-text-centered">Create a Post</h1>

      <div class="container">
        <div class="field">
          <div class="control">
            <label for="title" class="label">Caption</label>
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
            <label for="duration" class="label">Duration</label>
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
            <label for="postType" class="label">Exercise Type</label>
            <div class="select">
              <select id="postType" v-model="postType">
                <option disabled value="Post Type">Post Type</option>
                <option value="cardio">Cardio</option>
                <option value="strength">Strength</option>
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
</template>

<style scoped></style>
