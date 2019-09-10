<template>
  <div id="app">
    <div class="container">
      <header>
        <h1>@hiendv/vue-tabs</h1>
      </header>
      <section>
        <h3>Default</h3>
        <div style="background-color: #fff; padding: 1rem">
          <tabs>
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

            <tab
              title="Fourth" :icon="flame"
              end ghost
              @click.prevent="fourth"
            />

            <tab
              title="Fifth" :icon="heart"
              ghost
            />
          </tabs>
        </div>
      </section>
      <section>
        <h3>Dark</h3>
        <div style="background-color: #4b6280; padding: 1rem">
          <tabs :theme="themeDark">
            <tab title="Stranger Things">
              <img src="./assets/fdl.gif" width="100%">
            </tab>

            <tab title="The Big Bang Theory">
              <img src="./assets/bzg.gif" width="100%">
            </tab>

            <tab title="The Punisher">
              <img src="./assets/p.gif" width="100%">
            </tab>
          </tabs>
        </div>
      </section>
      <section>
        <h3>Default with custom navigation</h3>
        <div style="background-color: #fff; padding: 1rem">
          <tabs :show.sync="show">
            <template v-slot:nav="{ items }">
              <a
                v-for="(item, index) in items" :key="index"
                href="#" style="padding: 1rem"
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
      <section>
        <h3>Hash Fragment</h3>
        <div style="background-color: #fff; padding: 1rem">
          <tabs>
            <tab
              title="Foo" :icon="globe"
              hash="foo"
            >
              The location hash should be <strong>#foo</strong>.
            </tab>

            <tab title="Qux" :icon="zap">
              The location hash should be removed.
            </tab>

            <tab
              title="Bar" :icon="beaker"
              hash="bar"
            >
              The location hash should be <strong>#bar</strong>.
            </tab>
          </tabs>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { globe, zap, beaker, flame, heart } from 'octicons-vue'
import { Tabs, Tab, themeDark } from '@hiendv/vue-tabs'
export default {
  name: 'App',
  components: {
    Tabs,
    Tab
  },
  data () {
    return {
      show: 1
    }
  },
  computed: {
    themeDark () {
      return themeDark
    },
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
    heart () {
      return heart
    }
  },
  methods: {
    fourth () {
      console.log('fourth')
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
</style>
