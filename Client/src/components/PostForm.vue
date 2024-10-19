<script setup lang="ts"></script>

<template>
  <div class="has-gap content column is-half">
    <div class="box has-background-dark">
      <h1 class="has-text-centered">Create a Post</h1>

      <div class="container">
        <div class="field">
          <div class="control">
            <label for="title" class="label">Caption</label>
            <input type="text" id="title" class="input" />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label for="content" class="label">Duration</label>
            <input id="content" class="input" />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label for="content" class="label">Exercise Type</label>
            <div class="select">
              <select id="content">
                <option>Post Type</option>
                <option value="cardio">Cardio</option>
                <option value="strength">Strength</option>
                <option value="meal">Meal</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="field has-text-centered">
        <div class="is-grouped">
          <RouterLink to="allposts" class="button is-primary">Post</RouterLink>
          &ensp;
          <RouterLink to="allposts" class="button is-danger">Cancel</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
