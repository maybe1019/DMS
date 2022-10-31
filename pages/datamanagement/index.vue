<template>
    <!-- Main area -->

    <div class="w-full max-w-[1231px] mx-auto flex flex-row h-[calc(100%-128px)] mt-[76px] space-x-[0px] 2lg:space-x-[20px] sticky top-[76px]">
        <!-- Primary column -->

        <div class="hidden 2lg:block col-span-4 lg:flex-shrink-0 lg:order-first">
            <AppModulePanel />
        </div>
        <div
            class="2lg:hidden transform top-0 right-0 w-full bg-black-50 border-r border-r-gray-light fixed h-full z-100 flex justify-end ease-in-out transition-all duration-300"
            :class="showSideBar ? 'translate-x-0' : 'translate-x-full'"
        >
            <div v-click-outside="handleFocusOut">
                <div class="px-5 w-full h-full bg-white">
                    <div class="h-full w-full bg-white">
                        <div class="sticky top-0 bg-white py-2 w-full flex items-center space-x-12 z-100 max-w-[24rem]">
                            <div class="h-full w-full flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 hover:cursor-pointer"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    @click="handleFocusOut"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div class="flex items-center space-x-5 flex-none">
                                <span class="text-black text-[22px] font-normal">Secondary Menu </span>
                                <LogoIcon />
                            </div>
                        </div>
                        <AppModulePanel />
                    </div>
                </div>
            </div>
        </div>
        <!-- app data table -->
        <div aria-labelledby="primary-heading" class="grow">
            <AppDataPanel />
        </div>
        <AddAttributeModal :show="attributeModal" @close="toggleAttributeModal()" />
        <AddServiceModal :show="serviceModal" @close="toggleServiceModal()" />
        <AddObjectModal :show="objectModal" ò @close="toggleObjectModal()" />
        <!-- Secondary column (hidden on smaller screens) -->
    </div>
</template>
<script>
import AppModulePanel from '~/components/molecules/ModulePanel'
import AppDataPanel from '~/components/molecules/AppDataPanel'
import AddAttributeModal from '~/components/organisims/AddAttributeModal'
import AddServiceModal from '~/components/organisims/AddServiceModal'
import {
    ADD_OBJECT_ATTRIBUT_EVENT,
    UPDATE_OBJECT_ATTRIBUTE_EVENT,
    DELETE_OBJECT_ATTRIBUTE_EVENT,
    CREATE_SERVICE_EVENT,
    UPDATE_SERVICE_EVENT,
    CREATE_SERVICE_OBJECT_EVENT,
    UPDATE_SERVICE_OBJECT_EVENT,
} from '~/constants/events'
import {
    ADD_OBJECT_ATTRIBUTE_ACTION,
    ADD_SERVICE_OBJECT_ACTION,
    UPDATE_SERVICE_OBJECT_ACTION,
    CREATE_SERVICE_ACTION,
    UPDATE_SERVICE_ACTION,
    GET_SERVICE,
    UPDATE_OBJECT_ATTRIBUTE_ACTION,
    DELETE_OBJECT_ATTRIBUTE_ACTION,
} from '~/constants/actions'
import AddObjectModal from '~/components/organisims/AddObjectModal'
import LogoIcon from '~/components/atoms/LogoIcon'

