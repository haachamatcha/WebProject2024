<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import PostCard from '@/components/PostCard.vue';
import { ref } from 'vue';

import { getAll, type Post } from '@/models/posts';
import WelcomeHero from '@/components/WelcomeHero.vue';
import { refSession } from '@/models/session';

const posts = ref<Post[]>([]);
getAll().then((data) => {
  console.log(data);
  posts.value = data.data;
});

const session = refSession();

</script>

<template>
  <main>
    <div v-if="session.user">
      <div class="container has-gap">

        <h1 class="title has-text-centered">
          Welcome, {{ session.user.username }}!
        </h1>
        <h1 class="title has-text-centered">
          <span class="icon is-large">
            <i class="fas fa-stream"></i>
          </span>
          Feed
        </h1>
      </div>
      <div class="columns">
        <div class="column is-one-quarter"></div>
        <div class="column is-half">
          <PostCard v-for="post in posts" :key="post.postid" :post="post" />
        </div>
        <div class="column is-one-quarter"></div>
      </div>
    </div>

    <div v-else>
      <WelcomeHero />
    </div>
  </main>
</template>
