<template>
  <div :class="theme.tabs">
    <slot name="nav" :items="slotProps">
      <nav :class="theme.items">
        <a
          v-for="(props, index) in slotProps" :key="index"
          :class="{
            [theme.item]: true,
            [theme['item--active']]: isActive(index),
            [theme['item--end']]: props.end
          }" :href="`#${props.hash || ''}`"
          @click.prevent="itemClicked(index)" v-on="listeners[index]"
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
import { setHash, themeDefault } from '@hiendv/tabs'
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
    listeners () {
      return this.validChildren.map(vnode => vnode.data.listeners)
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
    this.syncActiveHash()
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
    currentHash () {
      return (this.$route ? this.$route.hash : window.location.hash).substring(1)
    },
    itemClicked (index) {
      const item = this.slotProps[index]
      if (item.ghost) {
        return
      }

      return this.setActive(index)
    },
    isActive (index) {
      if (index === this.active) {
        return true
      }

      return false
    },
    setHash (index) {
      const hash = this.currentHash()
      const item = this.slotProps[index]
      if (hash === item.hash) {
        return
      }

      if (this.$route && !hash && !item.hash) {
        return
      }

      if (this.$route) {
        this.$router.replace({ hash: item.hash })
        return
      }

      setHash(item.hash)
    },
    syncActiveHash () {
      const hash = this.currentHash()
      const index = this.slotProps.findIndex(element => {
        return element.hash === hash
      })

      if (index < 0) {
        return
      }

      this.setActive(index)
    },
    setActive (index) {
      this.setHash(index)
      this.active = index
      this.$emit('update:show', index)
    },
    loadSlots () {
      this.slots = this.$slots.default || []
    }
  }
}
</script>
