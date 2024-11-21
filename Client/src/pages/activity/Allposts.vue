<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue'
import PostCard from '@/components/PostCard.vue'
import { getAll, getById, type Post } from '@/models/posts'
import { ref, computed } from 'vue'
import { useAuth } from '@/models/auth'

const { loggedInUser } = useAuth()

const posts = ref<Post[]>([])

//posts.value = getAll().data.sort((a, b) => b.postid - a.postid)

/*const userPosts = computed(() => {
  if (loggedInUser.value) {
    return posts.value.filter((post) => post.userid === loggedInUser.value?.userid)
  }
  return []
})*/

const userPosts = ref<Post[]>([])

</script>

<template>
  <div class="columns">
    <SideMenu />
    <div v-if="loggedInUser"  class="column is-half">
      <PostCard v-for="post in userPosts" :key="post.userid" :post="post"/>
    </div>
    <div v-else class="column is-half box has-background-danger has-text-centered has-gap content">
      <h1 class="has-text-white">Error</h1>
      <p class="has-text-white">You need to be logged in to view your posts.</p>
      <RouterLink to="/login" class="button is-light">Go to Login</RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
