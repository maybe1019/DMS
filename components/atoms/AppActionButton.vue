<template>
    <div v-click-outside="handleFocusOut">
        <div @click="toggleDropdown">
            <svg
                width="24"
                height="24"
                class="hover:cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10C16.9 10 16 10.9 16 12ZM14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12ZM8 12C8 10.9 7.1 10 6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12Z"
                    fill="#757575"
                ></path>
            </svg>
        </div>
        <transition name="dropdown">
            <div
                v-show="open"
                class="origin-top-right absolute text-baseText text-[0.9375rem] font-normal right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="0"
            >
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <button
                    id="user-menu-item-0"
                    class="block px-4 py-2 text-sm text-black-dark"
                    role="menuitem"
                    tabindex="-1"
                    @click="editAction"
                >
                    Edit
                </button>
                <button
                    id="user-menu-item-1"
                    class="block px-4 py-2 text-sm text-gray-light"
                    role="menuitem"
                    disabled="disabled"
                    tabindex="-1"
                >
                    Preview
                </button>
                <button
                    id="user-menu-item-2"
                    class="block px-4 py-2 text-sm text-[#F62525]"
                    role="menuitem"
                    tabindex="-1"
                    @click="deleteAction"
                >
                    Delete
                </button>
            </div>
        </transition>
    </div>
</template>

<script>
import { DELETE_EVENT } from '~/constants/events'

export default {
    name: 'AppActionButton',
    Item: {
        type: Object,
        required: false,
        default: () => {},
    },
    data() {
        return {
            open: false,
        }
    },
    methods: {
        toggleDropdown() {
            this.open = !this.open
        },
        handleFocus() {},
        handleFocusOut() {
            if (this.open) this.toggleDropdown()
        },
        async deleteAction() {
            await this.$emit(DELETE_EVENT)
            this.toggleDropdown()
        },
        async editAction() {
            await this.$emit('preview-event')
        },
    },
}
</script>

<style scoped>
.dropdown-leave-active,
.dropdown-enter-active {
    @apply duration-200;
    @apply transition;
}
.dropdown-enter,
.dropdown-leave-to {
    @apply opacity-0;
}
</style>
