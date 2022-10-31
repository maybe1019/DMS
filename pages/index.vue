<template>
    <section class="bg-[#FFFFFF] py-20 lg:py-[120px] h-screen flex flex-col items-center justify-center">
        <div class="container">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4">
                    <div
                        class="max-w-[525px] mx-auto text-center bg-white rounded-lg relative py-16 px-10 sm:px-12 md:px-[60px]">
                        <div id="firebaseui"></div>
                        <div v-if="loading" id="loader">Loading...</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth'
import { AUTH_FIREBASEUI } from '~/constants/actions'
import { homeRoute } from '~/constants/routes'
import 'firebaseui/dist/firebaseui.css'

export default {
    name: 'LoginPage',
    layout: 'base',
    data() {
        return {
            loading: true,
        }
    },
    head() {
        return {
            title: 'Login | DMS',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Data management section',
                },
            ],
        }
    },
    async mounted() {
        const _this = this
        const firebaseui = await import('firebaseui')
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(_this.$fire.auth)
        const config = {
            signInOptions: [EmailAuthProvider.PROVIDER_ID, GoogleAuthProvider.PROVIDER_ID],
            signInFlow: 'popup',
            signInSuccessUrl: homeRoute,
            callbacks: {
                signInSuccessWithAuthResult(authResult) {
                    _this.$store.dispatch(AUTH_FIREBASEUI, authResult.user)
                    _this.$emit('success')
                },
                uiShown: () => {
                    this.loading = false
                },
            },
        }

        ui.start('#firebaseui', config)
    },
}
</script>
