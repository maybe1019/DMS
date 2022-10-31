<template>
    <div class="h-screen">
        <!-- Main -->
        <div class="w-full h-full px-11">
            <div class="flex pt-11 w-full justify-between space-x-2">
                <div class="w-1/6">
                    <input
                        type="text"
                        placeholder="Task Name"
                        class="w-full h-[50px] border border-solid border-[#DEE0E4] rounded"
                    />
                </div>
                <div class="w-3/6">
                    <input
                        type="text"
                        placeholder="Description"
                        class="w-full h-[50px] border border-solid border-[#DEE0E4] rounded"
                    />
                </div>
                <div class="w-1/6">
                    <input
                        type="text"
                        placeholder="Advanced Config"
                        value="Advanced Config"
                        class="w-full h-[50px] border-solid border-[#4489FE] rounded border-[1.5px] text-[#4489FE]"
                    />
                </div>
                <div class="w-1/6">
                    <button class="rounded bg-[#4489FE] w-full h-[50px]">Create Task</button>
                </div>
            </div>
            <div class="h-[420px]">
                <div class="relative">
                    <table class="w-full h-full text-sm text-left pt-11">
                        <thead class="text-xs text-gray-700">
                            <tr>
                                <th scope="col" class="w-1/12 py-3 pl-6 capitalize">
                                    <input type="checkbox" />
                                </th>
                                <th scope="col" class="w-2/12 py-3 capitalize">Task Name</th>
                                <th scope="col" class="w-4/12 py-3 capitalize">Description</th>
                                <th scope="col" class="w-2/12 py-3 capitalize">Workflows</th>
                                <th scope="col" class="w-2/12 py-3 capitalize">Advanced Config</th>
                                <th scope="col" class="w-1/12 py-3 text-center capitalize">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td
                                    class="w-1/12 first:border-y-0 first:border-l-0 first:border-t-0 first:rounded-none pl-6"
                                >
                                    <input type="checkbox" />
                                </td>
                                <td class="w-2/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    Сook Сutlet
                                </td>
                                <td class="w-4/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    Fusce sagittis velit vitae augue vulputate congue.Phasellus at lectus quis odio
                                    ullamcorper consectetur ac ...
                                </td>
                                <td class="w-2/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">N/A</td>
                                <td class="w-2/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">N/A</td>
                                <td
                                    class="w-1/12 border-y-0 border-l-0 border-t-0 rounded-none border-b border-r-0 text-center"
                                >
                                    ...
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="w-1/12 first:border-y-0 first:border-l-0 first:border-t-0 first:rounded-none pl-6"
                                >
                                    <input type="checkbox" />
                                </td>
                                <td class="w-2/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    Сook Сutlet
                                </td>
                                <td class="w-4/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    Fusce sagittis velit vitae augue vulputate congue.Phasellus at lectus quis odio
                                    ullamcorper consectetur ac ...
                                </td>
                                <td class="w-2/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">N/A</td>
                                <td class="w-2/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">N/A</td>
                                <td
                                    class="w-1/12 border-y-0 border-l-0 border-t-0 rounded-none border-b border-r-0 text-center"
                                >
                                    ...
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="w-1/12 first:border-y-0 first:border-l-0 first:border-t-0 first:rounded-none pl-6"
                                >
                                    <input type="checkbox" />
                                </td>
                                <td class="w-2/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    Сook Сutlet
                                </td>
                                <td class="w-4/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    Fusce sagittis velit vitae augue vulputate congue.Phasellus at lectus quis odio
                                    ullamcorper consectetur ac ...
                                </td>
                                <td class="w-2/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">N/A</td>
                                <td class="w-2/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">N/A</td>
                                <td
                                    class="w-1/12 border-y-0 border-l-0 border-t-0 rounded-none border-b border-r-0 text-center"
                                >
                                    ...
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="w-1/12 first:border-y-0 first:border-l-0 first:border-t-0 first:rounded-none pl-6"
                                >
                                    <input type="checkbox" />
                                </td>
                                <td class="w-2/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    Сook Сutlet
                                </td>
                                <td class="w-4/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    Fusce sagittis velit vitae augue vulputate congue.Phasellus at lectus quis odio
                                    ullamcorper consectetur ac ...
                                </td>
                                <td class="w-2/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">N/A</td>
                                <td class="w-2/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">N/A</td>
                                <td
                                    class="w-1/12 border-y-0 border-l-0 border-t-0 rounded-none border-b border-r-0 text-center"
                                >
                                    ...
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="w-1/12 first:border-y-0 first:border-l-0 first:border-t-0 first:rounded-none pl-6"
                                >
                                    <input type="checkbox" />
                                </td>
                                <td class="w-2/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    Сook Сutlet
                                </td>
                                <td class="w-4/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    Fusce sagittis velit vitae augue vulputate congue.Phasellus at lectus quis odio
                                    ullamcorper consectetur ac ...
                                </td>
                                <td class="w-2/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">N/A</td>
                                <td class="w-2/12 border-y-0 border-l-0 border-t-0 rounded-none border-b">N/A</td>
                                <td
                                    class="w-1/12 border-y-0 border-l-0 border-t-0 rounded-none border-b border-r-0 text-center"
                                >
                                    ...
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="w-full">
                    <div class="flex w-full">
                        <div class="w-1/12"></div>
                        <div class="w-2/12">Total Items: 6</div>
                        <div class="w-4/12">1-6</div>
                        <div class="w-2/12"></div>
                        <div class="w-2/12"></div>
                        <div class="flex w-1/12 justify-center">
                            <span>
                                <svg
                                    width="8"
                                    height="12"
                                    viewBox="0 0 8 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.19631 2.24465L5.90381 0.952148L0.403809 6.45215L5.90381 11.9521L7.19631 10.6596L2.99798 6.45215L7.19631 2.24465Z"
                                        fill="#757575"
                                    />
                                </svg>
                            </span>
                            <span>
                                <svg
                                    width="8"
                                    height="12"
                                    viewBox="0 0 8 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.944317 10.6596L2.23682 11.9521L7.73682 6.45215L2.23682 0.95215L0.944316 2.24465L5.14265 6.45215L0.944317 10.6596Z"
                                        fill="#757575"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="flex w-full justify-center space-x-4 pt-11 pb-28">
                        <div>
                            <input
                                type="text"
                                placeholder="Add To Workflow List"
                                value="Add To Workflow List"
                                class="w-[220px] h-[50px] border-solid border-[#4489FE] rounded border-[1.5px] text-[#4489FE]"
                            />
                        </div>
                        <div>
                            <button class="rounded bg-[#4489FE] w-[220px] h-[50px]">Creat New Workflow</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Main end -->
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
<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
</style>
