<template>
    <div class="flex flex-grow w-full mr-[3.43rem]">
        <div class="w-full">
            <div class="relative">
                <div class="absolute flex items-center justify-center h-full pl-[1.37rem] py-4 pr[1.4rem]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                            fill="#757575"
                        ></path>
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Start typing for search"
                    style="color: #757575"
                    class="transition-colors text-sm font-normal text-gray duration-100 ease-in-out py-4 pr-4 pl-14 block w-full appearance-none leading-normal border border-transparent rounded focus:ring-0 focus:outline-none outline-none focus:border-none text-left select-none truncate bg-gray-200"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppSearch',
}
</script>

<style></style>
