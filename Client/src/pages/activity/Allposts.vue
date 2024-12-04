<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue';
import PostCard from '@/components/PostCard.vue';
import { getByUser, type Post } from '@/models/posts';
import { ref } from 'vue';
import WelcomeHero from '@/components/WelcomeHero.vue';
import { refSession } from '@/models/session';

const session = refSession();
const userPosts = ref<Post[]>([]);

if (session.user) {
  getByUser(session.user.userid).then((data) => {
    userPosts.value = data.data;
  });
}
</script>

<template>
  <div class="columns" v-if="session.user">
    <SideMenu />
    <div class="column is-half">
      <PostCard v-for="post in userPosts" :key="post.userid" :post="post"/>
    </div>
  </div>
  <div v-else>
    <WelcomeHero />
  </div>
</template>

<style scoped></style>
