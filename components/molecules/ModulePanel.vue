<template>
    <div
        class="border rounded-[4px] border-gray-light w-[400px] h-full pt-[40px] "
    >
        <VueScrollbar class="relative max-h-full pl-[30px] pr-[28.92px] h-full flex flex-col" :settings="settings">
            <div class="flex items-center justify-between sticky top-0 bg-white space-x-2 pb-5">
                <div class="flex items-center space-x-[13.67px]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.2082 4.06665H13.7665C16.8415 4.06665 18.3415 5.70831 18.3332 9.07498V13.1333C18.3332 16.35 16.3498 18.3333 13.1248 18.3333H6.8665C3.65817 18.3333 1.6665 16.35 1.6665 13.125V6.86665C1.6665 3.41665 3.19984 1.66665 6.22484 1.66665H7.5415C8.31734 1.65831 9.0415 2.01665 9.5165 2.62498L10.2498 3.59998C10.4832 3.89165 10.8332 4.06665 11.2082 4.06665ZM6.14148 12.7416H13.8582C14.1998 12.7416 14.4748 12.4583 14.4748 12.1166C14.4748 11.7666 14.1998 11.4916 13.8582 11.4916H6.14148C5.79148 11.4916 5.51648 11.7666 5.51648 12.1166C5.51648 12.4583 5.79148 12.7416 6.14148 12.7416Z"
                                fill="#767676"
                            ></path>
                        </svg>
                    </div>
                    <div class="font-normal text-[18px] leading-[21.09px]">Modules &amp; Objects</div>
                </div>
                <div class="flex space-x-[16.94px] flex-none">
                    <AddServiceButton />
                    <AddObjectButton />
                </div>
            </div>
            <div class="flex flex-col grow">
                <MenuPanel />
            </div>
        </VueScrollbar>
    </div>
</template>
<script>
import VueScrollbar from 'vue-custom-scrollbar'
import 'vue-custom-scrollbar/dist/vueScrollbar.css'
import MenuPanel from '~/components/molecules/MenuPanel'
import AddServiceButton from '~/components/atoms/AddServiceButton'
import AddObjectButton from '~/components/molecules/AddObjectButton'

export default {
    name: 'AppModulePanel',
    components: {
        AddObjectButton,
        AddServiceButton,
        MenuPanel,
        VueScrollbar,
    },

    data() {
        return {
            settings: {
                suppressScrollY: false,
                suppressScrollX: false,
                wheelPropagation: false,
            },
        }
    },
}
</script>
