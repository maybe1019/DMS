<template>
    <section class="bg-[#F4F7FF] py-20 lg:py-[120px] h-screen flex flex-col items-center justify-center">
        <div class="container">
            <div class="flex flex-wrap -mx-4">
                <div class="w-full px-4">
                    <div
                        class="max-w-[525px] mx-auto text-center bg-white rounded-lg relative py-16 px-10 sm:px-12 md:px-[60px]"
                    >
                        <form @submit.prevent="registerWithEmailAndPassword">
                            <div class="flex items-center input-box space-x-5 justify-between mb-5">
                                <div class="w-full flex flex-col">
                                    <label for="name" class="text-sm bg-white px-1">Email</label>
                                    <input
                                        id="name"
                                        v-model="auth.email"
                                        class="w-full rounded border py-4 px-5 border-gray-200 focus:ring-1 focus:ring-blue-dark text-sm"
                                        name="name"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div class="flex items-center input-box space-x-5 justify-between mb-5">
                                <div class="w-full flex flex-col">
                                    <label for="name" class="text-sm bg-white px-1">Password</label>
                                    <input
                                        id="name"
                                        v-model="auth.password"
                                        class="w-full rounded border py-4 px-5 border-gray-200 focus:ring-1 focus:ring-blue-dark text-sm"
                                        name="name"
                                        type="password"
                                    />
                                </div>
                            </div>
                            <div class="mb-10">
                                <button
                                    type="submit"
                                    value="Sign In"
                                    class="w-full rounded-md border border-blue-dark py-3 px-5 bg-blue-dark text-base text-white cursor-pointer hover:bg-opacity-90 transition"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <p class="text-base mb-6 text-[#adadad]">Connect With</p>
                        <ul class="flex justify-between -mx-2 mb-12">
                            <li class="px-2 w-full">
                                <button
                                    class="flex w-full h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                                    @click="signInWithGoogle"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </li>
                        </ul>

                        <p class="text-base text-[#adadad]">
                            Already a member?
                            <a :href="routes.loginRoute" class="text-blue-dark hover:underline"> Sign In </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { AUTH_GOOGLE, REGISTER_EMAIL_PASSWORD } from '~/constants/actions'
import { loginRoute } from '~/constants/routes'

export default {
    name: 'RegisterPage',
    layout: 'base',
    data() {
        return {
            auth: {
                email: '',
                password: '',
            },
            routes: {
                loginRoute,
            },
        }
    },
    methods: {
        async registerWithEmailAndPassword() {
            await this.$store.dispatch(REGISTER_EMAIL_PASSWORD, {
                email: this.auth.email,
                password: this.auth.password,
            })
        },
        async signInWithGoogle() {
            await this.$store.dispatch(AUTH_GOOGLE)
        },
    },
}
</script>

<style scoped></style>
