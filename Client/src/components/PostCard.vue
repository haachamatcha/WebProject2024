<script setup lang="ts">
import { ref } from 'vue';
import type { Post, Comment } from '../models/posts'; // Assuming Post and Comment are defined here
import { deletePost } from '../models/posts'; // Assuming deletePost is a function for deleting posts
import { toggleLike, submitComment } from '../models/posts'; // Import the utility functions

defineProps<{ post: Post }>();

// State variables
const isLiked = ref(false);
const likesCount = ref(0);
const newComment = ref('');
const comments = ref<Comment[]>([]);

// Event handlers
const handleToggleLike = () => toggleLike(isLiked, likesCount);
const handleSubmitComment = () => submitComment(newComment, comments);
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
      <p>{{ post.caption }}</p>
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

      <div class="media-content column">
        <div class="is-centered">
          <img :src="post.photo" alt="Post Photo" />
        </div>
      </div>

      <div class="is-flex is-align-items-center has-gap">
        <button class="button is-primary" @click="handleToggleLike">
          <span class="icon">
            <i :class="{ 'fas fa-heart': isLiked, 'far fa-heart': !isLiked }"></i>
          </span>
          <span class="">{{ likesCount }} {{ likesCount === 1 ? 'Like' : 'Likes' }}</span>
        </button>

        &ensp;

        <button class="">
          <span class="icon">
            <i class="fas fa-share"></i>
          </span>
        </button>
      </div>

      <div class="comments mt-4">
        <h4 class="is-4">Comments ({{ comments.length }})</h4>
        <ul>
          <li v-for="(comment, index) in comments" :key="index">
            <p>
              <strong>{{ comment.username }}</strong> <small>{{ comment.date }}</small>
            </p>
            <p>{{ comment.comment }}</p>
          </li>
        </ul>

        <div class="field mt-4">
          <label class="label">Add a Comment</label>
          <div class="control has-icons-right is-flex">
            <input v-model="newComment" class="input" type="text" placeholder="Write a comment..." />
            <button class="button is-primary ml-2" @click="handleSubmitComment">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div class="media-right">
      <button class="delete" @click="deletePost(post.postid)"></button>
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
