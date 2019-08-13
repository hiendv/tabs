export default {
  name: 'Tab',
  functional: true,
  props: {
    children: {
      type: [Object, Array],
      default () {
        return {}
      }
    }
  },
  render (h, context) {
    const { data, props } = context
    return h('div', data, props.children)
  }
}
