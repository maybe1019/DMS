<template>
    <tr class="bg-white capitalize rounded">
        <td
            scope="row"
            class="!pl-[22px] w-[289px] py-4 capitalize font-normal text-sm text-black-dark whitespace-nowrap"
        >
            {{ dataField.key }}
        </td>
        <td class="w-[183px] py-4 text-black-dark font-normal text-sm">{{ dataField.type }}</td>
        <td class="w-[191px] py-4">
            <input type="checkbox" class="rounded ring-0 outline-0 focus:ring-0 focus:outline-0" />
        </td>
        <td class="w-[67px] !pr-[25px] py-4 flex justify-end">
            <AppActionButton
                @preview-event="$nuxt.$emit('editAttributeModal', dataField)"
                @delete-event="$nuxt.$emit('deleteObjectAttributeEvent', dataField)"
            />
        </td>
    </tr>
</template>

<script>
import AppActionButton from '~/components/atoms/AppActionButton'
export default {
    name: 'AppDataTableRow',
    components: { AppActionButton },
    props: {
        dataField: {
            type: Object,
            required: true,
            default: () => {},
        },
    },
}
</script>

<style scoped>
tr th,
tr td {
    padding-left: 0px;
    padding-right: 0px;
}
</style>
