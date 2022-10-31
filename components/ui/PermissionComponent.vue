<template>
    <div class="">
        <div class="flex space-x-11 justify-around mr-11 ml-11">
            <div class="w-1/3 flex flex-col">
                <div class="flex space-x-2 w-full">
                    <div class="w-[90%] lg:w-[95%] relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none mb-4">
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            id="search"
                            type="search"
                            class="block p-4 border-[#DEE0E4] pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter Module Name"
                            required
                        />
                    </div>
                    <div class="mt-2 w-[10%] lg:w-[7%]">
                        <svg width="36" height="61" viewBox="0 0 36 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="18" fill="#4489FE" />
                            <path
                                d="M23.2299 20.1158H19.1807V24.1299C19.1807 24.7763 18.6522 25.3002 18.0002 25.3002C17.3482 25.3002 16.8197 24.7763 16.8197 24.1299V20.1158H12.7705C12.1623 20.0534 11.7002 19.5454 11.7002 18.9393C11.7002 18.3332 12.1623 17.8252 12.7705 17.7627H16.807V13.7612C16.87 13.1583 17.3825 12.7002 17.9938 12.7002C18.6052 12.7002 19.1177 13.1583 19.1807 13.7612V17.7627H23.2299C23.8381 17.8252 24.3002 18.3332 24.3002 18.9393C24.3002 19.5454 23.8381 20.0534 23.2299 20.1158Z"
                                fill="white"
                            />
                            <path
                                d="M23.2299 54.559H19.1807V58.864C19.1807 59.5571 18.6522 60.119 18.0002 60.119C17.3482 60.119 16.8197 59.5571 16.8197 58.864V54.559H12.7705C12.1623 54.492 11.7002 53.9472 11.7002 53.2972C11.7002 52.6471 12.1623 52.1023 12.7705 52.0353H16.807V47.7438C16.87 47.0973 17.3824 46.606 17.9938 46.606C18.6052 46.606 19.1177 47.0973 19.1807 47.7438V52.0353H23.2299C23.838 52.1023 24.3002 52.6471 24.3002 53.2972C24.3002 53.9472 23.838 54.492 23.2299 54.559Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
                <div class="flex flex-col justify-between space-y-1 w-full">
                    <div
                        class="w-full flex space-x-4 bg-[#F3F7FF] py-4 border border-gray-light pl-4 rounded-tr rounded-br"
                    >
                        <div class="flex justify-center flex-col">
                            <img src="/img/Bookmark.svg" alt="" />
                        </div>
                        <div>
                            <div class="text-black-dark font-display text-base font-normal">Ordering</div>
                            <div class="text-[#757575] font-display font-normal text-sm">Module Description</div>
                        </div>
                    </div>
                    <div class="w-full flex space-x-4 justify-between py-4 border border-gray-light pl-4 rounded">
                        <div class="flex space-x-4">
                            <div class="flex justify-center flex-col">
                                <img src="/img/Bookmark.svg" alt="" />
                            </div>
                            <div>
                                <div class="text-black-dark font-display text-base font-normal">Ordering</div>
                                <div class="text-[#757575] font-display font-normal text-sm">Module Description</div>
                            </div>
                        </div>
                        <div class="pr-4 flex flex-col justify-center">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 12C8 10.9 7.1 10 6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12ZM16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10C16.9 10 16 10.9 16 12Z"
                                    fill="#757575"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border rounded border-gray-light w-2/3 h-[500px]">
                <div class="text-black-dark text-[24px] font-display font-normal pl-5 mt-8">Permissions</div>
                <div class="relative px-5">
                    <table class="w-full h-full text-sm text-left pt-11">
                        <thead class="text-xs text-gray-700">
                            <tr>
                                <th scope="col" class="w-3/9 py-3 capitalize px-2.5">Page Name</th>
                                <th scope="col" class="w-1/9 py-3 capitalize px-2.5">View</th>
                                <th scope="col" class="w-1/9 py-3 capitalize px-2.5">Use</th>
                                <th scope="col" class="w-1/9 py-3 capitalize px-2.5">Create</th>
                                <th scope="col" class="w-1/9 py-3 capitalize px-2.5">Edit</th>
                                <th scope="col" class="w-1/9 py-3 capitalize px-2.5">Delete</th>
                                <th scope="col" class="w-1/9 py-3 capitalize px-2.5">All</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="w-3/9 first:border-y-0 first:border-l-0 first:border-t-0 first:rounded-none">
                                    Order details
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b border-r-0">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td class="w-3/9 first:border-y-0 first:border-l-0 first:border-t-0 first:rounded-none">
                                    Order files
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b border-r-0">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td class="w-3/9 first:border-y-0 first:border-l-0 first:border-t-0 first:rounded-none">
                                    Client name
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b border-r-0">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td class="w-3/9 first:border-y-0 first:border-l-0 first:border-t-0 first:rounded-none">
                                    Client email
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b border-r-0">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td class="w-3/9 first:border-y-0 first:border-l-0 first:border-t-0 first:rounded-none">
                                    Order amount
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b border-r-0">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="w-3/9 first:border-y-0 first:border-l-0 first:border-t-0 first:rounded-none text-black-dark"
                                >
                                    Order tasks
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b">
                                    <input type="checkbox" />
                                </td>
                                <td class="w-1/9 border-y-0 border-l-0 border-t-0 rounded-none border-b border-r-0">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-center m-5">
                    <button class="rounded bg-[#4489FE] text-[#FFFFFF] w-[200px] h-[50px]">Save as Role</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PermissionComponent',
}
</script>
