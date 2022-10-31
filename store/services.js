import { generateNewToken } from '~/helpers'
export const state = () => ({
    fields: [],
    menu: [],
    serviceList: [],
    activeObject: {
        serviceId: null,
        objectId: null,
    },
})
export const actions = {
    async deleteObjectAttribute({ commit, state, getters }, { serviceId, objectId, id }) {
        try {
            const docRef = this.$fire.doc(this.$fire.db, 'services', serviceId, 'objectDefinitions', objectId)
            const objectData = (await this.$fire.getDoc(docRef)).data()
            const newAttrList = []
            for (let i = 0; i < objectData.attributes.length; i++) {
                if (objectData.attributes[i].id === id) {
                    continue
                }
                newAttrList.push(objectData.attributes[i])
            }
            objectData.attributes = newAttrList
            await this.$fire.setDoc(docRef, objectData)
            commit('SET_FIELDS', objectData.attributes)
        } catch (e) {
            console.error(e.message)
            console.error(e.stack)
        }
    },
    async addServiceObject({ commit }, { serviceId, objectName }) {
        try {
            const docRef = this.$fire.doc(this.$fire.db, 'services', serviceId, 'objectDefinitions', generateNewToken())
            await this.$fire.setDoc(docRef, { objectName })
        } catch (e) {
            console.error(e.message)
            console.error(e.stack)
        }
    },
    async updateServiceObject({ commit }, { serviceId, objectId, objectName }) {
        try {
            const docRef = this.$fire.doc(this.$fire.db, 'services', serviceId, 'objectDefinitions', objectId)
            await this.$fire.setDoc(docRef, { objectName })
        } catch (e) {
            console.error(e.message)
            console.error(e.stack)
        }
    },
    async getServices({ commit }) {
        try {
            const querySnapshot = await this.$fire.getDocs(this.$fire.collection(this.$fire.db, 'services'))
            const menuItems = []
            for (let i = 0; i < querySnapshot.size; i++) {
                const doc = querySnapshot.docs[i]
                const res = {
                    title: doc.data().serviceName,
                    id: doc.id,
                    children: [],
                    deployedVersion: doc.data().deployedVersion + '',
                    baseUrl: doc.data().baseUrl,
                }
                const objectsSnapshot = await this.$fire.getDocs(
                    this.$fire.collection(this.$fire.db, 'services', doc.id, 'objectDefinitions')
                )
                objectsSnapshot.docs.forEach((objectDoc) => {
                    res.children.push({ ...objectDoc.data(), id: objectDoc.id })
                })
                menuItems.push(res)
            }

            await commit('SET_MENU', menuItems)
        } catch (e) {
            console.log(e.message)
            console.log(e.stack)
            throw e
        }
    },
    setFields({ commit }, fields) {
        commit('SET_FIELDS', fields)
    },
    setActiveObject({ commit }, { serviceId, objectId }) {
        commit('SET_ACTIVE_OBJECT', { serviceId, objectId })
    },
    async createService({ commit }, { serviceName, baseUrl, deployedVersion }) {
        try {
            const newToken = generateNewToken()
            const newService = { serviceName, baseUrl, deployedVersion }
            const newDocRef = this.$fire.doc(this.$fire.db, 'services', newToken)
            await this.$fire.setDoc(newDocRef, newService)
        } catch (e) {
            console.log(e.message)
            console.log(e.stack)
            throw e
        }
    },
    async updateService({ commit }, { serviceId, serviceName, baseUrl, deployedVersion }) {
        try {
            const docRef = this.$fire.doc(this.$fire.db, 'services', serviceId)
            const serviceData = (await this.$fire.getDoc(docRef)).data()
            serviceData.serviceName = serviceName
            serviceData.baseUrl = baseUrl
            serviceData.deployedVersion = deployedVersion
            await this.$fire.setDoc(docRef, serviceData)
        } catch (error) {
            console.log(error.message)
            console.log(error.stack)
            throw error
        }
    },
    async updateObjectAttribute(
        { commit, state },
        {
            key,
            maxLength,
            nullable,
            sequence,
            sequenceOrder,
            sequenceValue,
            type,
            unique,
            serviceId,
            objectId,
            attributeId,
        }
    ) {
        try {
            const docRef = this.$fire.doc(this.$fire.db, 'services', serviceId, 'objectDefinitions', objectId)
            const objectData = (await this.$fire.getDoc(docRef)).data()
            for (let i = 0; i < objectData.attributes.length; i++) {
                if (objectData.attributes[i].id === attributeId) {
                    objectData.attributes[i] = {
                        id: attributeId,
                        key,
                        maxLength,
                        nullable,
                        sequence,
                        sequenceOrder,
                        sequenceValue,
                        type,
                        unique,
                    }
                }
            }
            await this.$fire.setDoc(docRef, objectData)
            commit('SET_FIELDS', objectData.attributes)
        } catch (error) {
            console.log(error.message)
            console.log(error.stack)
            throw error
        }
    },
    async addObjectAttribute(
        { commit, state },
        { key, maxLength, nullable, sequence, sequenceOrder, sequenceValue, type, unique }
    ) {
        try {
            const docRef = this.$fire.doc(
                this.$fire.db,
                'services',
                state.activeObject.serviceId,
                'objectDefinitions',
                state.activeObject.objectId
            )
            const objectData = (await this.$fire.getDoc(docRef)).data()
            const newAttr = {
                id: generateNewToken(),
                key,
                maxLength,
                nullable,
                sequence,
                sequenceOrder,
                sequenceValue,
                type,
                unique,
            }

            if (objectData.attributes) {
                objectData.attributes.push(newAttr)
            } else {
                objectData.attributes = [newAttr]
            }
            console.log('objectData: ', objectData)

            await this.$fire.setDoc(docRef, objectData)
            commit('SET_FIELDS', objectData.attributes)
        } catch (e) {
            console.log(e.message)
            console.log(e.stack)
            throw e
        }
    },
}
export const mutations = {
    SET_MENU(state, menu) {
        state.menu = menu
    },
    SET_SERVICES_LIST(state, services) {
        state.serviceList = services
    },
    SET_FIELDS(state, fields) {
        state.fields = fields
    },
    SET_ACTIVE_OBJECT(state, { serviceId, objectId }) {
        state.activeObject.serviceId = serviceId
        state.activeObject.objectId = objectId
    },
}
export const getters = {
    getMenu(state) {
        return state.menu
    },
    getFields(state) {
        return state.fields
    },
    getActiveObject(state) {
        return state.activeObject
    },
    getServicesList(state) {
        return state.serviceList
    },
}

// const getServiceList = (serviceItems) => {
//     return serviceItems.map((element) => {
//         return {
//             text: element.serviceName,
//             value: element.serviceId,
//         }
//     })
// }
