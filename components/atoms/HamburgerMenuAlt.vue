<template>
    <button class="mr-[1.1875rem]" @click="toggleSideBar">
        <svg
            id="hamburgerAlt"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
        >
            <path id="hamburgerAlt" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    </button>
</template>
<script>
export default {
    name: 'PlusIcon',
    methods: {
        toggleSideBar() {
            this.$nuxt.$emit('toggleSideBar')
        },
    },
}
</script>
