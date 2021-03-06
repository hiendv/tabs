import { Octicon } from 'octicons-vue'

export default {
  functional: true,
  inject: ['theme'],
  props: {
    nav: {
      type: Function,
      default: undefined
    },
    item: {
      type: Object,
      required: true
    }
  },
  render (h, ctx) {
    const { data, props, injections } = ctx
    if (typeof props.nav === 'function') {
      return props.nav(data)
    }

    const children = [
      props.item.title
    ]

    if (props.item.icon.attrs()) {
      children[0] = h('span', {}, children[0])
      children.unshift([
        h(Octicon, { props: { icon: props.item.icon, className: injections.theme.octicon } }),
        ' '
      ])
    }

    data.attrs.href = '#'
    return h('a', data, children)
  }
}
