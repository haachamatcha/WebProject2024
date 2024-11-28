<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import PostCard from '@/components/PostCard.vue';
//import { getAll, type Post } from '../models/posts';
import { ref } from 'vue';

import { getAll, type Post } from '@/models/posts';
import { useAuth } from '../models/auth';
import WelcomeHero from '@/components/WelcomeHero.vue';

const posts = ref<Post[]>([]);
getAll().then((data) => {
  console.log(data);
  posts.value = data.data;
});

const { loggedInUser } = useAuth();

</script>

<template>
  <main>
    <div v-if="loggedInUser">
      <div class="container has-gap">

        <h1 class="title has-text-centered">
          Welcome, {{ loggedInUser.firstname }}
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
