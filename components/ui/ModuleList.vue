<template>
    <div class="h-screen">
        <div class="font-normal translate-y-12 translate-x-8 text-[24px]">Module List</div>
        <div class="mt-12 px-10 translate-y-16 h-full pb-[70px]">
            <div class="relative sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700">
                        <tr>
                            <th scope="col" class="px-6 py-3 capitalize">Name</th>
                            <th scope="col" class="px-6 py-3 capitalize">Buy date/Active to</th>
                            <th scope="col" class="px-6 py-3 capitalize">Active</th>
                            <th scope="col" class="px-6 py-3 capitalize">Active</th>
                            <th scope="col" class="px-6 py-3 text-center capitalize">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white capitalize rounded">
                            <td
                                scope="row"
                                class="px-6 py-4 capitalize font-normal text-sm text-black-dark whitespace-nowrap"
                            >
                                Ordering
                            </td>
                            <td class="px-6 py-4 text-black-dark font-normal text-sm">
                                <div class="text-[#757575]">08/24/2022</div>
                                <div class="text-[#757575]">09/24/2019</div>
                            </td>
                            <td class="px-6 py-4 text-black-dark">10 days</td>
                            <td class="px-6 py-4 text-[#4489FE] underline">4/5</td>
                            <td class="px-6 py-6 flex justify-center">
                                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                                    <input id="default-toggle" type="checkbox" value="" class="sr-only peer" />
                                    <div
                                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                                    ></div>
                                </label>
                            </td>
                        </tr>
                        <tr class="bg-white capitalize rounded">
                            <td
                                scope="row"
                                class="px-6 py-4 capitalize font-normal text-sm text-black-dark whitespace-nowrap"
                            >
                                Ordering
                            </td>
                            <td class="px-6 py-4 text-black-dark font-normal text-sm">
                                <div class="text-[#757575]">08/24/2022</div>
                                <div class="text-[#757575]">09/24/2019</div>
                            </td>
                            <td class="px-6 py-4 text-black-dark">10 days</td>
                            <td class="px-6 py-4 text-[#4489FE] underline">4/5</td>
                            <td class="px-6 py-6 flex justify-center">
                                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                                    <input id="default-toggle" type="checkbox" value="" class="sr-only peer" />
                                    <div
                                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                                    ></div>
                                </label>
                            </td>
                        </tr>
                        <tr class="bg-white capitalize rounded">
                            <td
                                scope="row"
                                class="px-6 py-4 capitalize font-normal text-sm text-black-dark whitespace-nowrap"
                            >
                                Business Phone
                            </td>
                            <td class="px-6 py-4 text-black-dark font-normal text-sm">
                                <div class="text-[#757575]">08/24/2022</div>
                                <div class="text-[#757575]">09/24/2019</div>
                            </td>
                            <td class="px-6 py-4 text-[#757575]">None</td>
                            <td class="px-6 py-4">-/-</td>
                            <td class="px-6 py-6 flex justify-center">
                                <button class="bg-[#4489FE] w-[103px] h-[44px] rounded-[4px] text-[#FFFFFF]">
                                    Activate
                                </button>
                            </td>
                        </tr>
                        <tr class="bg-white capitalize rounded">
                            <td
                                scope="row"
                                class="px-6 py-4 capitalize font-normal text-sm text-black-dark whitespace-nowrap"
                            >
                                Dictaphone
                            </td>
                            <td class="px-6 py-4 text-black-dark font-normal text-sm">
                                <div class="text-[#757575]">08/24/2022</div>
                                <div class="text-[#757575]">09/24/2019</div>
                            </td>
                            <td class="px-6 py-4 text-[#757575]">None</td>
                            <td class="px-6 py-4">-/-</td>
                            <td class="px-6 py-6 flex justify-center">
                                <button class="bg-[#4489FE] w-[103px] h-[44px] rounded-[4px] text-[#FFFFFF]">
                                    Activate
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import { LOGOUT_EVENT } from '~/constants/events'
import { LOGOUT } from '~/constants/actions'
export default {
    name: 'IndexPage',
    components: {},
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
