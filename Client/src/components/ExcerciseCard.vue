<script setup lang="ts">

</script>

<template>
  <div class="media box content has-gap has-background-dark">
    <div class="media-content">
      <p class="has-text-primary bold">
        {{ post.firstName }} {{ post.lastName }}
        <small>@{{ post.username }} &nbsp; {{ post.date }}</small>
      </p>
      <p class="has-text-white bold">{{ post.caption }}</p>
      <div class="columns">
        <div class="column is-one-third">
          <h3 class="is-3">{{ post.postType }}</h3>
          <p class="has-text-primary">Type</p>
        </div>
        <div class="column is-one-third">
          <h3 class="is-3">{{ post.record }} {{ post.unit }}</h3>
          <p class="has-text-primary">{{ post.unit }}</p>
        </div>
        <div class="column is-one-third">
          <h3 class="is-3">{{ post.calories }} Cal</h3>
          <p class="has-text-primary">Calories Burned</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
