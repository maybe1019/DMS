<template>
    <div class="flex items-center justify-between cursor-pointer">
        <div class="flex items-center grow py-2" @click="toggleOpen">
            <div class="mr-[12.71px] cursor-pointer">
                <div>
                    <ChevronDown v-if="open" />
                    <ChevronUp v-else />
                </div>
            </div>
            <div class="mr-[12px]">
                <FolderIcon />
            </div>
            <div class="font-normal text-[14px] leading-[16.41px]">{{ title }}</div>
        </div>
        <div>
            <AppActionObjectButton class="" @edit-event="emitEditServiceModal" />
        </div>
    </div>
</template>

<script>
import FolderIcon from '~/components/atoms/icons/FolderIcon.vue'
import ChevronDown from '~/components/atoms/icons/ChevronDown.vue'
import ChevronUp from '~/components/atoms/icons/ChevronUp.vue'
import AppActionObjectButton from '~/components/atoms/AppActionObjectButton'
export default {
    name: 'ModulePanelMenuItem',
    components: {
        ChevronUp,
        ChevronDown,
        FolderIcon,
        AppActionObjectButton,
    },
    props: {
        title: {
            type: [String, null],
            required: false,
            default: () => 'Undefined name',
        },
        children: {
            type: Boolean,
            required: true,
            default: true,
        },
        deployedVersion: {
            type: [String, null],
            required: true,
        },
        baseUrl: {
            type: [String, null],
            required: true,
        },
        serviceId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            open: false,
        }
    },
    methods: {
        toggleOpen() {
            this.open = !this.open
            this.$emit('toggle-menu')
        },
        emitEditServiceModal() {
            // this.setActive(this.title)
            this.$nuxt.$emit('editServiceModal', {
                serviceId: this.serviceId,
                serviceName: this.title,
                deployedVersion: this.deployedVersion,
                baseUrl: this.baseUrl,
            })
        },
    },
}
</script>
