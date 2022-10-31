<template>
    <div class="mb-[0.875rem]">
        <ModulePanelMenuItem
            :children="hasChildren"
            :title="title"
            :deployed-version="deployedVersion"
            :base-url="baseUrl"
            :service-id="serviceId"
            @toggle-menu="toggleOpen"
        />
        <div v-if="hasChildren" v-show="open">
            <ModulePanelMenuSubItem
                v-for="item in children"
                :key="item.id"
                :fields="item.attributes"
                :title="item.objectName"
                :object-id="item.id"
                :service-id="serviceId"
            />
        </div>
    </div>
</template>

<script>
import ModulePanelMenuItem from '~/components/molecules/ModulePanelMenuItem'
import ModulePanelMenuSubItem from '~/components/molecules/ModulePanelMenuSubItem'
export default {
    name: 'MenuItemPanel',
    components: {
        ModulePanelMenuItem,
        ModulePanelMenuSubItem,
    },
    props: {
        title: {
            type: [String, null],
            required: false,
            default: () => 'Undefined name',
        },
        serviceId: {
            type: [String, null],
            required: true,
            default: () => 'Undefined Service',
        },
        children: {
            type: Array,
            required: true,
        },
        deployedVersion: {
            type: [String, null],
            required: true,
        },
        baseUrl: {
            type: [String, null],
            required: true,
        },
    },
    data() {
        return {
            open: false,
        }
    },
    computed: {
        hasChildren() {
            return this.children.length > 0
        },
    },
    methods: {
        toggleOpen() {
            this.open = !this.open
        },
    },
}
</script>

<style scoped></style>
