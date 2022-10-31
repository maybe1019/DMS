<template>
    <div
        :class="[
            isActive
                ? 'text-sm bg-blue-light  flex items-center justify-between h-[50px]   pl-[60.19px]'
                : 'text-sm hover:bg-blue-light  flex items-center justify-between h-[50px] pl-[60.19px]',
        ]"
    >
        <div class="flex items-center grow cursor-pointer" @click="setActive(title)">
            <div class="mr-[14.15px]">
                <FileIcon class="text-blue-dark" />
            </div>
            <div>{{ title }}</div>
        </div>
        <div>
            <AppActionButton @preview-event="emitEditServiceModal" />
        </div>
    </div>
</template>
<script>
import FileIcon from '~/components/atoms/icons/FileIcon.vue'
import AppActionButton from '~/components/atoms/AppActionButton'

export default {
    name: 'ModulePanelMenuSubItem',
    components: {
        FileIcon,
        AppActionButton,
    },
    props: {
        title: {
            type: [String, null],
            required: false,
            default: () => 'Undefined name',
        },
        objectId: {
            type: [String, null],
            required: false,
            default: () => 'Undefined name',
        },
        serviceId: {
            type: [String, null],
            required: false,
            default: () => 'Undefined name',
        },
        fields: {
            type: Array,
            required: true,
            default: () => [],
        },
    },
    data() {
        return {
            active: '',
        }
    },
    computed: {
        isActive() {
            return this.$store.getters['menu/getActiveItem'] === this.title
        },
        getFields() {
            return this.fields.map((field) => ({
                key: field.key,
                maxLength: field.maxLength,
                nullable: field.nullable,
                sequence: field.sequence,
                sequenceOrder: field.sequenceOrder,
                sequenceValue: field.sequenceValue,
                type: field.type,
                unique: field.unique,
                serviceId: this.serviceId,
                objectId: this.objectId,
                index: this.fields.indexOf(field),
                id: field.id,
            }))
        },
    },
    methods: {
        setActive(menuItem) {
            this.$store.dispatch('menu/setActive', menuItem)
            this.$store.dispatch('services/setFields', this.getFields)
            this.$store.dispatch('services/setActiveObject', {
                serviceId: this.serviceId,
                objectId: this.objectId,
            })
            this.$nuxt.$emit('toggleSideBar', {})
        },
        emitEditServiceModal() {
            this.setActive(this.title)
            this.$nuxt.$emit('editObjectModal', {
                serviceId: this.serviceId,
                objectId: this.objectId,
                title: this.title,
            })
        },
    },
}
</script>
