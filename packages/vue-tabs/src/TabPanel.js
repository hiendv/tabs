import { deepmerge } from '@hiendv/tabs'

export default {
  name: 'TabPanel',
  functional: true,
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
  render (h, context) {
    const { data, props } = context
    return h('div', deepmerge(data, props.item.data.data), props.item.children)
  }
}
