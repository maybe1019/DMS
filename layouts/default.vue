<template>
    <div class="h-screen flex flex-col w-full min-w-[640px]">
        <header class="relative base-shadow">
            <div class="flex items-center px-[20px] sm:px-[40px] justify-between pr-14 lg:pr-20 py-[18px] space-x-12">
                <div class="flex items-center">
                    <div class="mr-[1.5rem] lg:mr-[4.75rem]">
                        <HamburgerMenuIcon />
                    </div>
                    <div class="lg:mr-5 mr-2">
                        <LogoIcon />
                    </div>
                    <div>
                        <LogoTextIcon />
                    </div>
                </div>
                <div class="flex max-w-[25rem] lg:max-w-[35.875rem] flex-grow">
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
                        <div class="absolute top-0 right-0 flex space-x-[0.875rem] h-full items-center pr-6">
                            <span class="font-normal text-sm text-gray-dark">All</span>
                            <span>
                                <ChevronDownInputIcon />
                            </span>
                        </div>
                    </div>
                </div>
                <div class="ml-14 hidden lg:inline-flex">
                    <div class="flex items-center">
                        <PlusIcon />
                    </div>
                    <AppProfileUser />
                </div>
            </div>
        </header>
        <div class="flex h-full">
            <DmSidebar />
            <main class="flex flex-auto bg-white max-w-[113.125rem] px-12.25 pt-[4.75rem] pb-3">
                <nuxt></nuxt>
            </main>
        </div>
    </div>
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
    },
}
</script>
