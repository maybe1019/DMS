export default function ({ $axios, $config: { baseUrl }, store }, inject) {
    const dmsApi = $axios.create()
    dmsApi.setBaseURL(baseUrl)
    dmsApi.onResponse((response) => {
        if (response.status === 404) {
            console.log('Resource is not found')
        }
    })
    inject('dmsApi', dmsApi)
}
