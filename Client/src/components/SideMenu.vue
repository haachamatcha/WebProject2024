<script setup lang="ts"></script>

<template>
  <div class="column is-one-quarter has-gap adjusted">
    <aside class="menu">
      <p class="menu-label has-text-primary">Account Management</p>
      <ul class="menu-list">
        <li><RouterLink to="/activity/allposts">All Posts</RouterLink></li>
        <!--<li><RouterLink to="/activity/create">Create Post</RouterLink></li>-->
        <li><RouterLink to="/activity/profile">Profile</RouterLink></li>
      </ul>
    </aside>
  </div>
</template>

<style scoped>
.router-link-active {
    border-left: 4px solid #00d1b2;
    color: #00d1b2;
    font-weight: bold;
}
</style>
