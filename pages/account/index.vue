<template>
    <div class="h-screen flex flex-col">
        <BaseNavbar />
        <div class="min-h-0 flex-1 flex">
            <SideBarAppMenu />
            <main class="main bg-white float-right h-full text-black-dark">
                <!-- Main -->
                <div class="flex-auto h-full flex flex-col bg-white">
                    <div class="border-b h-full flex pb-2 pt-[4.75rem] flex-none">
                        <div class="flex flex-col w-full">
                            <div class="pt-10 flex justify-center rounded w-full">
                                <div class="font-medium flex flex-col rounded col-span-2 w-full h-full">
                                    <div class="mb-4 border-b border-gray-200 dark:border-gray-700 flex justify-center">
                                        <ul
                                            id="myTab"
                                            class="flex px-1 w-1/2 justify-center"
                                            data-tabs-toggle="#myTabContent"
                                            role="tablist"
                                        >
                                            <li class="w-1/2 flex justify-center" role="presentation">
                                                <button
                                                    id="profile-tab"
                                                    class="inline-block p-4 w-full uppercase rounded-t-lg border-b-4 font-lg leading-4 text-xl"
                                                    data-tabs-target="#profile"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="profile"
                                                    aria-selected="true"
                                                >
                                                    Module list
                                                </button>
                                            </li>
                                            <li class="w-1/2 flex justify-center" role="presentation">
                                                <button
                                                    id="dashboard-tab"
                                                    class="inline-block p-4 w-full uppercase font-lg leading-4 rounded-t-lg border-b-4 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                                                    data-tabs-target="#dashboard"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="dashboard"
                                                    aria-selected="false"
                                                >
                                                    PAYMENTS
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="myTabContent">
                                        <div id="profile" class="hidden" role="tabpanel" aria-labelledby="profile-tab">
                                            <ModuleList></ModuleList>
                                        </div>
                                        <div
                                            id="dashboard"
                                            class="hidden"
                                            role="tabpanel"
                                            aria-labelledby="dashboard-tab"
                                        >
                                            <Payments></Payments>
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
    </div>
</template>
<script>
import SideBarAppMenu from '~/components/molecules/SideBarAppMenu'
import BaseNavbar from '~/components/organisims/BaseNavbar.vue'
// import AppSideBar from '~/components/organisims/AppSideBar.vue'
import ModuleList from '~/components/ui/ModuleList.vue'
import Payments from '~/components/ui/Payments.vue'
import { LOGOUT_EVENT } from '~/constants/events'
import { LOGOUT } from '~/constants/actions'
export default {
    name: 'IndexPage',
    components: { BaseNavbar, ModuleList, Payments, SideBarAppMenu },
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
