<script setup lang="ts">
import type { Post } from '@/models/posts'
defineProps<{ post: Post }>()
</script>

<template>
  <div class="media box content has-gap has-background-dark">
    <div class="media-left">
      <figure class="image is-48x48">
        <img src="../assets/generic.jpg" alt="Avatar" class="pfp"/>
      </figure>
    </div>
    <div class="media-content">
      <p class="has-text-primary bold">{{ post.firstName }} {{ post.lastName }} &nbsp; <small>@{{ post.username }} &nbsp; {{ post.date }}</small></p>
      <p class="">{{ post.caption }}</p>
      <div class="columns">
        <div class="column">
          <h3 class="is-3">{{ post.postType }}</h3>
          <p class="has-text-primary">Type</p>
        </div>
      <div class="column">
        <h3 class="is-3">{{ post.time }} {{ post.distance }} {{ post.weight }}</h3>
        <p class="has-text-primary">Time, Distance, Weight</p>
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

.bold{
  font-weight: bold;
}
</style>
