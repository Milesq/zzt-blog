import { config } from '@vue/test-utils'

// Mock Nuxt client-side component
config.stubs['client-only'] = {
  render(h) {
    return h('div', this.$slots.default)
  },
}
