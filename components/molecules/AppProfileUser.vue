<template>
    <div class="flex flex ml-9">
        <div class="flex items-center mr-3 flex-none">
            <button
                id="user-menu-button"
                data-v-74aba0be=""
                type="button"
                aria-expanded="false"
                aria-haspopup="true"
                class="bg-white rounded-full flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <img :src="user ? user.photoURL : baseProfilePhoto" alt="" class="h-8 w-8 rounded-full" />
            </button>
        </div>
        <div class="flex flex-col">
            <span class="text-sm font-normal text-black-dark">{{ user ? user.displayName : '' }}</span>
            <span class="text-sm font-normal text-[#BDBDBD]">{{ user ? user.email : '' }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AppProfileUser',
    data() {
        return {
            baseProfilePhoto: '~assets/images/avatar.webp',
        }
    },
    computed: {
        user() {
            return this.$store.getters.getUser
        },
    },
}
</script>
