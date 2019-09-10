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
    }
  },
  render (h, context) {
    return h(
      'div',
      context,
      context.scopedSlots.default({})
    )
  }
}
