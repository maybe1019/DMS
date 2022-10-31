<template>
    <div class="h-screen">
        <div class="flex justify-start pt-6 space-x-1" @click="hideDetail">
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.19631 2.24465L5.90381 0.952148L0.403809 6.45215L5.90381 11.9521L7.19631 10.6596L2.99798 6.45215L7.19631 2.24465Z"
                    fill="#757575"
                />
            </svg>
            <div class="font-display font-normal text-sm leading-4 text-[#757575]">Back to List</div>
        </div>
        <div class="flex flex-col justify-around border h-[15%] mx-11 translate-y-11 rounded border-gray-light">
            <div class="w-full flex justify-around px-11 space-x-8">
                <div class="w-1/2">
                    <div class="translate-x-3 translate-y-2 bg-white w-1/6 flex justify-center">
                        <label
                            for="invoice"
                            class="font-display not-italic font-normal text-sm leading-4 flex text-[#757575]"
                        >
                            Name
                        </label>
                    </div>
                    <input
                        id="invoice"
                        name="invoice"
                        value="Orders"
                        class="box-border w-full h-[50px] rounded-md border-[#DEE0E4] border-solid border-[1px] text-start pl-[15px]"
                    />
                </div>
                <div class="flex space-x-2 w-1/2 translate-y-4">
                    <div class="w-1/2">
                        <button class="rounded border border-[#4489FE] text-[#4489FE] w-full h-[50px]">Add Step</button>
                    </div>
                    <div class="w-1/2">
                        <button class="rounded bg-[#4489FE] text-[#FFFFFF] w-full h-[50px]">Preview</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="border rounded border-gray-light flex flex-col mx-11 translate-y-16">
            <div class="flex justify-between mx-11 pt-11">
                <div class="text-black-dark text-lg leading-4">Order Step</div>
                <div class="flex justify-between">
                    <div class="-translate-y-6">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_130_3965)">
                                <circle cx="30" cy="28" r="20" fill="white" />
                            </g>
                            <path
                                d="M35.8108 29.2396H31.3117V33.6997C31.3117 34.4178 30.7244 35 30 35C29.2756 35 28.6883 34.4178 28.6883 33.6997V29.2396H24.1892C23.5135 29.1702 23 28.6057 23 27.9323C23 27.2589 23.5135 26.6944 24.1892 26.625H28.6742V22.1789C28.7442 21.509 29.3136 21 29.9929 21C30.6723 21 31.2417 21.509 31.3117 22.1789V26.625H35.8108C36.4865 26.6944 37 27.2589 37 27.9323C37 28.6057 36.4865 29.1702 35.8108 29.2396Z"
                                fill="#212121"
                            />
                            <defs>
                                <filter
                                    id="filter0_d_130_3965"
                                    x="0"
                                    y="0"
                                    width="60"
                                    height="60"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                >
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy="2" />
                                    <feGaussianBlur stdDeviation="5" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_130_3965"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_130_3965"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10C16.9 10 16 10.9 16 12ZM14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12ZM8 12C8 10.9 7.1 10 6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12Z"
                                fill="#212121"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="mx-11 flex space-x-2">
                <div class="pt-8 w-[95%]">
                    <div class="translate-x-3 translate-y-2 bg-white w-[13%] sm:w-2/5 md:w-[13%] flex justify-center">
                        <label
                            for="invoice"
                            class="h-[16px] font-display not-italic font-normal text-sm leading-4 flex items-center text-[#757575]"
                        >
                            Select Table
                        </label>
                    </div>
                    <select
                        id="invoice"
                        name="invoice"
                        class="box-border w-full h-[50px] rounded-md border-[#DEE0E4] border-solid border-[1px]"
                    >
                        <option value="Table 1" selected>Table 1</option>
                    </select>
                </div>
                <div class="w-[5%]"></div>
            </div>
            <div class="flex mx-11 space-x-2">
                <div class="pt-8 w-[47%]">
                    <div class="translate-x-3 translate-y-2 bg-white w-[20%] sm:w-2/5 md:w-[19%] flex justify-center">
                        <label
                            for="invoice"
                            class="h-[16px] font-display not-italic font-normal text-sm leading-4 flex items-center text-[#757575]"
                        >
                            Function
                        </label>
                    </div>
                    <select
                        id="invoice"
                        name="invoice"
                        class="box-border w-full h-[50px] rounded-md border-[#DEE0E4] border-solid border-[1px]"
                    >
                        <option value="Table 1" selected>Table 1</option>
                    </select>
                </div>
                <div class="pt-8 w-[47%]">
                    <div class="translate-x-3 translate-y-2 bg-white w-[35%] sm:w-2/5 md:w-[35%] flex justify-center">
                        <label
                            for="invoice"
                            class="h-[16px] font-display not-italic font-normal text-sm leading-4 flex items-center text-[#757575]"
                        >
                            Select Table Field
                        </label>
                    </div>
                    <select
                        id="invoice"
                        name="invoice"
                        class="box-border w-full h-[50px] rounded-md border-[#DEE0E4] border-solid border-[1px]"
                    >
                        <option value="Table 1" selected>Table 1</option>
                    </select>
                </div>
                <div class="w-[5%] pt-8 mt-[30px]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.3981 3.15723L4.39811 3.15725L9.00007 7.75934L13.6022 3.15725C13.9452 2.81426 14.4999 2.81425 14.8429 3.15723C15.1861 3.50023 15.1861 4.05502 14.8429 4.39802L10.241 9.00009L14.8429 13.6022C14.8429 13.6022 14.8429 13.6022 14.8429 13.6022C15.1861 13.9452 15.1861 14.4999 14.8429 14.8429L4.3981 3.15723ZM4.3981 3.15723C4.05497 2.81427 3.50038 2.81424 3.15737 3.15723H4.3981ZM7.75932 9.00009L3.15737 4.39802C3.15737 4.39801 3.15736 4.39801 3.15736 4.398C2.81421 4.055 2.81421 3.50025 3.15736 3.15725L7.75932 9.00009ZM7.75932 9.00009L3.15737 13.6022C3.15737 13.6022 3.15736 13.6022 3.15736 13.6022C2.81423 13.9452 2.81421 14.4999 3.15732 14.8429C3.3283 15.014 3.55324 15.1 3.77773 15.1C4.00225 15.1 4.22703 15.014 4.39811 14.8429L9.00007 10.2408L13.6022 14.8429C13.7733 15.014 13.998 15.1 14.2225 15.1C14.4471 15.1 14.6718 15.014 14.8429 14.8429L7.75932 9.00009Z"
                            fill="#000000"
                            stroke="#212121"
                            stroke-width="0.2"
                        />
                    </svg>
                </div>
            </div>
            <div class="mx-11 pt-8">
                <div class="w-[120px] flex rounded-lg">
                    <button
                        class="bg-[#4489FE] h-[40px] font-display text-[#FFFFFF] text-lg shadow-lg w-[60px] rounded-tl rounded-bl shadow-black opacity-100"
                    >
                        AND
                    </button>
                    <button
                        class="h-[40px] font-display text-black-dark text-lg shadow-lg w-[60px] rounded-br rounded-tr shadow-black opacity-100"
                    >
                        OR
                    </button>
                </div>
                <div class="flex space-x-2 w-full pt-4">
                    <div
                        class="w-[2%] border-dashed h-[60px] border-t-0 border-r-0 mb-[20px] border-l-2 border-b-2 -translate-y-4 translate-x-2 border-[#C4C4C4]"
                    ></div>
                    <div class="w-[30%]">
                        <div
                            class="translate-x-3 translate-y-2 bg-white w-[35%] sm:w-2/5 md:w-[55%] flex justify-center"
                        >
                            <label
                                for="invoice"
                                class="h-[16px] font-display not-italic font-normal text-sm leading-4 flex items-center text-[#757575]"
                            >
                                Select Table Field
                            </label>
                        </div>
                        <select
                            id="invoice"
                            name="invoice"
                            class="box-border w-full h-[50px] rounded-md border-[#DEE0E4] border-solid border-[1px]"
                        >
                            <option value="Table 1" selected>Table 1</option>
                        </select>
                    </div>
                    <div class="w-[30%]">
                        <div
                            class="translate-x-3 translate-y-2 bg-white w-[35%] sm:w-2/5 md:w-[55%] flex justify-center"
                        >
                            <label
                                for="invoice"
                                class="h-[16px] font-display not-italic font-normal text-sm leading-4 flex items-center text-[#757575]"
                            >
                                Equal/Not Equal
                            </label>
                        </div>
                        <select
                            id="invoice"
                            name="invoice"
                            class="box-border w-full h-[50px] rounded-md border-[#DEE0E4] border-solid border-[1px]"
                        >
                            <option value="Table 1" selected>Equal</option>
                        </select>
                    </div>
                    <div class="w-[30%]">
                        <div class="translate-x-3 translate-y-2 bg-white w-[20%] flex justify-center">
                            <label
                                for="invoice"
                                class="font-display not-italic font-normal text-sm leading-4 flex text-[#757575]"
                            >
                                Value
                            </label>
                        </div>
                        <input
                            id="invoice"
                            name="invoice"
                            value="Orders"
                            class="box-border w-full h-[50px] rounded-md border-[#DEE0E4] border-solid border-[1px] text-start pl-[15px]"
                        />
                    </div>
                    <div class="w-[5%] pt-8">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.3981 3.15723L4.39811 3.15725L9.00007 7.75934L13.6022 3.15725C13.9452 2.81426 14.4999 2.81425 14.8429 3.15723C15.1861 3.50023 15.1861 4.05502 14.8429 4.39802L10.241 9.00009L14.8429 13.6022C14.8429 13.6022 14.8429 13.6022 14.8429 13.6022C15.1861 13.9452 15.1861 14.4999 14.8429 14.8429L4.3981 3.15723ZM4.3981 3.15723C4.05497 2.81427 3.50038 2.81424 3.15737 3.15723H4.3981ZM7.75932 9.00009L3.15737 4.39802C3.15737 4.39801 3.15736 4.39801 3.15736 4.398C2.81421 4.055 2.81421 3.50025 3.15736 3.15725L7.75932 9.00009ZM7.75932 9.00009L3.15737 13.6022C3.15737 13.6022 3.15736 13.6022 3.15736 13.6022C2.81423 13.9452 2.81421 14.4999 3.15732 14.8429C3.3283 15.014 3.55324 15.1 3.77773 15.1C4.00225 15.1 4.22703 15.014 4.39811 14.8429L9.00007 10.2408L13.6022 14.8429C13.7733 15.014 13.998 15.1 14.2225 15.1C14.4471 15.1 14.6718 15.014 14.8429 14.8429L7.75932 9.00009Z"
                                fill="#000000"
                                stroke="#212121"
                                stroke-width="0.2"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="border rounded border-gray-light flex flex-col mx-11 translate-y-16 mt-5">
            <div class="flex justify-between mx-11 pt-11">
                <div class="text-black-dark text-lg leading-4">Task</div>
                <div class="flex justify-between">
                    <div class="-translate-y-6">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_130_3965)">
                                <circle cx="30" cy="28" r="20" fill="white" />
                            </g>
                            <path
                                d="M35.8108 29.2396H31.3117V33.6997C31.3117 34.4178 30.7244 35 30 35C29.2756 35 28.6883 34.4178 28.6883 33.6997V29.2396H24.1892C23.5135 29.1702 23 28.6057 23 27.9323C23 27.2589 23.5135 26.6944 24.1892 26.625H28.6742V22.1789C28.7442 21.509 29.3136 21 29.9929 21C30.6723 21 31.2417 21.509 31.3117 22.1789V26.625H35.8108C36.4865 26.6944 37 27.2589 37 27.9323C37 28.6057 36.4865 29.1702 35.8108 29.2396Z"
                                fill="#212121"
                            />
                            <defs>
                                <filter
                                    id="filter0_d_130_3965"
                                    x="0"
                                    y="0"
                                    width="60"
                                    height="60"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                >
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy="2" />
                                    <feGaussianBlur stdDeviation="5" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_130_3965"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_130_3965"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10C16.9 10 16 10.9 16 12ZM14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12ZM8 12C8 10.9 7.1 10 6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12Z"
                                fill="#212121"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="mx-11 flex space-x-2">
                <div class="pt-8 w-[95%]">
                    <div class="translate-x-3 translate-y-2 bg-white w-[15%] sm:w-2/5 md:w-[13%] flex justify-center">
                        <label
                            for="invoice"
                            class="h-[16px] font-display not-italic font-normal text-sm leading-4 flex items-center text-[#757575]"
                        >
                            Select Table
                        </label>
                    </div>
                    <select
                        id="invoice"
                        name="invoice"
                        class="box-border w-full h-[50px] rounded-md border-[#DEE0E4] border-solid border-[1px]"
                    >
                        <option value="Table 1" selected>Table 1</option>
                    </select>
                </div>
                <div class="w-[5%]"></div>
            </div>
            <div class="flex mx-11 space-x-2">
                <div class="pt-8 w-[47%]">
                    <div class="translate-x-3 translate-y-2 bg-white w-[20%] sm:w-2/5 md:w-[19%] flex justify-center">
                        <label
                            for="invoice"
                            class="h-[16px] font-display not-italic font-normal text-sm leading-4 flex items-center text-[#757575]"
                        >
                            Function
                        </label>
                    </div>
                    <select
                        id="invoice"
                        name="invoice"
                        class="box-border w-full h-[50px] rounded-md border-[#DEE0E4] border-solid border-[1px]"
                    >
                        <option value="Table 1" selected>Table 1</option>
                    </select>
                </div>
                <div class="pt-8 w-[47%]">
                    <div class="translate-x-3 translate-y-2 bg-white w-[35%] sm:w-2/5 md:w-[35%] flex justify-center">
                        <label
                            for="invoice"
                            class="h-[16px] font-display not-italic font-normal text-sm leading-4 flex items-center text-[#757575]"
                        >
                            Select Table Field
                        </label>
                    </div>
                    <select
                        id="invoice"
                        name="invoice"
                        class="box-border w-full h-[50px] rounded-md border-[#DEE0E4] border-solid border-[1px]"
                    >
                        <option value="Table 1" selected>Table 1</option>
                    </select>
                </div>
                <div class="w-[5%] pt-8 mt-[30px]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.3981 3.15723L4.39811 3.15725L9.00007 7.75934L13.6022 3.15725C13.9452 2.81426 14.4999 2.81425 14.8429 3.15723C15.1861 3.50023 15.1861 4.05502 14.8429 4.39802L10.241 9.00009L14.8429 13.6022C14.8429 13.6022 14.8429 13.6022 14.8429 13.6022C15.1861 13.9452 15.1861 14.4999 14.8429 14.8429L4.3981 3.15723ZM4.3981 3.15723C4.05497 2.81427 3.50038 2.81424 3.15737 3.15723H4.3981ZM7.75932 9.00009L3.15737 4.39802C3.15737 4.39801 3.15736 4.39801 3.15736 4.398C2.81421 4.055 2.81421 3.50025 3.15736 3.15725L7.75932 9.00009ZM7.75932 9.00009L3.15737 13.6022C3.15737 13.6022 3.15736 13.6022 3.15736 13.6022C2.81423 13.9452 2.81421 14.4999 3.15732 14.8429C3.3283 15.014 3.55324 15.1 3.77773 15.1C4.00225 15.1 4.22703 15.014 4.39811 14.8429L9.00007 10.2408L13.6022 14.8429C13.7733 15.014 13.998 15.1 14.2225 15.1C14.4471 15.1 14.6718 15.014 14.8429 14.8429L7.75932 9.00009Z"
                            fill="#000000"
                            stroke="#212121"
                            stroke-width="0.2"
                        />
                    </svg>
                </div>
            </div>
            <div class="mx-11 pt-8">
                <div class="w-[120px] flex rounded-lg">
                    <button
                        class="bg-[#4489FE] h-[40px] font-display text-[#FFFFFF] text-lg shadow-lg w-[60px] rounded-tl rounded-bl shadow-black opacity-100"
                    >
                        AND
                    </button>
                    <button
                        class="h-[40px] font-display text-black-dark text-lg shadow-lg w-[60px] rounded-br rounded-tr shadow-black opacity-100"
                    >
                        OR
                    </button>
                </div>
                <div class="flex space-x-2 w-full pt-4">
                    <div
                        class="w-[2%] border-dashed h-[60px] border-t-0 border-r-0 mb-[20px] border-l-2 border-b-2 -translate-y-4 translate-x-2 border-[#C4C4C4]"
                    ></div>
                    <div class="w-[30%]">
                        <div
                            class="translate-x-3 translate-y-2 bg-white w-[35%] sm:w-2/5 md:w-[55%] flex justify-center"
                        >
                            <label
                                for="invoice"
                                class="h-[16px] font-display not-italic font-normal text-sm leading-4 flex items-center text-[#757575]"
                            >
                                Select Table Field
                            </label>
                        </div>
                        <select
                            id="invoice"
                            name="invoice"
                            class="box-border w-full h-[50px] rounded-md border-[#DEE0E4] border-solid border-[1px]"
                        >
                            <option value="Table 1" selected>Table 1</option>
                        </select>
                    </div>
                    <div class="w-[30%]">
                        <div
                            class="translate-x-3 translate-y-2 bg-white w-[35%] sm:w-2/5 md:w-[55%] flex justify-center"
                        >
                            <label
                                for="invoice"
                                class="h-[16px] font-display not-italic font-normal text-sm leading-4 flex items-center text-[#757575]"
                            >
                                Equal/Not Equal
                            </label>
                        </div>
                        <select
                            id="invoice"
                            name="invoice"
                            class="box-border w-full h-[50px] rounded-md border-[#DEE0E4] border-solid border-[1px]"
                        >
                            <option value="Table 1" selected>Equal</option>
                        </select>
                    </div>
                    <div class="w-[30%]">
                        <div class="translate-x-3 translate-y-2 bg-white w-[20%] flex justify-center">
                            <label
                                for="invoice"
                                class="font-display not-italic font-normal text-sm leading-4 flex text-[#757575]"
                            >
                                Value
                            </label>
                        </div>
                        <input
                            id="invoice"
                            name="invoice"
                            value="Orders"
                            class="box-border w-full h-[50px] rounded-md border-[#DEE0E4] border-solid border-[1px] text-start pl-[15px]"
                        />
                    </div>
                    <div class="w-[5%] pt-8">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.3981 3.15723L4.39811 3.15725L9.00007 7.75934L13.6022 3.15725C13.9452 2.81426 14.4999 2.81425 14.8429 3.15723C15.1861 3.50023 15.1861 4.05502 14.8429 4.39802L10.241 9.00009L14.8429 13.6022C14.8429 13.6022 14.8429 13.6022 14.8429 13.6022C15.1861 13.9452 15.1861 14.4999 14.8429 14.8429L4.3981 3.15723ZM4.3981 3.15723C4.05497 2.81427 3.50038 2.81424 3.15737 3.15723H4.3981ZM7.75932 9.00009L3.15737 4.39802C3.15737 4.39801 3.15736 4.39801 3.15736 4.398C2.81421 4.055 2.81421 3.50025 3.15736 3.15725L7.75932 9.00009ZM7.75932 9.00009L3.15737 13.6022C3.15737 13.6022 3.15736 13.6022 3.15736 13.6022C2.81423 13.9452 2.81421 14.4999 3.15732 14.8429C3.3283 15.014 3.55324 15.1 3.77773 15.1C4.00225 15.1 4.22703 15.014 4.39811 14.8429L9.00007 10.2408L13.6022 14.8429C13.7733 15.014 13.998 15.1 14.2225 15.1C14.4471 15.1 14.6718 15.014 14.8429 14.8429L7.75932 9.00009Z"
                                fill="#000000"
                                stroke="#212121"
                                stroke-width="0.2"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex space-x-2 translate-y-4 mt-20 justify-end mx-11">
            <div class="w-1/2"></div>
            <div class="w-1/2 flex space-x-2">
                <div class="w-1/2">
                    <button class="rounded border border-[#DEE0E4] w-full h-[50px]">Cancel</button>
                </div>
                <div class="w-1/2">
                    <button class="rounded bg-[#4489FE] w-full h-[50px] text-[#FFFFFF]">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { LOGOUT_EVENT } from '~/constants/events'
import { LOGOUT } from '~/constants/actions'
export default {
    name: 'MetricBuilderDetail',
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
        hideDetail() {
            this.$root.$emit('hide-detail')
        },
    },
}
</script>
