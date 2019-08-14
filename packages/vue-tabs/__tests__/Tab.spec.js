import { shallowMount } from '@vue/test-utils'
import Tab from '../src/Tab.js'

describe('Tab', () => {
  it('renders', () => {
    const wrapper = shallowMount(Tab, {
      scopedSlots: {
        default () {
          return this.$createElement('div', {}, 'Gotcha')
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
