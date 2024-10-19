<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import { getAll, type Post } from '@/models/posts'
import { ref } from 'vue'

const posts = ref<Post[]>([])
posts.value = getAll().data
</script>

<template>
  <main>
    <div class="columns">
      <div class="column is-one-quarter"></div>
      <div class="column is-half">
        <PostCard v-for="post in posts" :key="post.postid" :post="post" />
      </div>
      <div class="column is-one-quarter"></div>
    </div>
  </main>
</template>
