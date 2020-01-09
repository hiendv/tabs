<template>
  <div :class="theme.tabs">
    <slot name="nav" :items="items">
      <nav :class="theme.items">
        <tab-item
          v-for="(item, index) in items" :key="index"
          :nav="navs[index]"
          :class="{
            [theme.item]: true,
            [theme['item--active']]: isActive(index),
            [theme['item--end']]: item.end
          }" :item="item"
          @click.prevent="itemClicked(index)"
          v-on="listeners[index]"
        />
      </nav>
    </slot>
    <transition
      tag="div" name="slide-down"
      mode="out-in"
    >
      <keep-alive v-if="keepAlive" :max="5">
        <tab-panel-stateful
          :key="active" :class="theme.panel"
          :item="activePanel"
        />
      </keep-alive>
      <tab-panel
        v-else
        :key="active" :class="theme.panel"
        :item="activePanel"
      />
    </transition>
  </div>
</template>
<style lang="scss">
@import "assets/transitions/slide-down";
</style>
<script>
import { setHash, themeDefault } from '@hiendv/tabs'
import TabItem from './TabItem'
import TabPanel from './TabPanel'
import TabPanelStateful from './TabPanelStateful'

export default {
  components: { TabItem, TabPanel, TabPanelStateful },
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
    },
    keepAlive: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: 0,
      slots: []
    }
  },
  provide () {
    return {
      theme: this.theme
    }
  },
  computed: {
    validChildren () {
      return this.slots.filter(vnode => vnode && vnode.fnOptions && vnode.fnOptions.name === 'Tab' && vnode.data)
    },
    items () {
      return this.validChildren.map(vnode => vnode.data.props)
    },
    navs () {
      return this.validChildren.map(vnode => vnode.data.scopedSlots.nav)
    },
    listeners () {
      return this.validChildren.map(vnode => vnode.data.listeners)
    },
    activePanel () {
      return this.validChildren.find((panel, i) => this.isActive(i))
    }
  },
  watch: {
    show: {
      immediate: true,
      handler (val) {
        this.active = val
      }
    },
    items () {
      this.syncActiveHash()
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
    currentHash () {
      return (this.$route ? this.$route.hash : window.location.hash).substring(1)
    },
    itemClicked (index) {
      const item = this.items[index]
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
      const item = this.items[index]
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
      const index = this.items.findIndex(element => {
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
