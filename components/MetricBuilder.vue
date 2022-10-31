<template>
    <div class="relative sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700">
                <tr>
                    <th scope="col" class="px-6 py-3 capitalize w-3/8">Name</th>
                    <th scope="col" class="px-6 py-3 capitalize w-4/8">Steps</th>
                    <th scope="col" class="px-6 py-3 capitalize w-1/8 text-right">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white capitalize rounded" @click="showDetail">
                    <td scope="row"
                        class="px-6 py-4 capitalize font-normal text-sm text-black-dark whitespace-nowrap w-3/8">
                        Orders
                    </td>
                    <td class="px-6 py-4 text-black-dark font-normal text-sm w-4/8">4</td>
                    <td class="px-6 py-4 flex justify-end w-1/8 text-right">
                        <AppActionButton />
                        <!-- <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10C16.9 10 16 10.9 16 12ZM14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12ZM8 12C8 10.9 7.1 10 6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12Z"
                                        fill="#757575"
                                    ></path>
                                </svg> -->
                    </td>
                </tr>
                <tr class="bg-white capitalize rounded" @click="showDetail">
                    <td scope="row"
                        class="px-6 py-4 capitalize font-normal text-sm text-black-dark whitespace-nowrap w-3/8">
                        Orders1
                    </td>
                    <td class="px-6 py-4 text-black-dark font-normal text-sm w-4/8">4</td>
                    <td class="px-6 py-4 flex justify-end w-1/8 text-right">
                        <AppActionButton />
                        <!-- <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10C16.9 10 16 10.9 16 12ZM14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12ZM8 12C8 10.9 7.1 10 6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12Z"
                                        fill="#757575"
                                    ></path>
                                </svg> -->
                    </td>
                </tr>
                <tr class="bg-white capitalize rounded" @click="showDetail">
                    <td scope="row"
                        class="px-6 py-4 capitalize font-normal text-sm text-black-dark whitespace-nowrap w-3/8">
                        Orders2
                    </td>
                    <td class="px-6 py-4 text-black-dark font-normal text-sm w-4/8">5</td>
                    <td class="px-6 py-4 flex justify-end w-1/8 text-right">
                        <AppActionButton />
                        <!-- <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10C16.9 10 16 10.9 16 12ZM14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12ZM8 12C8 10.9 7.1 10 6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12Z"
                                        fill="#757575"
                                    ></path>
                                </svg> -->
                    </td>
                </tr>
                <tr class="bg-white capitalize rounded" @click="showDetail">
                    <td scope="row"
                        class="px-6 py-4 capitalize font-normal text-sm text-black-dark whitespace-nowrap w-3/8">
                        Orders3
                    </td>
                    <td class="px-6 py-4 text-black-dark font-normal text-sm w-4/8">6</td>
                    <td class="px-6 py-4 flex justify-end w-1/8 text-right">
                        <AppActionButton />
                        <!-- <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10C16.9 10 16 10.9 16 12ZM14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12ZM8 12C8 10.9 7.1 10 6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12Z"
                                        fill="#757575"
                                    ></path>
                                </svg> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { LOGOUT_EVENT } from '~/constants/events'
import { LOGOUT } from '~/constants/actions'
// eslint-disable-next-line import/order, no-unused-vars
import AppActionButton from './atoms/AppActionButton'
// import AppActionButton from './atoms/AppActionButton.vue'
export default {
    name: 'MetricBuilder',
    components: { AppActionButton },
    layout: 'base',
    head() {
        return {
            title: 'BS | Data Management',
        }
    },
    computed: {
        canCreateAttribute() {
            return this.$store.getters['services/getActiveObject'].objectDefinitionId !== null
        },
    },
    methods: {
        logout() {
            this.$nuxt.$on(LOGOUT_EVENT, () => this.$store.dispatch(LOGOUT))
        },
        showDetail() {
            this.$root.$emit('show-detail')
        },
        openAttributeModal() {
            if (!this.canCreateAttribute) {
                return alert('Please select an object, before adding new attribute !')
            }
            $nuxt.$emit('openAttributeModal')
        },
    },
}
</script>
