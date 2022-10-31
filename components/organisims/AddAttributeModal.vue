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
                                v-model.trim="$v.form.key.$model"
                                class="w-full rounded border py-4 px-5 border-gray-lighter focus:ring-1 focus:ring-blue-dark text-sm"
                                name="name"
                                type="text"
                            />
                            <div v-if="$v.form.key.$dirty && !$v.form.key.required" class="error text-sm text-red-500">
                                Name is required
                            </div>
                        </div>
                        <div class="w-1/2 flex flex-col">
                            <label for="type" class="block text-sm px-1">Type</label>
                            <select
                                id="type"
                                v-model.trim="$v.form.type.$model"
                                name="type"
                                class="w-full focus:ring- py-4 px-5 focus:ring-blue-dark text-sm rounded border border-gray-lighter"
                            >
                                <option v-for="(option, index) in form.typeOptions" :key="index" :value="option.value">
                                    {{ option.text }}
                                </option>
                            </select>
                            <div
                                v-if="$v.form.type.$dirty && !$v.form.type.required"
                                class="error text-sm text-red-500"
                            >
                                Type is required
                            </div>
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
                                v-model.number="$v.form.maxLength.$model"
                                type="number"
                                value="500"
                                class="w-full rounded border py-4 px-5 appearance-none border-gray-lighter focus:ring-1 focus:ring-blue-dark text-sm"
                                name="length"
                            />
                            <div
                                v-if="$v.form.maxLength.$dirty && !$v.form.maxLength.required"
                                class="error text-sm text-red-500"
                            >
                                Max Length should be a number
                            </div>
                            <div
                                v-if="$v.form.maxLength.$dirty && !$v.form.maxLength.integer"
                                class="error text-sm text-red-500"
                            >
                                Max Length should be a number
                            </div>
                        </div>
                        <div class="flex items-center space-x-5">
                            <div class="flex items-center space-x-2.5">
                                <input
                                    id="sequence"
                                    v-model="form.sequence"
                                    type="checkbox"
                                    class="text-sm focus:ring-0 border-[#757575] focus:outline-none rounded"
                                    name="sequence"
                                />
                                <label for="sequence" class="text-sm">Sequence</label>
                            </div>
                            <div class="flex items-center space-x-2.5">
                                <input
                                    id="nullable"
                                    v-model="form.nullable"
                                    type="checkbox"
                                    class="focus:ring-0 border-[#757575] rounded focus:outline-none"
                                    name="nullable"
                                />
                                <label for="sequence" class="text-sm">Nullable</label>
                            </div>
                            <div class="flex items-center space-x-2.5">
                                <input
                                    id="unique"
                                    v-model="form.unique"
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
                                    v-model.trim="$v.form.sequenceValue.$model"
                                    name="type"
                                    class="w-full focus:ring-1 py-4 px-5 focus:ring-blue-dark text-sm rounded border border-gray-lighter"
                                >
                                    <option
                                        v-for="(option, index) in form.sequenceOptions"
                                        :key="index"
                                        :value="option.value"
                                    >
                                        {{ option.text }}
                                    </option>
                                </select>
                                <div
                                    v-if="$v.form.sequenceValue.$dirty && !$v.form.sequenceValue.required"
                                    class="error text-sm text-red-500"
                                >
                                    Sequence text is required
                                </div>
                            </div>
                            <div class="w-1/2 flex flex-col">
                                <label for="type" class="block text-sm px-1">Sequence Number</label>
                                <input
                                    v-model.number="$v.form.sequenceOrder.$model"
                                    type="number"
                                    class="w-full focus:ring-1 py-4 px-5 focus:ring-blue-dark text-sm rounded border border-gray-lighter"
                                />
                                <div
                                    v-if="$v.form.sequenceOrder.$dirty && !$v.form.sequenceOrder.required"
                                    class="error text-sm text-red-500"
                                >
                                    Sequence number should be a number
                                </div>
                                <div
                                    v-if="$v.form.maxLength.$dirty && !$v.form.sequenceOrder.integer"
                                    class="error text-sm text-red-500"
                                >
                                    Sequence number should be a number
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center space-x-5 justify-between mt-9 px-8">
                    <button class="border border-gray-lighter rounded text-[#757575] py-4 w-full" @click="close">
                        Back
                    </button>
                    <button class="bg-blue-dark rounded w-full py-4 text-white" @click="addObjectAttribute">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { required, integer } from 'vuelidate/lib/validators'
