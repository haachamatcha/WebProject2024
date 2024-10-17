<script setup lang="ts">
import IndexHero from '../components/IndexHero.vue'
</script>

<template>
  <IndexHero />

  <section class="section is-large">
    <p class="title is-2 has-text-white has-text-centered">Tell your Maximum Fitness journey!</p>
    <p class="subtitle has-text-centered has-text-primary">Learn about how you can maximize your fitness with MaxFit</p>
    <div class="columns">
      <div class="column is-half">
          <img src="../assets/yuji.jpg" alt="yuji-nishida" />
      </div>
      <div class="column">
        <h2 class="title">Track your progress</h2>
        <p class="is-2">
          MaxFit allows you to track your fitness progress. You can log your workouts, track your
          diet, and monitor your progress over time. This will help you to stay motivated and reach
          your fitness goals faster.
        </p>
      </div>
    </div>
  </section>

  <section class="section is-large">
    <div class="columns">
      <div class="column">
        <h2 class="title">Connect with others</h2>
        <p class="is-2">
          MaxFit allows you to connect with other users. You can share your progress, ask for
          advice, and motivate each other. A strong community can help you stay motivated and reach
          your fitness goals faster.
        </p>
      </div>
      <div class="column is-half">
        <img src="../assets/wing.jpg" alt="Bboy Wing" />
      </div>
    </div>
  </section>

  <section class="hero is-medium is-primary">
    <div class="hero-body">
      <div class="columns">
        <div class="column is-one-third">
          <h2 class="title has-text-centered">
            <span class="icon is-large">
              <i class="fas fa-thumbs-up"></i>
            </span>
            Motivation
          </h2>
          <p class="subtitle">
            Start your fitness journey and stay motivated by connecting with others and tracking
            your progress.
          </p>
        </div>
        <div class="column is-one-third">
          <h2 class="title has-text-centered">
            <span class="icon is-large"> <i class="fas fa-heart"></i> </span>Wellness
          </h2>
          <p class="subtitle">
            Feel empowered through your fitness journey, and spread positivity with your fitness
            community.
          </p>
        </div>
        <div class="column is-one-third">
          <h2 class="title has-text-centered">
            <span class="icon is-large">
              <i class="fas fa-chart-line"></i>
            </span>
            Focus
          </h2>
          <p class="subtitle">
            Zone in on your personal fitness goals and achieve your maximum fitness.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
