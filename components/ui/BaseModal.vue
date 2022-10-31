<template>
    <div v-show="show" class="fixed inset-0 py-8 bg-darkLight h-screen flex items-center" style="z-index: 100">
        <div class="bg-white rounded-md max-w-xl w-[36rem] mx-auto pb-12">
            <div class="border-b border-gray-200 py-6 px-8 flex items-center justify-between" style="z-index: 200">
                <h4 class="font-normal text-xl">Add attribute</h4>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    @click.prevent="close"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div class="px-8 pt-8">
                <div class="flex items-center input-box space-x-5 justify-between mb-5">
                    <div class="w-1/2 flex flex-col">
                        <label for="name" class="text-sm bg-white px-1">Name</label>
                        <input
                            id="name"
                            class="w-full rounded border py-4 px-5 border-gray-200 focus:ring-1 focus:ring-blue-dark text-sm"
                            name="name"
                            type="text"
                        />
                    </div>
                    <div class="w-1/2 flex flex-col">
                        <label for="type" class="block text-sm px-1">Type</label>
                        <select
                            id="type"
                            name="type"
                            class="w-full focus:ring- py-4 px-5 focus:ring-blue-dark text-sm rounded border border-gray-200"
                        >
                            <option value="string">string</option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col space-y-3">
                    <div class="">
                        <h4 class="text-base">Details</h4>
                    </div>
                    <div class="flex flex-col w-full input-box">
                        <label for="max-length" class="px-1">Max Length</label>
                        <input
                            id="max-length"
                            type="number"
                            value="500"
                            class="w-full rounded border py-4 px-5 appearance-none border-gray-200 focus:ring-1 focus:ring-blue-dark text-sm"
                            name="length"
                        />
                    </div>
                    <div class="flex items-center space-x-5">
                        <div class="flex items-center space-x-2.5">
                            <input
                                id="sequence"
                                type="checkbox"
                                class="text-sm focus:ring-0 border-[#757575] focus:outline-none rounded"
                                name="sequence"
                            />
                            <label for="sequence" class="text-sm">Sequence</label>
                        </div>
                        <div class="flex items-center space-x-2.5">
                            <input
                                id="nullable"
                                type="checkbox"
                                class="focus:ring-0 border-[#757575] rounded focus:outline-none"
                                name="nullable"
                            />
                            <label for="sequence" class="text-sm">Nullable</label>
                        </div>
                        <div class="flex items-center space-x-2.5">
                            <input
                                id="unique"
                                type="checkbox"
                                class="focus:ring-0 border-[#757575] rounded focus:outline-none"
                                name="unique"
                            />
                            <label for="sequence" class="text-sm">Unique</label>
                        </div>
                    </div>
                    <div class="flex items-center input-box space-x-5 justify-between mb-5">
                        <div class="w-1/2 flex flex-col">
                            <label for="name" class="text-sm bg-white px-1">Sequence text</label>
                            <select
                                id="type"
                                name="type"
                                class="w-full focus:ring-1 py-4 px-5 focus:ring-blue-dark text-sm rounded border border-gray-200"
                            >
                                <option value="string">PRJ</option>
                            </select>
                        </div>
                        <div class="w-1/2 flex flex-col">
                            <label for="type" class="block text-sm px-1">Type</label>
                            <input
                                type="number"
                                class="w-full focus:ring-1 py-4 px-5 focus:ring-blue-dark text-sm rounded border border-gray-200"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center space-x-5 justify-between mt-9 px-8">
                <button class="border border-gray-200 rounded text-[#757575] py-4 w-full" @click="close">Back</button>
                <button class="bg-blue-dark rounded w-full py-4 text-white">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseModal',
    props: {
        show: {
            required: true,
            type: Boolean,
        },
    },
    methods: {
        close() {
            this.$emit('close', !this.show)
        },
    },
}
</script>
