<template>
    <client-only>
        <div>
        <div class="h-screen flex flex-col w-full min-w-[640px] fixed top-0">
            <header class="base-shadow h-[90px] bg-white relative z-20">
                <div class="flex items-center px-[20px] sm:px-[40px] justify-between pr-14 lg:pr-20 py-[18px] space-x-12">
                    <div class="flex items-center">
                        <div class="mr-[1.5rem] lg:mr-[4.75rem] hover:cursor-pointer">
                            <HamburgerMenuIcon />
                        </div>
                        <div class="lg:mr-5 mr-2">
                            <LogoIcon />
                        </div>
                        <div
                            class="flex max-w-[25rem] lg:max-w-[35.875rem] md:hidden transition-width transition-slowest ease"
                            :class="fullSearchBar ? 'w-full' : 'w-20'"
                        >
                            <div class="relative w-full flex items-center py-[0.5625rem] pr-[4rem] bg-gray-medium">
                                <div
                                    class="cursor-pointer absolute top-0 left-0 flex space-x-[0.875rem] h-full items-center"
                                    @click="toggleSearchBar"
                                >
                                    <span class="pl-6">
                                        <SearchInputIcon />
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Start typing for search"
                                    class="hidden md:block w-full pl-16 border-none rounded bg-gray-medium focus:ring-0 placeholder-gray-dark font-normal leading-[16.41px]"
                                />
                                <input
                                    type="text"
                                    placeholder=".........................."
                                    class="md:hidden w-full pl-16 border-none rounded bg-gray-medium focus:ring-0 placeholder-gray-dark font-normal leading-[16.41px]"
                                />
                                <div
                                    class="md:flex absolute top-0 right-0 flex space-x-[0.875rem] h-full items-center pr-6"
                                >
                                    <span class="font-normal text-sm text-gray-dark">All</span>
                                    <span>
                                        <ChevronDownInputIcon />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="hidden 2lg:block">
                            <LogoTextIcon />
                        </div>
                    </div>
                    <div class="w-20 md:block flex max-w-[25rem] lg:max-w-[35.875rem] md:w-full">
                        <div class="relative w-full flex items-center py-[0.5625rem] pr-[4rem] bg-gray-medium">
                            <div class="absolute top-0 left-0 flex space-x-[0.875rem] h-full items-center">
                                <span class="pl-6">
                                    <SearchInputIcon />
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Start typing for search"
                                class="hidden md:block w-full pl-16 border-none rounded bg-gray-medium focus:ring-0 placeholder-gray-dark font-normal leading-[16.41px]"
                            />
                            <input
                                type="text"
                                placeholder=".........................."
                                class="md:hidden w-full pl-16 border-none rounded bg-gray-medium focus:ring-0 placeholder-gray-dark font-normal leading-[16.41px]"
                            />
                            <div class="md:flex absolute top-0 right-0 flex space-x-[0.875rem] h-full items-center pr-6">
                                <span class="font-normal text-sm text-gray-dark">All</span>
                                <span>
                                    <ChevronDownInputIcon />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="ml-14 inline-flex">
                        <div class="2lg:hidden flex items-center">
                            <HamburgerMenuAlt />
                        </div>
                        <div class="flex items-center" :class="fullSearchBar ? 'hidden' : 'lg:inline-flex'">
                            <PlusIcon />
                        </div>

                        <AppProfileUser
                            class="flex items-center"
                            :class="fullSearchBar ? 'hidden' : 'lg:inline-flex'"
                        />
                    </div>
                </div>
            </header>
            <div class="flex grow overflow-auto">
                <DmSidebar />

                <main id="scroll-bar-container" class="bg-white grow px-[20px] overflow-y-scroll relative">
                    <div id="viewport-scroll-bar" class="absolute"></div>
                    <nuxt></nuxt>
                </main>
            </div>
            <AppFooter />
        </div>
    </div>
    </client-only>
</template>

<script>
import DmSidebar from '~/components/organisims/DmSidebar.vue'
import PlusIcon from '~/components/atoms/PlusIcon'
import AppProfileUser from '~/components/molecules/AppProfileUser'
import HamburgerMenuIcon from '~/components/atoms/HamburgerMenuIcon'
import LogoIcon from '~/components/atoms/LogoIcon'
import LogoTextIcon from '~/components/atoms/LogoTextIcon'
import SearchInputIcon from '~/components/atoms/SearchInputIcon'
import ChevronDownInputIcon from '~/components/atoms/ChevronDownInputIcon'
import HamburgerMenuAlt from '~/components/atoms/HamburgerMenuAlt'
import { FULL_SEARCH_BAR_EVENT } from '~/constants/events'
import AppFooter from '../components/ui/AppFooter.vue'

export default {
    name: 'AppTailwind',
    components: {
        ChevronDownInputIcon,
        SearchInputIcon,
        LogoTextIcon,
        LogoIcon,
        HamburgerMenuIcon,
        AppProfileUser,
        PlusIcon,
        DmSidebar,
        HamburgerMenuAlt,
        AppFooter,
    },
    data() {
        return {
            fullSearchBar: false,
        }
    },
    created() {
        this.$nuxt.$on(FULL_SEARCH_BAR_EVENT, () => (this.fullSearchBar = !this.fullSearchBar))
    },
    methods: {
        toggleSearchBar() {
            this.$nuxt.$emit(FULL_SEARCH_BAR_EVENT)
        },
    },
}
</script>
