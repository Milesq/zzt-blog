export default {
  ssr: false,
  head: {
    titleTemplate: '%s - zzt-blog',
    title: 'zzt-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  modules: ['@nuxtjs/pwa', '@nuxt/content'],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },
  storybook: {
    stories: ['~/stories/**/*.stories.js'],
  },
};
