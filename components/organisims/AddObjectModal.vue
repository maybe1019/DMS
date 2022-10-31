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
                    <h4 class="font-normal text-xl">Add Object</h4>
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
                            <label for="name" class="text-sm bg-white px-1">Services List</label>
                            <select
                                id="type"
                                v-model.trim="$v.form.serviceId.$model"
                                name="type"
                                class="w-full focus:ring-1 py-4 px-5 focus:ring-blue-dark text-sm rounded border border-gray-lighter"
                                :disabled="updateMode"
                            >
                                <option v-for="option in servicesList" :key="option.id" :value="option.id">
                                    {{ option.title }}
                                </option>
                            </select>
                            <div
                                v-if="$v.form.serviceId.$dirty && !$v.form.serviceId.required"
                                class="error text-sm text-red-500"
                            >
                                Please select a service
                            </div>
                        </div>
                        <div class="w-full flex flex-col">
                            <label for="name" class="text-sm bg-white px-1">Object name</label>
                            <input
                                id="name"
                                v-model="form.objectName"
                                class="w-full rounded border py-4 px-5 border-gray-lighter focus:ring-1 focus:ring-blue-dark text-sm"
                                name="name"
                                type="text"
                            />
                            <div
                                v-if="$v.form.objectName.$dirty && !$v.form.objectName.required"
                                class="error text-sm text-red-500"
                            >
                                Object name is required
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
import { CLOSE_MODAL_EVENT, CREATE_SERVICE_OBJECT_EVENT, UPDATE_SERVICE_OBJECT_EVENT } from '~/constants/events'
import { service } from '~/constants/getters'

export default {
    name: 'AddObjectModal',
    props: {
        show: {
            required: true,
            type: Boolean,
        },
    },
    data() {
        return {
            form: {
                objectName: '',
                serviceId: null,
            },
            updateMode: false,
            objectId: '',
        }
    },
    validations: {
        form: {
            objectName: { required },
            serviceId: { required },
        },
    },
    computed: {
        servicesList() {
            return this.$store.getters[service.menu]
        },
    },
    created() {
        this.$nuxt.$on('editObjectModal', ($event) => this.setFormData($event))
        this.$nuxt.$on('openObjectModal', () => (this.updateMode = false))
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
            if (!this.$v.$invalid && !this.updateMode) {
                this.$nuxt.$emit(CREATE_SERVICE_OBJECT_EVENT, this.form)
            }
            if (!this.$v.$invalid && this.updateMode) {
                this.$nuxt.$emit(UPDATE_SERVICE_OBJECT_EVENT, { ...this.form, objectId: this.objectId })
            }
        },
        setFormData($event) {
            this.updateMode = true
            this.objectId = $event.objectId
            this.form.objectName = $event.title
            this.form.serviceId = $event.serviceId
        },
        resetForm() {
            this.form = {
                objectName: '',
                serviceId: null,
            }
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
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
</style>
