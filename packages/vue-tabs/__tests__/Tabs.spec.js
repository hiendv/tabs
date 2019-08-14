import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Tab from '../src/Tab.js'
import Tabs from '../src/Tabs.vue'

const fakeMount = (component, options, children) => {
  let App = Vue.extend({
    render (h) {
      return h(component, options, children(h))
    }
  })

  return mount(App).find(component)
}

describe('Tabs', () => {
  it('renders', () => {
    const wrapper = fakeMount(Tabs, {}, h => {
      return [
        h(Tab, {
          props: {
            title: 'One'
          },
          scopedSlots: {
            default () {
              return h('div', {}, 'One Content')
            }
          }
        }),
        h(Tab, {
          props: {
            title: 'Two'
          },
          scopedSlots: {
            default () {
              return h('div', {}, 'Two Content')
            }
          }
        })
      ]
    })

    return wrapper.vm.$nextTick()
      .then(() => {
        expect(wrapper.html()).toMatchSnapshot()
      })
  })

  it('renders with theme', () => {
    const wrapper = fakeMount(Tabs, {
      props: {
        theme: {
          tabs: 'one',
          items: 'two',
          item: 'three',
          'item--active': 'three--active',
          panel: 'four'
        }
      }
    }, h => {
      return [
        h(Tab, {
          props: {
            title: 'One'
          },
          scopedSlots: {
            default () {
              return h('div', {}, 'One Content')
            }
          }
        }),
        h(Tab, {
          props: {
            title: 'Two'
          },
          scopedSlots: {
            default () {
              return h('div', {}, 'Two Content')
            }
          }
        })
      ]
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
    const wrapper = fakeMount(Tabs, {}, h => {
      return [
        h(Tab, {
          props: {
            title: 'One'
          },
          scopedSlots: {
            default () {
              return h('div', {}, 'One Content')
            }
          }
        }),
        h(Tab, {
          props: {
            title: 'Two'
          },
          scopedSlots: {
            default () {
              return h('div', {}, 'Two Content')
            }
          }
        })
      ]
    })

    return wrapper.vm.$nextTick()
      .then(() => {
        expect(wrapper.html()).toMatchSnapshot()
      })
      .then(() => {
        wrapper.findAll('.item').at(1).trigger('click')
        console.log(wrapper.html())
      })
  })
})
