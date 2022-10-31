<template>
    <button class="ml-7 w-full flex items-center space-x-2" @click="logout">
        <img
            src="/_nuxt/assets/images/profil.png"
            alt="profile-image"
            class="object-cover rounded-full h-[2.12rem] w-[2.12rem]"
        />
        <span class="flex flex-col font-normal text-sm text-left leading-none">
            <p class="text-black-dark">{{ username ? username : 'John Doe' }}</p>
            <p class="text-gray-400">{{ email ? email : 'johndoe@gmail.com' }}</p>
        </span>
    </button>
</template>

<script>
import { LOGOUT_EVENT } from '~/constants/events'
import { LOGOUT } from '~/constants/actions'

export default {
    computed: {
        username() {
            return this.$store.getters.username
        },
        email() {
            return this.$store.getters.email
        },
    },
    created() {
        this.$nuxt.$emit(LOGOUT_EVENT, this.logout)
    },
    methods: {
        logout() {
            this.$store.dispatch(LOGOUT)
        },
    },
}
</script>

<style></style>
