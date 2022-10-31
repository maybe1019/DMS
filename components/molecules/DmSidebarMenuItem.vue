<template>
    <div class="flex flex-col">
        <div class="flex items-center justify-center">
            <hr class="h-[0.5px] w-[2.875rem] bg-gray-light" />
        </div>
        <li class="inline-flex pr-[23px] my-[5px]">
            <div
                :class="
                    active
                        ? 'flex-none bg-blue-dark h-[70px] w-[5px] mr-[18px] rounded-tr-lg rounded-br-lg'
                        : 'flex-none bg-white h-[70px] w-[5px] mr-[18px] rounded-tr-lg rounded-br-lg'
                "
            ></div>
            <div class="flex flex-col text-[10px] text-center justify-center items-center w-full">
                <slot></slot>
                <span :class="active ? 'uppercase font-bold text-blue-dark' : 'uppercase font-bold text-gray-dark'">
                    {{ title }}
                </span>
            </div>
        </li>
        <hr class="h-[0.5px] w-[2.875rem] bg-gray-light mx-[32px]" />
    </div>
</template>
<script>
export default {
    name: 'DmSidebarMenuItem',
    props: {
        title: {
            type: String,
            required: true,
        },
        active: {
            type: Boolean,
            required: false,
            default: () => false,
        },
    },
}
</script>
