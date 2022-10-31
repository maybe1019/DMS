<template>
    <div>
        <nav
            class="sticky top-0 inset-x-0 z-50 py-5 text-white font-medium base-shadow flex justify-between items-center bg-white px-10 w-full"
        >
            <div class="ml-28 w-1/5">
                <img src="/img/logo.png" alt="" />
            </div>
            <div class="text-[#000000] flex space-x-1 justify-around w-3/5">
                <div
                    class="text-[#757575] font-medium text-sm text-center inline-flex items-center"
                    style="margin-right: 20px"
                >
                    Dashboard
                </div>
                <div>
                    <button
                        id="dropdownDefault"
                        data-dropdown-toggle="production"
                        class="text-[#757575] font-medium text-sm px-4 py-2.5 text-center inline-flex items-center"
                        type="button"
                    >
                        Production
                        <svg
                            class="ml-2 w-4 h-4"
                            aria-hidden="true"
                            fill="none"
                            stroke="#757575"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div
                        id="production"
                        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                        data-popper-reference-hidden=""
                        data-popper-escaped=""
                        data-popper-placement="bottom"
                        style="
                            position: absolute;
                            inset: 0px auto auto 0px;
                            margin: 0px;
                            transform: translate(320px, 70px);
                        "
                    >
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button
                        id="users"
                        data-dropdown-toggle="user"
                        class="text-[#757575] font-medium text-sm px-4 py-2.5 text-center inline-flex items-center"
                        type="button"
                    >
                        Users
                        <svg
                            class="ml-2 w-4 h-4"
                            aria-hidden="true"
                            fill="none"
                            stroke="#757575"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div
                        id="user"
                        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                        data-popper-reference-hidden=""
                        data-popper-escaped=""
                        data-popper-placement="bottom"
                        style="
                            position: absolute;
                            inset: 0px auto auto 0px;
                            margin: 0px;
                            transform: translate(320px, 70px);
                        "
                    >
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="users">
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button
                        id="files"
                        data-dropdown-toggle="file"
                        class="text-[#757575] font-medium text-sm px-4 py-2.5 text-center inline-flex items-center"
                        type="button"
                    >
                        Files
                        <svg
                            class="ml-2 w-4 h-4"
                            aria-hidden="true"
                            fill="none"
                            stroke="#757575"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div
                        id="file"
                        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                        data-popper-reference-hidden=""
                        data-popper-escaped=""
                        data-popper-placement="bottom"
                        style="
                            position: absolute;
                            inset: 0px auto auto 0px;
                            margin: 0px;
                            transform: translate(320px, 70px);
                        "
                    >
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="files">
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button
                        id="payments"
                        data-dropdown-toggle="payment"
                        class="text-[#757575] font-medium text-sm px-4 py-2.5 text-center inline-flex items-center"
                        type="button"
                    >
                        Payments
                        <svg
                            class="ml-2 w-4 h-4"
                            aria-hidden="true"
                            fill="none"
                            stroke="#757575"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div
                        id="payment"
                        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                        data-popper-reference-hidden=""
                        data-popper-escaped=""
                        data-popper-placement="bottom"
                        style="
                            position: absolute;
                            inset: 0px auto auto 0px;
                            margin: 0px;
                            transform: translate(320px, 70px);
                        "
                    >
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="payments">
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button
                        id="reports"
                        data-dropdown-toggle="report"
                        class="text-[#757575] font-medium text-sm px-4 py-2.5 text-center inline-flex items-center"
                        type="button"
                    >
                        Reports
                        <svg
                            class="ml-2 w-4 h-4"
                            aria-hidden="true"
                            fill="none"
                            stroke="#757575"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div
                        id="report"
                        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                        data-popper-reference-hidden=""
                        data-popper-escaped=""
                        data-popper-placement="bottom"
                        style="
                            position: absolute;
                            inset: 0px auto auto 0px;
                            margin: 0px;
                            transform: translate(320px, 70px);
                        "
                    >
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="reports">
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex items-center w-1/5">
                <BaseAddIcon />
                <BaseCart />
                <BaseSearchIcon />
                <BaseProfile />
            </div>
        </nav>
        <main class="h-[900px]">
            <div class="flex flex-col justify-center mt-11 w-full items-center">
                <div>
                    <img src="/img/face.png" alt="" class="rounded-full" />
                </div>
                <div>
                    <div class="font-display font-normal text-[22px] text-black-dark text-center">Serhii Movchan</div>
                    <div class="font-display font-normal text-sm not-italic text-center">example@gmail.com</div>
                </div>
            </div>
            <div class="pt-10 flex justify-center rounded w-full">
                <div class="font-medium flex flex-col rounded col-span-2 w-full h-full">
                    <div class="mb-4 border-b border-gray-200 dark:border-gray-700 flex justify-center mr-11 ml-11">
                        <ul
                            id="myTab"
                            class="flex px-1 w-1/2 justify-center"
                            data-tabs-toggle="#myTabContent"
                            role="tablist"
                        >
                            <li class="w-1/4 flex justify-center" role="presentation">
                                <button
                                    id="profile-tab"
                                    class="inline-block p-4 w-full uppercase rounded-t-lg border-b-4 font-lg leading-4 text-xl"
                                    data-tabs-target="#profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="true"
                                >
                                    Main Information
                                </button>
                            </li>
                            <li class="w-1/4 flex justify-center" role="presentation">
                                <button
                                    id="dashboard-tab"
                                    class="inline-block p-4 w-full uppercase font-lg leading-4 rounded-t-lg border-b-4 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                                    data-tabs-target="#dashboard"
                                    type="button"
                                    role="tab"
                                    aria-controls="dashboard"
                                    aria-selected="false"
                                >
                                    Settings
                                </button>
                            </li>
                            <li class="w-1/4 flex justify-center" role="presentation">
                                <button
                                    id="dashboard-tab"
                                    class="inline-block p-4 w-full uppercase font-lg leading-4 rounded-t-lg border-b-4 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                                    data-tabs-target="#permission"
                                    type="button"
                                    role="tab"
                                    aria-controls="dashboard"
                                    aria-selected="false"
                                >
                                    Permissions
                                </button>
                            </li>
                            <li class="w-1/4 flex justify-center" role="presentation">
                                <button
                                    id="dashboard-tab"
                                    class="inline-block p-4 w-full uppercase font-lg leading-4 rounded-t-lg border-b-4 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
                                    data-tabs-target="#billing"
                                    type="button"
                                    role="tab"
                                    aria-controls="dashboard"
                                    aria-selected="false"
                                >
                                    Billing Info
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div id="myTabContent">
                        <div id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <Task></Task>
                        </div>
                        <div id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            <Payments></Payments>
                        </div>
                        <div id="permission" role="tabpanel" aria-labelledby="permission-tab">
                            <PermissionComponent></PermissionComponent>
                        </div>
                        <div id="billing" role="tabpanel" aria-labelledby="billing-tab">
                            <div>
                                <Payments></Payments>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between m-11 border-t pt-11 border-gray-light">
                <div class="text-center text-sm text-[#757575] flex flex-col justify-center">
                    <span>2016-2019 © Deskvantage, Inc. All rights reserved.</span>
                </div>
                <div>
                    <select
                        id="invoice"
                        name="invoice"
                        class="box-border h-[50px] w-[140.42px] rounded-md border-[#DEE0E4] border-solid border-[1px]"
                    >
                        <option value="Table 1" selected>English (US)</option>
                    </select>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import PermissionComponent from '~/components/ui/PermissionComponent.vue'
import BaseAddIcon from '~/components/atoms/BaseAddIcon.vue'
import BaseCart from '~/components/atoms/BaseCart.vue'
import BaseProfile from '~/components/atoms/BaseProfile.vue'
import BaseSearchIcon from '~/components/atoms/BaseSearchIcon.vue'
export default {
    name: 'ProfileComponent',
    components: { BaseProfile, BaseSearchIcon, BaseCart, BaseAddIcon, PermissionComponent },
    layout: 'base',
}
</script>
