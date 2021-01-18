import Vue from 'vue';
import Vuetify from 'vuetify';
import { config } from '@vue/test-utils';

Vue.use(Vuetify);

const createBlankComponent = () => ({
  render(h) {
    return h('div', this.$slots.default);
  },
});

// Mock Nuxt components
['client-only', 'nuxt-link'].forEach(name => {
  config.stubs[name] = createBlankComponent();
});
