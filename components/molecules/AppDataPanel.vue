<template>
    <!-- disable eslint -->
    <div v-if="dataManagement" class="h-full">
        <div class="font-medium flex flex-col w-full h-full">
            <!-- to display the data management part -->
            <div class="flex px-[2px]">
                <div
                    class="w-1/2 border-b-4 cursor-pointer uppercase pb-4 flex justify-center text-blue-dark border-blue-dark"
                >
                    data management
                </div>
                <div
                    class="w-1/2 flex uppercase cursor-pointer justify-center pb-4"
                    @click="dataManagement = !dataManagement"
                >
                    Metric Builder
                </div>
            </div>
            <div class="module-panel flex flex-col border rounded-[4px] px-[40px] pb-5 border-gray-light grow relative max-h-full h-full">
                <div class="flex items-center justify-between pt-[40px] pb-[36px] sticky top-0 bg-white z-10">
                    <div class="font-normal text-[1.125rem]">Object attribute</div>
                    <button
                        class="bg-blue-dark font-medium text-sm text-white w-[122px] h-[38px] rounded"
                        @click="openAttributeModal"
                    >
                        Add new
                    </button>
                </div>
                <AppDataTable />
            </div>
        </div>
    </div>
    <div v-else class="h-full">
        <div class="font-medium flex flex-col w-full h-full">
            <!-- to display the data management part -->
            <div class="flex px-1">
                <div class="w-1/2 flex uppercase cursor-pointer justify-center pb-4" @click="dataManagement = !dataManagement">
                    data management
                </div>
                <div class="w-1/2 border-b-4 cursor-pointer uppercase pb-4 flex justify-center text-blue-dark border-blue-dark">
                    Metric Builder
                </div>
            </div>
            <div class="module-panel flex-col border rounded-[4px] w-full min-h-[651px] pl-[41px] pr-[40px] max-h-full pb-5 border-gray-light grow">
                <div class="flex items-center justify-between pt-[40px] pb-[36px] sticky top-0 bg-white">
                    <div class="font-normal text-[1.125rem]">Matric List</div>
                    <button
                        class="bg-blue-dark font-medium text-sm text-white w-[122px] h-[38px] rounded"
                    >
                        Add new
                    </button>
                </div>
                <MetricBuilder />
            </div>
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import MetricBuilderDetailVue from '../MetricBuilderDetail'
import AppDataTable from '~/components/molecules/AppDataTable'
// eslint-disable-next-line no-unused-vars
import MetricBuilder from '~/components/MetricBuilder'
import VueScrollbar from 'vue-custom-scrollbar'
export default {
    name: 'AppDataPanel',
    components: { AppDataTable, VueScrollbar },
    data() {
        return {
            dataManagement: true,
            settings: {
                suppressScrollY: false,
                suppressScrollX: false,
                wheelPropagation: false,
            },
        }
    },
    computed: {
        canCreateAttribute() {
            return this.$store.getters['services/getActiveObject'].objectDefinitionId !== null
        },
    },
    methods: {
        openAttributeModal() {
            if (!this.canCreateAttribute) {
                return alert('Please select an object, before adding new attribute !')
            }
            $nuxt.$emit('openAttributeModal')
        },
    },
}
</script>

<style scoped></style>
