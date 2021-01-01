module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  overrides: [
    {
      files: ['tests/*'],
      env: {
        jest: true,
      },
    },
  ],
  plugins: ['prettier', 'jest'],
  rules: {
    'prefer-const': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'off',
  },
};
