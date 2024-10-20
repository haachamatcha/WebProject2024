<script setup lang="ts"></script>

<template>
  <div class="has-gap content column is-half">
    <div class="box has-background-dark">
      <h1 class="has-text-centered">Profile</h1>
      <div class="columns">
        <figure class="image">
          <img src="../assets/generic.jpg" alt="Avatar" class="profile-image" />
        </figure>
        <div class="content">
          <h3 class="bold">
            (First Name) (Last Name) <small class="has-text-primary">@username</small>
          </h3>
          <div class="columns">
            <div class="column">
              <h4 class="is-3 has-text-centered">Posts</h4>
              <h5 class="has-text-primary has-text-centered">0</h5>
            </div>
            <div class="column">
              <h4 class="is-3 has-text-centered">Followers</h4>
              <h5 class="has-text-primary has-text-centered">0</h5>
            </div>
            <div class="column">
              <h4 class="is-3 has-text-centered">Following</h4>
              <h5 class="has-text-primary has-text-centered">0</h5>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <p class="has-text-centered">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div class="media-content">
        <p class="has-text-centered">
          <RouterLink to="/activity/profile" class="button is-primary">Edit Profile</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-image {
  border-radius: 50%;
  width: 192px;
  height: 192px;
  margin-right: 1rem;
}
</style>
