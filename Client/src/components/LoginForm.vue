<script setup lang="ts"></script>

<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-half">
        <form action="" class="box has-background-dark">
          <p class="title">Login</p>
          <div class="field">
            <label for="email" class="label">Email</label>
            <div class="control">
              <input type="email" id="email" class="input"/>
            </div>
          </div>
          <div class="field">
            <label for="password" class="label">Password</label>
            <div class="control">
              <input type="password" id="password" class="input" />
            </div>
          </div>
          <div class="field has-text-centered">
            <button class="button is-primary">
              <span class="icon">
                <i class="fas fa-sign-in-alt"></i>
              </span>
              &ensp; Login</button>
          </div>
        </form>

        <div class="has-text-centered">
          <br><RouterLink to="/register" class="has-text-info">Don't have an account? Click here Register</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
