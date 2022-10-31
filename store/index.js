import { getUserFromCookie } from '~/helpers'

export const state = () => ({
    user: null,
})
export const actions = {
    onAuthStateChangedAction(state, { authUser }) {
        if (!authUser) {
            // claims = null
            state.commit('SET_USER', null)
            // Perform logout operations
            window.location.reload()
        } else {
            // Do something with the authUser and the claims object...
            const { uid, email, displayName } = authUser
            state.commit('SET_USER', {
                uid,
                email,
                displayName,
            })
        }
    },
    async nuxtServerInit({ dispatch, commit }, { req }) {
        const user = getUserFromCookie(req)
        if (user) {
            const { uid, email, emailVerified, displayName, photoURL } = user
            await commit('SET_USER', {
                uid,
                email,
                emailVerified,
                displayName,
                photoURL,
            })
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
    username(state) {
        return state.user ? state.user.displayName : 'user'
    },
    email(state) {
        return state.user ? state.user.email : 'email@gmail.com'
    },
}
