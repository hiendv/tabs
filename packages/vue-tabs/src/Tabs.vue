<template>
  <div :class="theme.tabs">
    <slot :slots="slotProps" name="items">
      <nav :class="theme.items">
        <a
          v-for="(props, index) in slotProps" :key="index"
          :class="[theme.item, isActive(index) ? theme['item--active'] : '']" href="#"
          @click.prevent="active = index"
        ><octicon :icon="props.icon" v-if="props.icon.attrs()"></octicon> {{ props.title }}</a>
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
import { styleDefault } from '@hiendv/tabs'
import TabPanel from './TabPanel'
export default {
  components: { TabPanel, Octicon },
  props: {
    theme: {
      type: Object,
      default () {
        return styleDefault
      }
    }
  },
  data () {
    return {
      active: 0,
      slots: []
    }
  },
  computed: {
    slotProps () {
      return this.slots
        .filter(vnode => vnode && vnode.fnOptions && vnode.fnOptions.name === 'Tab' && vnode.data)
        .map(vnode => vnode.data.props)
    },
    panels () {
      return this.slots.map(slot => slot.children)
    },
    activePanel () {
      return this.panels.find((panel, i) => this.isActive(i))
    }
  },
  mounted () {
    this.loadSlots()
  },
  updated () {
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
    isActive (idx) {
      if (idx === this.active) {
        return true
      }

      return false
    },
    loadSlots () {
      this.slots = this.$slots.default || []
    }
  }
}
</script>