import { ADD_OBJECT_ATTRIBUT_EVENT, UPDATE_OBJECT_ATTRIBUTE_EVENT } from '~/constants/events'

export default {
    name: 'AddAttributeModal',
    props: {
        show: {
            required: true,
            type: Boolean,
        },
    },
    data() {
        return {
            form: {
                sequenceOptions: [
                    { text: 'Boolean', value: 'boolean' },
                    { text: 'String', value: 'string' },
                    { text: 'Float', value: 'float' },
                    { text: 'Int', value: 'int' },
                ],
                typeOptions: [
                    { text: 'Boolean', value: 'boolean' },
                    { text: 'String', value: 'String' },
                    { text: 'Float', value: 'float' },
                    { text: 'Int', value: 'int' },
                ],
                sequenceValue: 'boolean',
                type: 'boolean',
                nullable: false,
                sequence: false,
                unique: false,
                key: '',
                maxLength: '',
                sequenceOrder: '',
            },
            updateMode: false,
            serviceId: '',
            objectId: '',
            attributeId: '',
        }
    },
    created() {
        this.$nuxt.$on('editAttributeModal', ($event) => this.setFormData($event))
    },
    validations: {
        form: {
            sequenceValue: { required },
            type: { required },
            nullable: { required },
            sequence: { required },
            unique: { required },
            key: { required },
            maxLength: { required, integer },
            sequenceOrder: { required, integer },
        },
    },
    mounted() {
        this.$v.$reset()
    },
    methods: {
        close() {
            this.$emit('close', !this.show)
            this.$nextTick(() => {
                this.$v.$reset()
            })
            this.resetForm()
        },
        addObjectAttribute() {
            // this.$v.$reset()
            this.$v.$touch()
            if (!this.$v.$invalid && !this.updateMode) {
                this.$nuxt.$emit(ADD_OBJECT_ATTRIBUT_EVENT, this.form)
            }
            if (!this.$v.$invalid && this.updateMode) {
                this.$nuxt.$emit(UPDATE_OBJECT_ATTRIBUTE_EVENT, {
                    ...this.form,
                    serviceId: this.serviceId,
                    objectId: this.objectId,
                    attributeId: this.attributeId,
                })
            }
        },
        resetForm() {
            this.form = {
                sequenceOptions: [
                    { text: 'Boolean', value: 'boolean' },
                    { text: 'String', value: 'string' },
                    { text: 'Float', value: 'float' },
                    { text: 'Int', value: 'int' },
                ],
                typeOptions: [
                    { text: 'Boolean', value: 'boolean' },
                    { text: 'String', value: 'String' },
                    { text: 'Float', value: 'float' },
                    { text: 'Int', value: 'int' },
                ],
                sequenceValue: 'boolean',
                type: 'boolean',
                nullable: false,
                sequence: false,
                unique: false,
                key: '',
                maxLength: null,
                sequenceOrder: null,
            }
        },
        setFormData($event) {
            this.updateMode = true
            this.attributeId = $event.id
            this.serviceId = $event.serviceId
            this.objectId = $event.objectId
            this.form.sequenceValue = $event.sequenceValue
            this.form.type = $event.type
            this.form.nullable = $event.nullable
            this.form.sequence = $event.sequence
            this.form.unique = $event.unique
            this.form.key = $event.key
            this.form.maxLength = $event.maxLength
            this.form.sequenceOrder = $event.sequenceOrder
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
.b-modal::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.b-modal {
    /* -ms-overflow-style: none; */ /* IE and Edge */
    /* scrollbar-width: none; */ /* Firefox */
}
</style>
