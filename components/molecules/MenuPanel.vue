<template>
    <div>
        <MenuItemPanel
            v-for="(item, index) in getMenu"
            :key="index"
            :children="item.children ? item.children : null"
            :title="item.title"
            :service-id="item.id"
            :base-url="item.baseUrl"
            :deployed-version="item.deployedVersion"
        />
    </div>
</template>

<script>
import MenuItemPanel from '~/components/molecules/MenuItemPanel'
import { service } from '~/constants/getters'
export default {
    name: 'MenuItem',
    components: {
        MenuItemPanel,
    },
    data() {
        return {
            Menu: [],
        }
    },
    computed: {
        getMenu() {
            console.log('abcde: ', this.$store.getters[service.menu])
            return this.$store.getters[service.menu]
        },
    },
    methods: {},
}
</script>

<style scoped></style>
