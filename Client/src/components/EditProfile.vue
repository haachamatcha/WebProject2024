<script setup lang="ts">
import { ref } from 'vue'
import { update } from '@/models/users'
import { refSession } from '@/models/session';
import { useRouter } from 'vue-router';

const router=useRouter();
const session = refSession();
const user = session.user;

const first = ref(user?.firstname || '');
const last = ref(user?.lastname || '');
const username = ref(user?.username || '');
const email = ref(user?.email || '');
const bio = ref(user?.bio || '');

const updateUser = async () => {

    const updatedUser = {
        ...user,
        userid: user?.userid || 0,
        firstname: first.value,
        lastname: last.value,
        username: username.value,
        email: email.value,
        bio: bio.value,
        password: user?.password || '',
        isadmin: user?.isadmin ?? false,
    };

    try {
        await update(updatedUser);
        router.push('/');
    } catch (error) {
        console.error('Failed to update user:', error);
        alert('Failed to update user');
    }
};
</script>

<template>
    <div>
        <div class="section">
            <div class="columns is-centered">
                <div class="column is-half">
                    <form action="" class="box has-background-dark">
                        <p class="title">Update</p>
                        <div class="columns">
                            <div class="column is-half">
                                <div class="field">
                                    <label for="firstName" class="label">First Name</label>
                                    <div class="control">
                                        <input type="text" id="firstname" class="input" v-model="first" />
                                    </div>
                                </div>
                            </div>
                            <div class="column is-half">
                                <div class="field">
                                    <label for="lastName" class="label">Last Name</label>
                                    <div class="control">
                                        <input type="text" id="lastname" class="input" v-model="last" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label for="username" class="label">Username</label>
                        <div class="field">
                            <div class="control">
                                <input type="text" id="username" class="input" v-model="username" />
                            </div>
                        </div>
                        <div class="field">
                            <label for="email" class="label">Email</label>
                            <div class="control">
                                <input type="email" id="email" class="input" v-model="email" />
                            </div>
                        </div>
                        <div class="field">
                            <label for="bio" class="label">Bio</label>
                            <div class="control">
                                <textarea id="bio" class="textarea" v-model="bio"></textarea>
                            </div>
                        </div>
                        <div class="field has-text-centered">
                            <button class="button is-primary" @click.prevent="updateUser">
                                <span class="icon">
                                    <i class="fas fa-user-plus"></i>
                                </span>
                                &ensp; Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
