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

    return wrapper.vm.$nextTick()
      .then(() => {
        expect(wrapper.html()).toMatchSnapshot()
      })
  })

  it('renders with theme', () => {
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

    return wrapper.vm.$nextTick()
      .then(() => {
        expect(wrapper.html()).toMatchSnapshot()
      })
  })

  it('renders without slots', () => {
    const wrapper = mount(Tabs)

    return wrapper.vm.$nextTick()
      .then(() => {
        expect(wrapper.html()).toMatchSnapshot()
      })
  })

  it('renders correct panels', () => {
    const wrapper = mount(Tabs, {
      slots: {
        default: `
          <tab title="One"><div>One Content</div></tab>
          <tab title="Two"><div>Two Content</div></tab>
        `
      },
      localVue
    })

    return wrapper.vm.$nextTick()
      .then(() => {
        expect(wrapper.html()).toMatchSnapshot()
        wrapper.findAll('.item').at(1).trigger('click')
        expect(wrapper.html()).toMatchSnapshot()
      })
  })
})
