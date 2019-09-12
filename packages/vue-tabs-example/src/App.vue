<template>
  <div id="app">
    <div class="container">
      <header>
        <h1>@hiendv/vue-tabs</h1>
      </header>
      <section>
        <h3>Default themes</h3>
        <div :style="{ padding: '1rem', backgroundColor: isThemeDefault ? '#fff' : '#313131' }">
          <tabs :theme="theme">
            <tab title="Foo" :icon="globe">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </tab>

            <tab
              title="Bar" :icon="zap"
              hash="bar"
            >
              Refresh and I'm still here because the URL fragment is <strong>#bar</strong> now.
            </tab>

            <tab
              title="Qux" :icon="beaker"
              hash="qux"
            >
              Hi, my name is <strong>#qux</strong>
            </tab>

            <tab
              :title="isThemeDefault ? 'Dark' : 'Default'" :icon="flame"
              end ghost
              @click.prevent="switchTheme"
            />
          </tabs>
        </div>
      </section>
      <section>
        <h3>Custom theme & navigation</h3>
        <div style="background-color: #fff; padding: 1rem">
          <tabs :show.sync="show" :theme="{panel: 'custom-tab-panel'}">
            <template v-slot:nav="{ items }">
              <a
                v-for="(item, index) in items" :key="index"
                href="#" :class="{ 'custom-tab-item': true, 'active': show === index }"
                @click.prevent="show = index"
              >{{ item.title }}</a>
            </template>
            <tab title="First" :icon="globe">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </tab>

            <tab title="Second" :icon="zap">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </tab>

            <tab title="Third" :icon="beaker">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </tab>
          </tabs>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { globe, zap, beaker, flame } from 'octicons-vue'
import { Tabs, Tab, themeDefault, themeDark } from '@hiendv/vue-tabs'
export default {
  name: 'App',
  components: {
    Tabs,
    Tab
  },
  data () {
    return {
      show: 1,
      theme: themeDefault
    }
  },
  computed: {
    globe () {
      return globe
    },
    zap () {
      return zap
    },
    beaker () {
      return beaker
    },
    flame () {
      return flame
    },
    isThemeDefault () {
      return this.theme === themeDefault
    }
  },
  methods: {
    switchTheme () {
      if (this.isThemeDefault) {
        this.theme = themeDark
        return
      }

      this.theme = themeDefault
    }
  }
}
</script>
<style lang="scss">
body {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  background: #f0f2f4;
}

header {
  margin-bottom: 3rem;
  padding: 1rem 0;
  border-bottom: 1px solid lighten(#4b6280, 40%);
}

section {
  margin-bottom: 2rem;
}

.container {
  margin: 0 auto;
  max-width: 600px;
}

.custom-tab-item {
  display: inline-block;
  background-color: #7599ff;
  color: #fff;
  padding: .75rem 1rem;
  border-radius: 4px;
  margin-right: 2px;
  text-decoration: none;
  &.active {
    background-color: #5e65a8;
  }
}

.custom-tab-panel {
  margin-top: 2px;
  padding: 1rem;
  color: #253140;
  background-color: #f9fafe;
}
</style>
