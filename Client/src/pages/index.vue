<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import PostCard from '@/components/PostCard.vue';
import { getAll, type Post } from '@/models/posts'
import { ref } from 'vue'

const posts = ref<Post[]>([])
posts.value = getAll().data


posts.value = getAll().data.sort((a, b) => b.postid - a.postid);
</script>

<template>
  <main>
    <div class="container has-gap">
    <h1 class="title has-text-centered">
      <span class="icon is-large">
        <i class="fas fa-stream"></i>
      </span>
      Feed</h1>
  </div>
    <div class="columns">
      <div class="column is-one-quarter"></div>
      <div class="column is-half">
        <PostCard v-for="post in posts" :key="post.postid" :post="post" />
      </div>
      <div class="column is-one-quarter"></div>
    </div>
  </main>
</template>
