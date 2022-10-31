module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs/eslint-config',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:vue/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'vue/html-indent': ['error', 4],
    'vue/singleline-html-element-content-newline': 0,
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true,
      },
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['default'],
      },
    ],
  },
  globals: {
    _: true,
    $nuxt: true,
  },
}
