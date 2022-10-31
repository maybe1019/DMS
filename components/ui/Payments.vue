<template>
    <div class="h-screen">
        <div class="flex flex-row justify-center w-full mt-[100px]">
            <div class="w-1/2 translate-x-56">
                <div class="leading-[28.13px] text-[24px] font-normal font-display">Payment Methods</div>
                <div class="flex space-x-8 mt-6 pt-8">
                    <div>
                        <input
                            id="paypal"
                            class="appearance-none checked:bg-[#4489FE] checked:text-[#4489FE]"
                            type="radio"
                            name="name"
                        />
                    </div>
                    <div>
                        <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.5159 1.61905C14.5714 0.539681 12.8175 0 10.3889 0H3.64286C3.2381 0 2.83333 0.40476 2.69841 0.809522L0 18.4841C0 18.8889 0.269841 19.1587 0.539683 19.1587H4.72222L5.80159 12.5476V12.8175C5.93651 12.4127 6.34127 12.0079 6.74603 12.0079H8.76984C12.6825 12.0079 15.6508 10.3889 16.5952 5.93651C16.5952 5.80159 16.5952 5.66666 16.5952 5.53174C16.4603 5.53174 16.4603 5.53174 16.5952 5.53174C16.7302 3.77778 16.4603 2.69841 15.5159 1.61905Z"
                                fill="#263B80"
                            />
                            <path
                                d="M16.4602 5.53174C16.4602 5.66666 16.4602 5.80158 16.4602 5.9365C15.5158 10.5238 12.5475 12.0079 8.63484 12.0079H6.61103C6.20627 12.0079 5.80151 12.4127 5.66659 12.8175L4.31738 21.0476C4.31738 21.3175 4.4523 21.5873 4.85707 21.5873H8.365C8.76976 21.5873 9.17453 21.3175 9.17453 20.9127V20.7778L9.84913 16.5952V16.3254C9.84913 15.9206 10.2539 15.6508 10.6587 15.6508H11.1983C14.5714 15.6508 17.2698 14.3016 17.9444 10.254C18.2142 8.63491 18.0793 7.15079 17.2698 6.20634C17.1348 5.9365 16.865 5.66666 16.4602 5.53174Z"
                                fill="#139AD6"
                            />
                            <path
                                d="M15.5151 5.12693C15.3801 5.12693 15.2452 4.99201 15.1103 4.99201C14.9754 4.99201 14.8405 4.99201 14.7055 4.85709C14.1659 4.72217 13.6262 4.72217 12.9516 4.72217H7.68967C7.55475 4.72217 7.41983 4.72217 7.28491 4.85709C7.01507 4.99201 6.88015 5.26185 6.88015 5.53169L5.80078 12.5476V12.8174C5.9357 12.4126 6.34046 12.0079 6.74523 12.0079H8.76903C12.6817 12.0079 15.65 10.3888 16.5944 5.93645C16.5944 5.80153 16.5944 5.66661 16.7294 5.53169C16.4595 5.39677 16.3246 5.26185 16.0547 5.26185C15.65 5.12693 15.65 5.12693 15.5151 5.12693Z"
                                fill="#232C65"
                            />
                        </svg>
                    </div>
                    <div>
                        <label for="paypal">
                            PayPal account: ser*****n
                            <span class="text-[#4489FE]">(default)</span>
                        </label>
                    </div>
                </div>
                <div class="flex space-x-8 mt-6 pt-6">
                    <div>
                        <input
                            id="paypal"
                            class="appearance-none checked:bg-[#4489FE] checked:text-[#4489FE]"
                            type="radio"
                            name="name"
                        />
                    </div>
                    <div class="-translate-x-4">
                        <img src="img/mastercard.svg" alt="My Happy SVG" />
                    </div>
                    <div class="-translate-x-7">
                        <label for="paypal">MasterCard ending in 8423</label>
                    </div>
                </div>
                <div class="m-8 w-[285px] bg-[#4489FE] h-[50px] flex justify-center rounded-md">
                    <div class="mt-[13px] text-[#FFFFFF]">Add Payment Method</div>
                </div>
            </div>
            <div class="w-1/2 translate-x-20">
                <div class="leading-[28.13px] text-[24px] font-normal font-display">Billing Instructions</div>
                <div class="pt-8">
                    <div class="translate-x-3 translate-y-2 bg-white w-1/5 sm:w-2/5 md:w-[25%] flex justify-center">
                        <label
                            for="invoice"
                            class="w-[167px] h-[16px] font-display not-italic font-normal text-sm leading-4 flex items-center text-[#757575]"
                        >
                            Preferred Invoice Schedule
                        </label>
                    </div>
                    <select
                        id="invoice"
                        name="invoice"
                        class="box-border w-[405px] h-[50px] rounded-md border-[#DEE0E4] border-solid border-[1px]"
                    >
                        <option value="Monthly ( last Wednesday of each month)" selected>
                            Monthly ( last Wednesday of each month)
                        </option>
                    </select>
                </div>
                <div class="flex space-x-6 pt-6">
                    <div class="translate-y-6">
                        <input type="checkbox" checked />
                    </div>
                    <div>
                        <div class="translate-x-3 translate-y-2 bg-white w-3/6 flex justify-center">
                            <label
                                for="invoice"
                                class="w-[168px] h-[16px] font-display not-italic font-normal text-sm leading-4 flex items-center text-[#757575]"
                            >
                                When Invoice Amount Over
                            </label>
                        </div>
                        <input
                            id="invoice"
                            name="invoice"
                            value="$2000"
                            class="box-border w-[364px] h-[50px] rounded-md border-[#DEE0E4] border-solid border-[1px] text-start pl-[15px]"
                        />
                    </div>
                </div>
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
