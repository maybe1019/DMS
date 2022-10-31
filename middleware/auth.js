import { homeRoute, loginRoute, registerRoute } from '~/constants/routes'

export default function ({ app, route, store, redirect }) {
    if (!store.state.user && route.path !== registerRoute) {
        return redirect(loginRoute)
    }
    if (route.path === (loginRoute || registerRoute) && store.state.user) {
        return redirect(homeRoute)
    }
}
