<script setup lang="ts">
import { refSession } from '@/models/session';
import { ref } from 'vue';
const session = refSession();
const isLoggedIn = ref<boolean>(!!session.user);

</script>

<template>
  <div class="has-gap content column is-half">
    <div v-if="isLoggedIn" class="box has-background-dark">
      <h1 class="has-text-centered">Profile</h1>
      <figure class="image is-centered">
        <img src="../assets/generic.jpg" alt="Avatar" class="profile-image" />
      </figure>
      <div class="container has-gap columns is-centered">
        <div class="content">
          <h3 class="bold has-text-centered">
            {{ session.user?.firstname }} {{ session.user?.lastname }}
          </h3>
          <h6 class="has-text-primary has-text-centered">@{{ session.user?.username }}</h6>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <p class="has-text-centered">
            {{ session.user?.bio }}
          </p>
        </div>
      </div>
      <div class="media-content">
        <p class="has-text-centered">
          <RouterLink to="/activity/edit" class="button is-primary">Edit Profile</RouterLink>
        </p>
      </div>
    </div>

    <div v-else class="box has-background-danger has-text-centered">
      <h1 class="has-text-white">Error</h1>
      <p class="has-text-white">You need to be logged in to view your profile.</p>
      <RouterLink to="/login" class="button is-light">Go to Login</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.profile-image {
  border-radius: 50%;
  width: 192px;
  height: 192px;
  margin: 0 auto;
}

.image.is-centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
