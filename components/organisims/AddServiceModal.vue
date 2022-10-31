<template>
    <transition name="modal">
        <div
            v-show="show"
            class="b-modal fixed inset-0 py-8 bg-darkLight h-screen flex items-center"
            style="z-index: 100"
        >
            <div class="bg-white rounded-md max-w-xl w-[36rem] mx-auto pb-12">
                <div
                    class="border-b border-gray-lighter py-6 px-8 flex items-center justify-between"
                    style="z-index: 200"
                >
                    <h4 class="font-normal text-xl">Add Module</h4>
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
                    <div class="flex items-center flex-col input-box justify-between mb-5">
                        <div class="w-full flex flex-col">
                            <label for="name" class="text-sm bg-white px-1">Service's name</label>
                            <input
                                id="name"
                                v-model="form.serviceName"
                                class="w-full rounded border py-4 px-5 border-gray-lighter focus:ring-1 focus:ring-blue-dark text-sm"
                                name="name"
                                type="text"
                            />
                            <div
                                v-if="$v.form.serviceName.$dirty && !$v.form.serviceName.required"
                                class="error text-sm text-red-500"
                            >
                                Service's name is required
                            </div>
                        </div>
                        <div class="w-full flex flex-col">
                            <label for="name" class="text-sm bg-white px-1">Base url</label>
                            <input
                                id="name"
                                v-model="form.baseUrl"
                                class="w-full rounded border py-4 px-5 border-gray-lighter focus:ring-1 focus:ring-blue-dark text-sm"
                                name="name"
                                type="url"
                            />
                            <div
                                v-if="$v.form.baseUrl.$dirty && !$v.form.baseUrl.required"
                                class="error text-sm text-red-500"
                            >
                                Base url is required
                            </div>

                            <div
                                v-if="$v.form.baseUrl.$dirty && !$v.form.baseUrl.isUrl"
                                class="error text-sm text-red-500"
                            >
                                Provide a valid url. Example: https://example.com
                                {{ $v.form.baseUrl.isUrl }}
                            </div>
                        </div>
                        <div class="w-full flex flex-col">
                            <label for="name" class="text-sm bg-white px-1">Last deployed version</label>
                            <input
                                id="name"
                                v-model="form.deployedVersion"
                                class="w-full rounded border py-4 px-5 border-gray-lighter focus:ring-1 focus:ring-blue-dark text-sm"
                                name="deployedVersion"
                                type="text"
                            />
                            <div
                                v-if="$v.form.deployedVersion.$dirty && !$v.form.deployedVersion.required"
                                class="error text-sm text-red-500"
                            >
                                Last deployed version is required and should be a number
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-5 justify-between mt-9 px-8">
                    <button class="border border-gray-lighter rounded text-[#757575] py-4 w-full" @click="close">
                        Back
                    </button>
                    <button class="bg-blue-dark rounded w-full py-4 text-white" @click="createServiceEvent">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { CLOSE_MODAL_EVENT, CREATE_SERVICE_EVENT, UPDATE_SERVICE_EVENT } from '~/constants/events'

export default {
    name: 'AddServiceModal',
    props: {
        show: {
            required: true,
            type: Boolean,
        },
    },
    data() {
        return {
            form: {
                serviceName: '',
                baseUrl: '',
                deployedVersion: '',
            },
            isUpdate: false,
            serviceId: '',
        }
    },
    validations: {
        form: {
            serviceName: { required },
            baseUrl: {
                required,
                isUrl(baseUrl) {
                    return /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(
                        baseUrl
                    ) // checks for a-z
                },
            },
            deployedVersion: { required },
        },
    },
    created() {
        this.$nuxt.$on('editServiceModal', ($event) => this.setFormData($event))
        this.$nuxt.$on('openServiceModal', ($event) => (this.isUpdate = false))
    },
    methods: {
        close() {
            this.$emit(CLOSE_MODAL_EVENT, !this.show)
            this.$nextTick(() => {
                this.$v.$reset()
            })
            this.resetForm()
        },
        createServiceEvent() {
            this.$v.$touch()
            if (!this.$v.$invalid && !this.isUpdate) {
                this.$nuxt.$emit(CREATE_SERVICE_EVENT, this.form)
            }
            if (!this.$v.$invalid && this.isUpdate) {
                this.$nuxt.$emit(UPDATE_SERVICE_EVENT, { ...this.form, serviceId: this.serviceId })
            }
        },
        resetForm() {
            this.form = {
                serviceName: '',
                baseUrl: '',
                deployedVersion: '',
            }
        },
        setFormData($event) {
            this.isUpdate = true
            this.form.serviceName = $event.serviceName
            this.form.deployedVersion = $event.deployedVersion
            this.form.baseUrl = $event.baseUrl
            this.serviceId = $event.serviceId
        },
    },
}
</script>

<style scoped>
.modal-leave-active,
.modal-enter-active {
    @apply duration-200;
    @apply transition;
}
.modal-enter,
.modal-leave-to {
    @apply opacity-0;
}
/* Hide scrollbar for Chrome, Safari and Opera */
/* .b-modal::-webkit-scrollbar {
    display: none;
} */

/* Hide scrollbar for IE, Edge and Firefox */
.b-modal {
    /* -ms-overflow-style: none; */ /* IE and Edge */
    /* scrollbar-width: none; */ /* Firefox */
}
</style>
