export default {
  name: 'Tab',
  props: {
    item: {
      type: Object,
      default () {
        return {
          data: {},
          children: []
        }
      }
    }
  },
  render (h) {
    return h('div', this.item.data.data, this.item.children)
  }
}
