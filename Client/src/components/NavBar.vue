<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand is-white">
        <RouterLink to="/" class="navbar-item" href="index.html">
          <!--<img src="images/logo.png" alt="logo" width="112" height="28">-->
          <p class="title is-4 has-text-black">MaxFit</p>
        </RouterLink>  
        <!--<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
              </a>-->
      </div>

      <div id="navbar" class="navbar-menu is-white">
        <div class="navbar-start">
            <RouterLink to="/" class="navbar-item"> Home </RouterLink>

            <RouterLink to="/about" class="navbar-item"> About </RouterLink>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="has-text-black" href="login.html"> Login </a>
              <a class="has-text-black" href="register.html"> Register </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<style scoped></style>