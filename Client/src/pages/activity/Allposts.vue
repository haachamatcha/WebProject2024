<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue'
import PostCard from '@/components/PostCard.vue'
import { getAll, type Post } from '@/models/posts'
import { ref, computed } from 'vue'
import { useAuth } from '@/models/auth'

const { loggedInUser } = useAuth()

const posts = ref<Post[]>([])

posts.value = getAll().data.sort((a, b) => b.postid - a.postid)

const userPosts = computed(() => {
  if (loggedInUser.value) {
    return posts.value.filter(post => post.userid === loggedInUser.value?.userid)
  }
  return []
})
</script>

<template>
  <div class="columns">
    <SideMenu />
    <PostCard v-for="post in userPosts" :key="post.postid" :post="post" class="column is-half"/>
  </div>
</template>

<style scoped></style>
