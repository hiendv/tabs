export default {
  name: 'Tab',
  functional: true,
  props: {
    title: {
      type: String,
      default () {
        return 'Title'
      }
    },
    icon: {
      type: Object,
      default () {
        return {
          attrs () {},
          path () {}
        }
      }
    },
    hash: {
      type: String,
      default: null
    },
    end: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    }
  },
  render (h, context) {
    if (context.props.ghost) {
      return h('div', context)
    }

    if (!context.scopedSlots.default) {
      return h('div', context)
    }

    return h('div', context, context.scopedSlots.default())
  }
}
