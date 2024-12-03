<script setup lang="ts">
import { ref } from 'vue'
import type { Post } from '../models/posts' // Assuming Post and Comment are defined here


defineProps<{ post: Post }>()
</script>

<template>
  <div class="media box content has-gap has-background-dark">
    <div class="media-left">
      <figure class="image is-48x48">
        <img src="../assets/generic.jpg" alt="Avatar" class="pfp" />
      </figure>
    </div>
    <div class="media-content">
      <p class="has-text-primary bold">
        {{ post.firstName }} {{ post.lastName }}
        <small>@{{ post.username }} &nbsp; {{ post.date }}</small>
      </p>
      <p class="has-text-white bold">{{ post.caption }}</p>
      <div class="columns">
        <div class="column is-one-third">
          <h3 class="is-3">{{ post.postType }}</h3>
          <p class="has-text-primary">Type</p>
        </div>
        <div class="column is-one-third">
          <h3 class="is-3">{{ post.record }} {{ post.unit }}</h3>
          <p class="has-text-primary">{{ post.unit }}</p>
        </div>
        <div class="column is-one-third">
          <h3 class="is-3">{{ post.calories }} Cal</h3>
          <p class="has-text-primary">Calories Burned</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pfp {
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin-right: 1rem;
}

.bold {
  font-weight: bold;
}

.comments {
  border-top: 1px solid #e5e5e5;
  padding-top: 1rem;
}

.comments ul {
  list-style-type: none;
  padding: 0;
}

.comments li {
  margin-bottom: 1rem;
}

.icon {
  margin-right: 0.5rem;
}
</style>
