import { shallowMount } from '@vue/test-utils'
import BlogPost from '../../components/BlogPost'

describe('Blog Post', () => {
  describe('Title', () => {
    it('display title defined in props', () => {
      const title = 'Some title'

      const wrapper = shallowMount(BlogPost, {
        propsData: {
          title,
          description: '',
          createdAt: new Date(),
          category: 'Sci-Fi',
          src: 'https://www.google.com',
        },
      })

      expect(wrapper.find('.display-1').text()).toContain('Some title')
    })
  })

  describe('Description', () => {
    it('display description defined in props', () => {
      const description = 'Lorem ipsum dolor sit'

      const wrapper = shallowMount(BlogPost, {
        propsData: {
          title: '',
          description,
          createdAt: new Date(),
          category: '',
          src: 'https://www.google.com',
        },
      })

      expect(wrapper.find('.text-justify').text()).toContain(description)
    })
  })
})