export default {
    name: 'FilePage',
    components: {
        LogoIcon,
        AddServiceModal,
        AddAttributeModal,
        AppModulePanel,
        AddObjectModal,
        AppDataPanel,
    },
    layout: 'tailwind',
    data() {
        return {
            attributeModal: false,
            serviceModal: false,
            objectModal: false,
            showSideBar: false,
            fromButton: false,
        }
    },
    head() {
        return {
            title: 'Data Management | DMS',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Data management section',
                },
            ],
        }
    },
    created() {
        this.$nuxt.$on('openAttributeModal', () => this.toggleAttributeModal())
        this.$nuxt.$on('toggleSideBar', ($event) => this.toggleSideBar($event))
        this.$nuxt.$on('toggleSideBarOut', ($event) => this.handleFocusOut($event))
        this.$nuxt.$on('openServiceModal', () => this.toggleServiceModal())
        this.$nuxt.$on('openObjectModal', () => this.toggleObjectModal())
        this.$nuxt.$on('editAttributeModal', () => this.toggleAttributeModal())
        this.$nuxt.$on('editServiceModal', () => this.toggleServiceModal())
        this.$nuxt.$on('editObjectModal', () => this.toggleObjectModal())
        this.$nuxt.$on(CREATE_SERVICE_EVENT, ($event) => this.createService($event))
        this.$nuxt.$on(UPDATE_SERVICE_EVENT, ($event) => this.updateService($event))
        this.$nuxt.$on(ADD_OBJECT_ATTRIBUT_EVENT, ($event) => this.addObjectAttribute($event))
        this.$nuxt.$on(UPDATE_OBJECT_ATTRIBUTE_EVENT, ($event) => this.updateObjectAttribute($event))
        this.$nuxt.$on(DELETE_OBJECT_ATTRIBUTE_EVENT, ($event) => this.deleteObjectAttribute($event))
        this.$nuxt.$on(CREATE_SERVICE_OBJECT_EVENT, ($event) => this.addServiceObject($event))
        this.$nuxt.$on(UPDATE_SERVICE_OBJECT_EVENT, ($event) => this.updateServiceObject($event))
    },
    mounted() {
        this.getServices()
    },
    methods: {
        handleFocusOut(event) {
            if (event) {
                this.showSideBar = event.target.id === 'hamburgerAlt'
            }
        },
        toggleSideBar() {
            this.showSideBar = !this.showSideBar
        },
        getServices() {
            try {
                this.$store.dispatch(GET_SERVICE)
            } catch (e) {
                console.error(e.message)
                console.error(e.stack)
            }
        },
        toggleAttributeModal() {
            this.attributeModal = !this.attributeModal
        },
        toggleServiceModal() {
            this.serviceModal = !this.serviceModal
        },
        toggleObjectModal() {
            this.objectModal = !this.objectModal
        },
        async createService($event) {
            try {
                await this.$store.dispatch(CREATE_SERVICE_ACTION, {
                    serviceName: $event.serviceName,
                    baseUrl: $event.baseUrl,
                    deployedVersion: $event.deployedVersion,
                })
                this.toggleServiceModal()
                await this.getServices()
            } catch (e) {
                console.error(e.message)
                console.error(e.stack)
            }
        },
        async updateService($event) {
            try {
                await this.$store.dispatch(UPDATE_SERVICE_ACTION, {
                    serviceId: $event.serviceId,
                    serviceName: $event.serviceName,
                    baseUrl: $event.baseUrl,
                    deployedVersion: $event.deployedVersion,
                })
                this.toggleServiceModal()
                await this.getServices()
            } catch (error) {
                console.error(error.message)
                console.error(error.stack)
            }
        },
        async addObjectAttribute($event) {
            try {
                await this.$store.dispatch(ADD_OBJECT_ATTRIBUTE_ACTION, {
                    key: $event.key,
                    maxLength: $event.maxLength,
                    nullable: $event.nullable,
                    sequence: $event.sequence,
                    sequenceOrder: $event.sequenceOrder,
                    sequenceValue: $event.sequenceValue,
                    type: $event.type,
                    unique: $event.unique,
                })

                this.toggleAttributeModal()
                await this.getServices()
            } catch (e) {
                console.error(e.message)
                console.error(e.stack)
            }
        },
        async addServiceObject($event) {
            try {
                await this.$store.dispatch(ADD_SERVICE_OBJECT_ACTION, {
                    serviceId: $event.serviceId,
                    objectName: $event.objectName,
                })

                this.toggleObjectModal()
                await this.getServices()
            } catch (e) {
                console.error(e.message)
                console.error(e.stack)
            }
        },
        async updateServiceObject($event) {
            try {
                await this.$store.dispatch(UPDATE_SERVICE_OBJECT_ACTION, {
                    serviceId: $event.serviceId,
                    objectId: $event.objectId,
                    objectName: $event.objectName,
                })

                this.toggleObjectModal()
                await this.getServices()
            } catch (e) {
                console.error(e.message)
                console.error(e.stack)
            }
        },
        async updateObjectAttribute($event) {
            try {
                await this.$store.dispatch(UPDATE_OBJECT_ATTRIBUTE_ACTION, $event)

                this.toggleAttributeModal()
                await this.getServices()
            } catch (error) {
                console.error(error.message)
                console.error(error.stack)
            }
        },
        async deleteObjectAttribute($event) {
            try {
                await this.$store.dispatch(DELETE_OBJECT_ATTRIBUTE_ACTION, $event)

                await this.getServices()
            } catch (error) {
                console.error(error.message)
                console.error(error.stack)
            }
        },
    },
}
</script>
