import { shallowMount } from '@vue/test-utils'
import Index from '@/pages'

describe('Blog Post', () => {
  it('display data', () => {
    const wrapper = shallowMount(Index)

    expect(wrapper.find('main').exists()).toBe(true)
    expect(wrapper.find('nav').exists()).toBe(true)
    expect(wrapper.find('header').exists()).toBe(true)
  })
})
