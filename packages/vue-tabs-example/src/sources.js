/* eslint-disable no-useless-escape */

export default {
  sourceSimple () {
    return `<template>
  <tabs>
    <tab title="First">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore.
    </tab>

    <tab title="Second">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </tab>

    <tab title="Third">
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur.
    </tab>
  </tabs>
</template>
<script>
import { Tabs, Tab } from '@hiendv/vue-tabs'

export default {
  components: { Tabs, Tab }
}
<\/script>`
  },
  sourceFull () {
    return `<template>
  <tabs>
    <tab title="Foo">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore.
    </tab>

    <tab title="Bar" hash="bar">
      Refresh and I'm still here because the URL fragment is
      <strong>#bar</strong> now.
    </tab>

    <tab title="Qux" hash="qux">
      Hi, my name is <strong>#qux</strong>
    </tab>

    <tab
      title="Ghost" :icon="flame"
      end ghost
    />
  </tabs>
</template>
<script>
import { globe, zap, beaker, flame } from 'octicons-vue'
import { Tabs, Tab } from '@hiendv/vue-tabs'
export default {
  components: {
    Tabs,
    Tab
  },
  data () {
    return {
      globe,
      zap,
      beaker,
      flame
    }
  }
}
<\/script>
`
  },
  sourceThemes () {
    return `
<template>
  <tabs :theme="themes[activeTheme].theme">
    <tab
      v-for="(item, i) in themes"
      :key="i"
      :title="item.name"
      @click.prevent="() => switchTheme(i)">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna.
    </tab>
  </tabs>
</template>
<script>
import { Tabs, Tab, themeDefault, themeDark, themeMaterial, themeMaterialDark, themeMetro, themeMetroDark } from '@hiendv/vue-tabs'
export default {
  name: 'App',
  components: {
    Tabs,
    Tab
  },
  data () {
    return {
      themes: [{
        name: 'Default',
        theme: themeDefault,
        type: 'light'
      }, {
        name: 'Dark',
        theme: themeDark,
        type: 'dark'
      }, {
        name: 'Material',
        theme: themeMaterial,
        type: 'light'
      }, {
        name: 'Material Dark',
        theme: themeMaterialDark,
        type: 'dark'
      }],
      activeTheme: 0
    }
  },
  computed: {
    isDefault () {
      return this.activeTheme === 0
    },
    isDark () {
      return this.themes[this.activeTheme].type === 'dark'
    }
  },
  methods: {
    switchTheme (i) {
      this.activeTheme = i
    }
  }
}
<\/script>
`
  },
  sourceCustomTheme () {
    return `<template>
  <tabs :theme="theme">
    <tab title="First">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna.
    </tab>

    <tab title="Second">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </tab>

    <tab title="Third">
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur.
    </tab>
  </tabs>
</template>
<script>
import { Tabs, Tab } from '@hiendv/vue-tabs'
export default {
  components: {
    Tabs,
    Tab
  },
  data () {
    return {
      theme: {
        tabs: 'custom-tabs',
        items: 'custom-items',
        item: 'custom-item',
        'item--active': 'custom-item-active',
        'item--end': 'custom-item-end',
        panel: 'custom-panel'
      }
    }
  }
}
<\/script>
<style>
  .custom-tabs {}
  .custom-items {}
  .custom-item {
    display: inline-block;
    padding: .5rem;
    text-decoration: none;
    color: #07a;
  }
  .custom-item-active {
    color: #905;
  }
  .custom-item-end {}
  .custom-panel {
    padding: 1rem;
    border: 1px dashed #cdcdcd;
  }
</style>
`
  },
  sourcePanelBindings () {
    return `<template>
  <tabs>
    <tab title="Blue" class="bg-blue text-white">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna.
    </tab>

    <tab title="Green" class="bg-green text-white">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </tab>

    <tab title="Red" class="text-white" style="background-color: #ff3860;">
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur.
    </tab>
  </tabs>
</template>`
  },
  sourceCustomNavigation () {
    return `<template>
  <tabs :show.sync="show" class="my-tabs">
    <template v-slot:nav="{ items }">
      <div class="my-items">
        <a
          v-for="(item, index) in items" :key="index"
          href="#" :class="{ 'my-item': true, 'active': show === index }"
          @click.prevent="show = index"
        >{{ item.title }}</a>
      </div>
    </template>
    <tab title="First">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna.
    </tab>

    <tab title="Second">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </tab>

    <tab title="Third">
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur.
    </tab>
  </tabs>
</template>
<script>
import { Tabs, Tab } from '@hiendv/vue-tabs'
export default {
  components: {
    Tabs,
    Tab
  },
  data () {
    return {
      show: 1
    }
  }
}
<\/script>
<style lang="scss">
.my-tabs {
  display: flex;
}
.my-items {
  width: 20%;
}
.my-item {
  display: inline-block;
  width: 100%;
  margin-bottom: .2rem;
  padding: .75rem 1rem;
  background-color: #7599ff;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  &.active {
    background-color: #5e65a8;
  }
}
</style>`
  }
}
