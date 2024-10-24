<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue';
import PostForm from '@/components/PostForm.vue';

import { getAll, type Post } from '@/models/posts'
import { ref } from 'vue'

const posts = ref<Post[]>([])
posts.value = getAll().data


posts.value = getAll().data.sort((a, b) => b.postid - a.postid);
</script>

<template>
  <div class="columns">
    <SideMenu />
    <PostForm />
    <PostCard v-for="post in posts" :key="post.userid" :post="post" />
  </div>
</template>

<style scoped></style>