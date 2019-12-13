import { mount, createLocalVue } from '@vue/test-utils'
import { setHash } from '@hiendv/tabs'
import VueRouter from 'vue-router'
import { alert, zap } from 'octicons-vue'
import { Tabs, Tab } from '../src/main.js'

let localVue = null
const transitionStub = () => ({
  render: function (h) {
    return this.$options._renderChildren
  }
})

beforeAll(() => {
  localVue = createLocalVue()
  localVue.component('tab', Tab)
  localVue.component('transition', transitionStub())
})

afterAll(() => {
  localVue = null
})

describe('Tabs', () => {
  it('renders', async () => {
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
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.emitted()['update:show']).toStrictEqual([[1]])
  })

  it('renders without slots', () => {
    const wrapper = mount(Tabs, { stubs: { transition: transitionStub() } })
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

  it('renders with panel custom bindings', () => {
    const wrapper = mount(Tabs, {
      slots: {
        default: `
          <tab title="One" style="background-color: #f5f5f5" class="foobar"><div>One Content</div></tab>
          <tab title="Two"><div>Two Content</div></tab>
        `
      },
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with custom navigation', async () => {
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
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.props()).toMatchObject({
      show: 0
    })
  })

  it('renders with hashes', () => {
    setHash('two')

    const wrapper = mount(Tabs, {
      slots: {
        default: `
          <tab title="One" hash="one"><div>One Content</div></tab>
          <tab title="Two" hash="two"><div>Two Content</div></tab>
        `
      },
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()
    wrapper.find('a').trigger('click')
    expect(window.location.hash).toEqual('#one')
  })

  it('renders with icons', () => {
    const wrapper = mount(Tabs, {
      mocks: {
        alert,
        zap
      },
      slots: {
        default: `
          <tab title="One" :icon="alert"><div>One Content</div></tab>
          <tab title="Two" :icon="zap"><div>Two Content</div></tab>
        `
      },
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with hashes from vue-router', () => {
    setHash('')
    localVue.use(VueRouter)
    const router = new VueRouter()

    const wrapper = mount(Tabs, {
      slots: {
        default: `
          <tab title="One" hash="one"><div>One Content</div></tab>
          <tab title="Two" hash="two"><div>Two Content</div></tab>
          <tab title="Three"><div>Three Content</div></tab>
          <tab title="Four"><div>Four Content</div></tab>
        `
      },
      localVue,
      router
    })

    expect(window.location.toString()).toEqual('http://localhost/#/')
    expect(wrapper.html()).toMatchSnapshot()

    wrapper.find('a').trigger('click')
    expect(window.location.toString()).toEqual('http://localhost/#/#one')

    wrapper.findAll('.item').at(1).trigger('click')
    expect(window.location.toString()).toEqual('http://localhost/#/#two')

    wrapper.findAll('.item').at(2).trigger('click')
    expect(window.location.toString()).toEqual('http://localhost/#/')

    wrapper.findAll('.item').at(3).trigger('click')
    expect(window.location.toString()).toEqual('http://localhost/#/')
  })

  it('renders <tab> without slots', async () => {
    const wrapper = mount(Tabs, {
      slots: {
        default: `
          <tab></tab>
          <tab title="Two"></tab>
        `
      },
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.findAll('.item').at(1).trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.emitted()['update:show']).toStrictEqual([[1]])
  })

  it('renders ghost <tab>', () => {
    const wrapper = mount(Tabs, {
      slots: {
        default: `
          <tab title="One"><div>One Content</div></tab>
          <tab title="Two"><div>Two Content</div></tab>
          <tab title="Ghost" ghost></tab>
        `
      },
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.findAll('.item').at(2).trigger('click')
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.emitted()['update:show']).toBeFalsy()
  })

  it('renders end <tab>', async () => {
    const wrapper = mount(Tabs, {
      slots: {
        default: `
          <tab title="One"><div>One Content</div></tab>
          <tab title="Two" end><div>Two Content</div></tab>
        `
      },
      localVue
    })

    expect(wrapper.html()).toMatchSnapshot()

    wrapper.findAll('.item').at(1).trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.emitted()['update:show']).toStrictEqual([[1]])
  })
})
