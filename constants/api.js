export const service = {
    accessToken: '/service/?accessToken=accessToken',
    create: '/service/save',
    addObjectAttribute: (serviceId, objectDefinitionId) => {
        return (
            '/objectDefinition/field/create?serviceId=' +
            serviceId +
            '&objectDefinitionId=' +
            objectDefinitionId +
            '&userAcceccToken=userAcceccToken'
        )
    },
    deleteObjectAttribute: (serviceId, objectDefinitionId, fieldName) => {
        return (
            '/objectDefinition/field/delete?serviceId=' +
            serviceId +
            '&objectDefinitionId=' +
            objectDefinitionId +
            '&userAcceccToken=userAcceccToken' +
            '&fieldName=' +
            fieldName
        )
    },
    addServiceObject: (serviceId) => {
        return '/objectDefinition/create/?userAcceccToken=' + serviceId + '&serviceId=' + serviceId
    },
}
