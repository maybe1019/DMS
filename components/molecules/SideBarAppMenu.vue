<template>
    <nav aria-label="Sidebar" class="hidden md:block w-[6.875rem] md:flex-shrink-0 md:white">
        <div
            class="relative flex flex-col h-full justify-center border-r border-gray-light py-3 space-y-3 pr-[1.375rem]"
        >
            <div class="flex w-full h-1 items-center justify-center pl-[1.125rem]">
                <hr class="w-[2.875rem] h-[0.5px] border-gray-second" />
            </div>
            <a href="#">
                <AccountMenuItem />
            </a>
            <div class="flex w-full h-1 items-center justify-center pl-[1.125rem]">
                <hr class="w-[2.875rem] h-[0.5px] border-gray-second" />
            </div>
            <a href="#">
                <ServiceMenuItem />
            </a>
            <div class="flex w-full h-1 items-center justify-center pl-[1.125rem]">
                <hr class="w-[2.875rem] h-[0.5px] border-gray-second" />
            </div>
            <a href="#">
                <WorkflowMenuItem />
            </a>
            <div class="flex w-full h-1 items-center justify-center pl-[1.125rem]">
                <hr class="w-[2.875rem] h-[0.5px] border-gray-second" />
            </div>

            <a href="#">
                <DataManagementMenuItem :route="currentRoute" />
            </a>
            <div class="flex w-full h-1 items-center justify-center pl-[1.125rem]">
                <hr class="w-[2.875rem] h-[0.5px] border-gray-second" />
            </div>
        </div>
    </nav>
</template>
<script>
import AccountMenuItem from '~/components/atoms/AccountMenuItem'
import ServiceMenuItem from '~/components/atoms/ServiceMenuItem'
import WorkflowMenuItem from '~/components/atoms/WorkflowMenuItem'
import DataManagementMenuItem from '~/components/atoms/DataManagementMenuItem'
export default {
    name: 'SidebarAppMenu',
    components: { DataManagementMenuItem, WorkflowMenuItem, ServiceMenuItem, AccountMenuItem },
    computed: {
        currentRoute() {
            return this.$route.name
        },
    },
}
</script>
