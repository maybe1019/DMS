<template>
    <div class="h-screen flex flex-col">
        <BaseNavbar />
        <div class="min-h-0 flex-1 flex">
            <SideBarAppMenu />
            <main class="main w-full bg-white float-right h-[650px] text-black-dark">
                <!-- Main -->
                <div class="flex h-full space-x-4 justify-around md:mx-2 mx-60 mt-28">
                    <div class="w-1/3 border pb-44 border-gray-light">
                        <div class="flex justify-center pt-10">
                            <div class="flex flex-col justify-center">
                                <label
                                    class="w-fulll h-[29px] font-display font-normal text-[24px] leading-7 text-center"
                                >
                                    Your Services
                                </label>
                                <label class="leading-[14px] w-full h-[14px] font-display text-[12px]">
                                    You can add your service here
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-center pt-16 space-x-4">
                            <input
                                type="text"
                                name="Service Name"
                                placeholder="Service Name"
                                class="border-[1px] border-[#DEE0E4] box-border w-[228px] h-[50px] rounded"
                            />
                            <button class="w-[100px] h-[50px] bg-[#4489FE] rounded">Add New</button>
                        </div>
                        <div class="flex flex-row justify-left pl-12 pt-11 space-x-4">
                            <span
                                class="rounded-full bg-[#4489FE] w-[34px] h-[34px] font-medium not-italic text-sm leading-4 flex justify-center text-[#FFFFFF] text-center"
                            >
                                <span class="translate-y-2">T</span>
                            </span>
                            <label
                                class="font-display w-[201px] h-[18px] text-normal font-normal text-[15px] leading-[18px] text-black-dark not-italic translate-y-2"
                            >
                                Transcription
                                <span
                                    class="font-display w-[201px] h-[18px] text-normal font-normal text-[15px] leading-[18px] text-[#757575] not-italic"
                                >
                                    (Not configured)
                                </span>
                            </label>
                        </div>
                        <div class="border-b w-4/5 translate-x-12 pt-4"></div>
                        <div class="flex flex-row justify-left pl-12 pt-6 space-x-4">
                            <span
                                class="rounded-full bg-[#9F51B6] w-[34px] h-[34px] font-medium not-italic text-sm leading-4 flex justify-center text-[#FFFFFF] text-center"
                            >
                                <span class="translate-y-2">S</span>
                            </span>
                            <label
                                class="font-display w-[201px] h-[18px] text-normal font-normal text-[15px] leading-[18px] text-black-dark not-italic translate-y-2"
                            >
                                Software / IT
                                <span
                                    class="font-display w-[201px] h-[18px] text-normal font-normal text-[15px] leading-[18px] text-[#757575] not-italic"
                                >
                                    (Not configured)
                                </span>
                            </label>
                        </div>
                        <div class="border-b w-4/5 translate-x-12 pt-4"></div>
                        <div class="flex flex-row justify-left pl-12 pt-6 space-x-4">
                            <span
                                class="rounded-full bg-[#41672A] w-[34px] h-[34px] font-medium not-italic text-sm leading-4 flex justify-center text-[#FFFFFF] text-center"
                            >
                                <span class="translate-y-2">M</span>
                            </span>
                            <label
                                class="font-display w-[201px] h-[18px] text-normal font-normal text-[15px] leading-[18px] text-black-dark not-italic translate-y-2"
                            >
                                Marketing
                                <span
                                    class="font-display w-[201px] h-[18px] text-normal font-normal text-[15px] leading-[18px] text-[#757575] not-italic"
                                >
                                    (Not configured)
                                </span>
                            </label>
                        </div>
                        <div class="border-b w-4/5 translate-x-12 pt-4"></div>
                    </div>
                    <div class="h-full w-2/3 border flex flex-col justify-center border-gray-light">
                        <div class="flex justify-center pt-10">
                            <div class="flex flex-col justify-center">
                                <label
                                    class="w-fulll h-[29px] font-display font-normal text-[24px] leading-7 text-center"
                                >
                                    Select Your Service First
                                </label>
                                <label class="leading-[14px] w-full h-[14px] font-display text-[12px]">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mx-60 mt-28 flex justify-end">
                    <button class="bg-[#CCCCCC] w-[180px] h-[50px] rounded">Next Step</button>
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
import { LOGOUT_EVENT } from '~/constants/events'
import { LOGOUT } from '~/constants/actions'
export default {
    name: 'IndexPage',
    components: { BaseNavbar, SideBarAppMenu },
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
