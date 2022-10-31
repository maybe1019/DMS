const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
    content: [
        './src/**/*.{html,js}',
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    screens: {
        xs: '435px',
        xss: '590px',
        ...defaultTheme.screens,
    },
    theme: {
        extend: {
            transitionProperty: {
                width: 'width',
            },
            colors: {
                blue: {
                    light: '#F3F7FF',
                    medium: '',
                    dark: '#4489FE',
                },
                gray: {
                    light: '#DADCE0',
                    lighter: '#E5E9EE',
                    medium: '#F1F3F4',
                    dark: '#757575',
                    darker: '#767676',
                },
                black: {
                    dark: '#212121',
                    50: 'rgba(0,0,0,0.2)',
                },
                darkLight: '#00000052',
            },
            spacing: {
                27.5: '6.875rem',
                12.25: '3.0625rem',
                '3.8xl': '121.875rem',
            },
            screens: {
                '2lg': '1236px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
        // require('tailwind-scrollbar-hide'),
        // require('tailwind-scrollbar-hide'),
    ],
}
