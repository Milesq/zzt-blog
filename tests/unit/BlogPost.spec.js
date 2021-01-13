import { mount } from '@vue/test-utils'
import BlogPost from '../../components/BlogPost'

describe('Blog Post', () => {
  describe('Title', () => {
    it('display title defined in props', () => {
      const wrapper = mount(BlogPost, {
        propsData: {
          title: 'Some title',
          description: 'lorem ipsum dolor sit',
          createdAt: new Date(),
          category: 'Sci-Fi',
        },
      })

      expect(wrapper.find('.display-1').text()).toContain('Some title')
    })
  })

  describe('Description', () => {
    it('display description defined in props', () => {
      const wrapper = mount(BlogPost, {
        propsData: {
          title: 'Some title',
          description: 'lorem ipsum dolor sit',
          createdAt: new Date(),
          category: 'Sci-Fi',
        },
      })

      expect(wrapper.find('.text-justify').text()).toContain(
        'lorem ipsum dolor sit'
      )
    })
  })
})
