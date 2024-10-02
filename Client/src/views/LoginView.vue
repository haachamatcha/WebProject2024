<script setup lang="ts">

</script>

<template>
    <div class="container">
      <div class="columns is-centered pt-6">
        <div class="column is-half">
          <article class="panel is-primary">
            <p class="panel-heading">Login</p>
            <div class="panel-block">
              <p class="control has-icons-left">
                <input class="input" type="email" placeholder="Email" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div class="panel-block">
              <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="panel-block has-text-centered">
              <p class="control">
                <button class="button is-primary">Login</button>
              </p>
            </div>
          </article>

          <article class="panel is-primary">
            <p class="panel-heading">New to MaxFit?</p>
            <div class="panel-block has-text-centered">
              <p class="control">
                Get started by registering for an account today! Join today to connect with friends and share your fitness journey!<br><br>
                <a href="register.html" class="button is-primary">Create an account</a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>