import Cookies from 'js-cookie'
import { homeRoute } from '~/constants/routes'
export const actions = {
    async loginWithEmailAndPassword({ state, dispatch }, { email, password }) {
        console.log('==== login process started ===')
        try {
            const { user } = await this.$fire.signInWithEmailAndPassword(this.$fire.auth, email, password)

            Cookies.set('access_token', JSON.stringify(user)) // saving token in cookie for server rendering
            await dispatch('onAuthStateChangedAction', { authUser: user }, { root: true })
            await this.$router.push(homeRoute)
            console.log('==== login process ended ===')
        } catch (error) {
            console.log('==== login error occured ===')
            console.error(error.message)
        }
    },
    async loginWithGoogle({ dispatch }) {
        console.log('==== login process started ===')
        try {
            const provider = new this.$fire.GoogleAuthProvider()
            const auth = this.$fire.auth
            const { user } = await this.$fire.signInWithPopup(auth, provider)
            Cookies.set('access_token', JSON.stringify(user)) // saving token in cookie for server rendering
            await dispatch('onAuthStateChangedAction', { authUser: user }, { root: true })
            await this.$router.push(homeRoute)
            console.log('==== login process ended ===')
        } catch (error) {
            console.log('==== login error occured ===')
            console.error(error.message)
        }
    },
    async registerWithEmailAndPassword({ dispatch }, { email, password }) {
        console.log('==== register process started ===')
        try {
            console.clear()
            await this.$fire.createUserWithEmailAndPassword(this.$fire.auth, email, password)
            await dispatch('loginWithEmailAndPassword', { email, password })
            console.log('==== register process ended ===')
        } catch (error) {
            console.log('==== register error occured ===')
            console.error(error.message)
        }
    },
    async logout({ dispatch }) {
        console.log('==== logout process started ====')
        try {
            await this.$fire.auth.signOut(this.$fire.auth)
            Cookies.remove('access_token') // saving token in cookie for server rendering
            window.location.replace('/')
            await dispatch('onAuthStateChangedAction', { authUser: null }, { root: true })
        } catch (e) {
            console.log('====== logout error ======')
            console.error(e.message)
        }
    },
    async loginWithFirebaseUi({ dispatch }, user) {
        try {
            Cookies.set('access_token', JSON.stringify(user)) // saving token in cookie for server rendering
            await dispatch('onAuthStateChangedAction', { authUser: user }, { root: true })
            await this.$router.push(homeRoute)
            console.log('==== login process ended ===')
        } catch (error) {
            console.log('==== login error occured ===')
            console.error(error.message)
        }
    },
}
export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
        const { uid, email, emailVerified, displayName, photoURL } = authUser

        state.user = {
            uid,
            displayName,
            email,
            emailVerified,
            photoURL: photoURL || null,
            isAdmin: claims.custom_claim,
        }
    },
    SET_USER(state, user) {
        state.user = user
    },
}
export const getters = {
    getUser(state) {
        return state.user
    },
}
