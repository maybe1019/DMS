require('dotenv').config()
export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'file-management',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        script: [],
    },
    server: {
        host: process.env.NUXT_HOST,
        port: process.env.NUXT_PORT,
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/tailwind.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/firebase', '~/plugins/axios', '~/plugins/click-away', '~/plugins/vuelidate'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/pwa',
        '@nuxt/postcss8',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
        '@blokwise/dynamic',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    router: {
        middleware: 'auth',
    },
    publicRuntimeConfig: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSANGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID,
        databaseUrl: process.env.APP_BASE_URL,
    },
    ngrok: {
        // module options
        authtoken: process.env.NGROK_AUTHTOKEN,
        auth: process.env.NGROK_AUTH,
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
        extend(config) {
            config.module.rules.push({
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto',
            })
        },
    },
    pwa: {
        meta: false,
        icon: false,
        workbox: {
            importScripts: ['/firebase-auth-sw.js'],
            dev: true,
        },
    },
    firebase: {
        services: {
            auth: {
                ssr: true,
                persistence: 'local',
            },
        },
    },
}
