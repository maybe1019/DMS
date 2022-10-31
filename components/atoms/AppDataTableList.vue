<template>
    <tr class="bg-white capitalize rounded">
        <td scope="row" class="px-6 py-4 capitalize font-normal text-sm text-black-dark whitespace-nowrap">
            Project Name
        </td>
        <td class="px-6 py-4 text-black-dark font-normal text-sm">Integer</td>
        <td class="px-6 py-4">
            <input type="checkbox" class="rounded ring-0 outline-0 focus:ring-0 focus:outline-0" />
        </td>
        <td class="px-6 py-4 flex justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10C16.9 10 16 10.9 16 12ZM14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12ZM8 12C8 10.9 7.1 10 6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12Z"
                    fill="#757575"
                ></path>
            </svg>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'AppDataTableList',
}
</script>

<style scoped></style>
