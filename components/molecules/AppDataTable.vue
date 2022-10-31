<template>
    <div class="h-[0px] grow overflow-hidden no-scrollbar" ref="parentRef" id="viewport">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-0" ref="contentRef">
            <thead class="text-xs text-gray-700">
                <tr>
                    <th scope="col" class="py-3 !pl-[22px] w-[289px] capitalize">Name</th>
                    <th scope="col" class="py-3 w-[183px] capitalize">Type</th>
                    <th scope="col" class="py-3 w-[191px] capitalize">Status</th>
                    <th scope="col" class="py-3 w-[67px] capitalize">Actions</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="getFields.length > 0">
                    <AtomsAppDataTableRow v-for="(field, index) in getFields" :key="index" table-row :data-field="field" />
                </template>
                <AtomsAppDataTableRowEmpty v-else />
            </tbody>
        </table>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useElementSize } from '@vueuse/core'

export default {
    name: 'AppDataTable',
    setup() {
        const parentRef = ref(null)
        const contentRef = ref(null)
        const scrollRef = ref(null)
        const { height: parentHeight } = useElementSize(parentRef)
        const { height: contentHeight } = useElementSize(contentRef)
        return {
            parentHeight,
            contentHeight,
            parentRef,
            contentRef,
            scrollRef,
        }
    },
    data() {
        return {}
    },
    mounted() {
        document.getElementById("scroll-bar-container").onscroll = (e) => {
            let scrollPos = document.getElementById('scroll-bar-container').scrollTop / document.getElementById('scroll-bar-container').clientHeight * this.parentHeight
            this.$refs.parentRef.scrollTo({ top: scrollPos })
        }
    },
    computed: {
        getFields() {
            return this.$store.getters['services/getFields']
        },
    },
    watch: {
        parentHeight() {
            this.setScrollHeight()
        },
        contentHeight() {
            this.setScrollHeight()
        }
    },
    methods: {
        setScrollHeight() {
            console.log(this.contentHeight / this.parentHeight * document.getElementById('scroll-bar-container').clientHeight);
            document.getElementById('viewport-scroll-bar').style.height = this.contentHeight / this.parentHeight * document.getElementById('scroll-bar-container').clientHeight + 'px';
            document.getElementById('viewport-scroll-bar').style.width = '1px';
        }
    }
}
</script>

<style scoped>
tr th,
tr td {
    padding-left: 0px;
    padding-right: 0px;
}

th {
    background: white;
    position: sticky !important;
    top: 30;
}
</style>
