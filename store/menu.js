export const state = () => ({
    activeMenu: '',
})
export const actions = {
    setActive({ commit }, menuItem) {
        commit('SET_ACTIVE', menuItem)
    },
}
export const mutations = {
    SET_ACTIVE(state, menuItem) {
        state.activeMenu = menuItem
    },
}
export const getters = {
    getActiveItem(state) {
        return state.activeMenu
    },
}
