<template>
    <nav
        class="fixed w-full top-0 inset-x-0 z-50 py-5 text-white font-medium base-shadow flex justify-between items-center bg-white px-10"
    >
        <div class="flex items-center mr-4">
            <BaseHamburger />
            <BaseLogo />
        </div>
        <AppSearch />
        <div class="flex items-center flex-none">
            <BaseAddIcon />
            <BaseCart />
            <BaseSearchIcon />
            <BaseProfile />
        </div>
    </nav>
</template>

<script>
import BaseAddIcon from '~/components/atoms/BaseAddIcon.vue'
import BaseCart from '~/components/atoms/BaseCart.vue'
import BaseHamburger from '~/components/atoms/BaseHamburger.vue'
import BaseLogo from '~/components/atoms/BaseLogo.vue'
import BaseProfile from '~/components/atoms/BaseProfile.vue'
import BaseSearchIcon from '~/components/atoms/BaseSearchIcon.vue'
import AppSearch from '~/components/molecules/AppSearch.vue'
export default {
    name: 'BaseNavbar',
    components: { BaseHamburger, BaseLogo, AppSearch, BaseProfile, BaseSearchIcon, BaseCart, BaseAddIcon },
}
</script>

<style></style>
