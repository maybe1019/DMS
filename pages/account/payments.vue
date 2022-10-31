<template>
    <div class="h-screen">
        <BaseNavbar />
        <AppSideBar />
        <main class="main bg-white float-right h-full text-black-dark">
            <!-- Main -->
            <div class="flex-auto h-full flex flex-col bg-white">
                <div class="border-b h-full flex px-6 pb-2 pt-[4.75rem] flex-none">
                    <div class="flex flex-col w-full">
                        <div class="pt-10 flex justify-center rounded w-full">
                            <div class="font-medium flex flex-col rounded col-span-2 w-1/2 h-full">
                                <div class="flex px-1">
                                    <div class="w-1/2 border-b-4 uppercase pb-6 flex justify-center">Module list</div>
                                    <div
                                        class="w-1/2 flex uppercase text-blue-dark border-blue-dark justify-center pb-6"
                                    >
                                        PAYMENTS
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Main end -->
        </main>
    </div>
</template>
<script>
import BaseNavbar from '~/components/organisims/BaseNavbar.vue'
import AppSideBar from '~/components/organisims/AppSideBar.vue'
import { LOGOUT_EVENT } from '~/constants/events'
import { LOGOUT } from '~/constants/actions'
export default {
    name: 'IndexPage',
    components: { BaseNavbar, AppSideBar },
    layout: 'base',
    head() {
        return {
            title: 'BS | Data Management',
        }
    },
    methods: {
        logout() {
            this.$nuxt.$on(LOGOUT_EVENT, () => this.$store.dispatch(LOGOUT))
        },
    },
}
</script>
