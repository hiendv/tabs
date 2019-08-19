<template>
  <div :class="theme.tabs">
    <slot name="nav" :items="slotProps">
      <nav :class="theme.items">
        <a
          v-for="(props, index) in slotProps" :key="index"
          :class="[theme.item, isActive(index) ? theme['item--active'] : '']" href="#"
          @click.prevent="setActive(index)"
        ><octicon v-if="props.icon.attrs()" :icon="props.icon" /> {{ props.title }}</a>
      </nav>
    </slot>
    <transition
      tag="div" name="slide-down"
      mode="out-in"
    >
      <tab-panel
        :key="active"
        :class="theme.panel" :children="activePanel"
      />
    </transition>
  </div>
</template>
<style lang="scss">
@import "assets/transitions/slide-down";
</style>
<script>
import { Octicon } from 'octicons-vue'
import { themeDefault } from '@hiendv/tabs'
import TabPanel from './TabPanel'
export default {
  components: { TabPanel, Octicon },
  props: {
    theme: {
      type: Object,
      default () {
        return themeDefault
      }
    },
    show: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      active: 0,
      slots: []
    }
  },
  computed: {
    validChildren () {
      return this.slots.filter(vnode => vnode && vnode.fnOptions && vnode.fnOptions.name === 'Tab' && vnode.data)
    },
    slotProps () {
      return this.validChildren.map(vnode => vnode.data.props)
    },
    panels () {
      return this.validChildren.map(vnode => vnode.children)
    },
    activePanel () {
      return this.panels.find((panel, i) => this.isActive(i))
    }
  },
  watch: {
    show: {
      immediate: true,
      handler (val) {
        this.active = val
      }
    }
  },
  created () {
    this.loadSlots()
  },
  updated () {
    // Because $slots is not reactive we need these below lines for hot-reloading
    if (!this.$slots.default || !this.$slots.default.length) {
      return
    }

    if (this.$slots.default === this.slots) {
      // idk how but this comparison of objects just works o.O
      return
    }

    this.loadSlots()
  },
  methods: {
    isActive (index) {
      if (index === this.active) {
        return true
      }

      return false
    },
    setActive (index) {
      this.active = index
      this.$emit('update:show', index)
    },
    loadSlots () {
      this.slots = this.$slots.default || []
    }
  }
}
</script>
