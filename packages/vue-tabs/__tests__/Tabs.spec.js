import { mount, createLocalVue } from '@vue/test-utils'
import Tab from '../src/Tab.js'
import Tabs from '../src/Tabs.vue'

let localVue = null

beforeAll(() => {
  localVue = createLocalVue()
  localVue.component('tab', Tab)
})

afterAll(() => {
  localVue = null
})

describe('Tabs', () => {
  it('renders', () => {
    const wrapper = mount(Tabs, {
      slots: {
        default: `
          <tab title="One"><div>One Content</div></tab>
          <tab title="Two"><div>Two Content</div></tab>
        `
      },
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.findAll('.item').at(1).trigger('click')
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.emitted()['update:show']).toStrictEqual([[1]])
  })

  it('renders without slots', () => {
    const wrapper = mount(Tabs)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with custom theme', () => {
    const wrapper = mount(Tabs, {
      propsData: {
        theme: {
          tabs: 'one',
          items: 'two',
          item: 'three',
          'item--active': 'three--active',
          panel: 'four'
        }
      },
      slots: {
        default: `
          <tab title="One"><div>One Content</div></tab>
          <tab title="Two"><div>Two Content</div></tab>
        `
      },
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with custom navigation', () => {
    const wrapper = mount(Tabs, {
      propsData: {
        show: 1
      },
      slots: {
        default: `
          <tab title="One"><div>One Content</div></tab>
          <tab title="Two"><div>Two Content</div></tab>
        `
      },
      scopedSlots: {
        nav (props) {
          return this.$createElement('div', props.items.map((item, index) => {
            return this.$createElement('a', {
              key: index,
              on: {
                click: e => {
                  e.preventDefault()
                  wrapper.setProps({ show: index })
                }
              }
            }, item.title)
          }))
        }
      },
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.props()).toMatchObject({
      show: 1
    })

    wrapper.find('a').trigger('click')

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.props()).toMatchObject({
      show: 0
    })
  })
})
