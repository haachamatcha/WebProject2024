<script setup lang="ts">

</script>

<template>
    <div class="section">
        <div class="columns is-centered">
            <div class="column is-half">
                <form action="" class="box has-background-dark">
                    <p class="title">Register</p>
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
                    <div class="field">
                        <label for="confirmPassword" class="label">Confirm Password</label>
                        <div class="control">
                            <input type="password" id="confirmPassword" class="input" />
                        </div>
                    </div>
                    <div class="field has-text-centered">
                        <button class="button is-primary">
                            <span class="icon">
                                <i class="fas fa-user-plus"></i>
                            </span>
                            &ensp; Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>