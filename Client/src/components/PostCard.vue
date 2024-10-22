<script setup lang="ts">
import { ref } from 'vue'
import type { Post } from '@/models/posts'
defineProps<{ post: Post }>()

// Reactive state for likes and comments
const isLiked = ref(false)
const likesCount = ref(0)
const newComment = ref('')
const comments = ref([])

// Handle like button
const toggleLike = () => {
  if (isLiked.value) {
    likesCount.value--
  } else {
    likesCount.value++
  }
  isLiked.value = !isLiked.value
}

// Handle new comment submission
const submitComment = () => {
  if (newComment.value.trim()) {
    comments.value.push({
      username: 'currentUser',
      comment: newComment.value.trim(),
      date: new Date().toLocaleDateString()
    })
    newComment.value = ''
  }
}
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

      <!--photo here-->
      <div class="media-content column">
        <div class="is-centered">
          <!--<img :src="post.photo" alt="Post Photo" />-->
          <img src="../assets/genericphoto.jpg" alt="Post Photo" />
        </div>
      </div>

      <div class="is-flex is-align-items-center has-gap">
        <button class="button is-primary" @click="toggleLike">
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
            <input
              v-model="newComment"
              class="input"
              type="text"
              placeholder="Write a comment..."
            />
            <button class="button is-primary ml-2" @click="submitComment">Submit</button>
          </div>
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
