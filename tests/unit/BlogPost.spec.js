import { mount } from '@vue/test-utils'
import BlogPost from '../../components/BlogPost'

describe('Blog Post', () => {
  describe('Title', () => {
    it('display title defined in props', () => {
      const wrapper = mount(BlogPost, {
        propsData: {
          title: {
            name: 'Some title',
            completed: false,
          },
        },
      })

      expect(wrapper.find('.display-1').text()).toContain('Some title')
    })
  })

  describe('Description', () => {
    it('display description defined in props', () => {
      const wrapper = mount(BlogPost, {
        propsData: {
          description: {
            name: 'Some description',
            completed: false,
          },
        },
      })

      expect(wrapper.find('.text-justify').text()).toContain('Some description')
    })
  })
})
