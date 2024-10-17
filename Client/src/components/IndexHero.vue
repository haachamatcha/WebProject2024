<script setup lang="ts">

</script>

<template>
    <section class="hero is-small fade-load-in">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-centered">Welcome to MaxFit</h1>
          <h2 class="subtitle is-3 has-text-centered has-text-primary">
            Your one stop app for sharing all things fitness and lifestyle.
          </h2>
          <p class="has-text-centered">
            MaxFit is a social media platform for fitness enthusiasts to connect and share their fitness journey with others. Post your workouts, meals, and progress pictures to inspire others and track your own progress. Join today and start your fitness journey!
          </p>
        </div>
      </div>
    </section>
</template>

<style scoped>
.fade-load-in{
    animation: fadeIn 2s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>