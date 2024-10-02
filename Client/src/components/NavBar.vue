<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item">
          <!--<img src="images/logo.png" alt="logo" width="112" height="28">-->
          <p class="title is-4 has-text-primary" >MaxFit</p>
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
              <RouterLink to="/login" class="has-text-primary"> Login </RouterLink>
              <ROuterLink to="" class="has-text-primary" href="register.html"> Register </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<style scoped>

</style>