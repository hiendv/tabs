<template>
  <div id="app">
    <div class="container">
      <header>
        <h1><a href="https://github.com/hiendv/tabs/tree/master/packages/vue-tabs">@hiendv/vue-tabs</a></h1>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=hiendv&repo=tabs&type=star&count=true&size=large" frameborder="0"
          scrolling="0" width="160px"
          height="30px"
        />
      </header>
      <section>
        <h3>Minimal tabs</h3>
        <div style="background-color: #fff; padding: 1rem">
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
          <hr>
          <snippet :code="sourceSimple" style="max-height: 400px" />
        </div>
      </section>
      <section>
        <h3>Different themes, icon, hash, push-to-right & pure button</h3>
        <div :style="{ padding: '1rem', backgroundColor: isDefault ? '#fff' : '#313131' }">
          <tabs :theme="theme">
            <tab title="Foo" :icon="globe">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore.
            </tab>

            <tab
              title="Bar" hash="bar"
              :icon="zap"
            >
              Refresh and I'm still here because the URL fragment is
              <strong>#bar</strong> now.
            </tab>

            <tab
              title="Qux" hash="qux"
              :icon="beaker"
            >
              Hi, my name is <strong>#qux</strong>
            </tab>

            <tab
              :title="themeText" :icon="flame"
              end ghost
              @click.prevent="switchTheme"
            />
          </tabs>
          <hr>
          <snippet :code="sourceFull" style="max-height: 400px" />
        </div>
      </section>
      <section>
        <h3>Custom theme</h3>
        <div style="background-color: #fff; padding: 1rem">
          <tabs :show.sync="show" :theme="themeCustom">
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
          <hr>
          <snippet :code="sourceCustomTheme" style="max-height: 400px" />
        </div>
      </section>
      <section>
        <h3>Custom navigation</h3>
        <div style="background-color: #fff; padding: 1rem">
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
          <hr>
          <snippet :code="sourceCustomNavigation" style="max-height: 400px" />
        </div>
      </section>
      <section>
        <h3>API Documentation</h3>
        <p>See more here: <a href="https://github.com/hiendv/tabs/tree/master/packages/vue-tabs">vue-tabs</a></p>
      </section>
    </div>
  </div>
</template>

<script>
import { globe, zap, beaker, flame } from 'octicons-vue'
import { Tabs, Tab, themeDefault, themeDark } from '@hiendv/vue-tabs'
import Snippet from './Snippet.vue'
import sources from './sources'
export default {
  name: 'App',
  components: {
    Tabs,
    Tab,
    Snippet
  },
  data () {
    return {
      show: 1,
      theme: themeDefault,
      themeText: 'Default',
      themeCustom: {
        tabs: 'custom-tabs',
        items: 'custom-items',
        item: 'custom-item',
        'item--active': 'custom-item-active',
        'item--end': 'custom-item-end',
        panel: 'custom-panel'
      }
    }
  },
  computed: {
    ...sources,
    isDefault () {
      return this.themeText === 'Default'
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
    }
  },
  methods: {
    switchTheme () {
      if (this.isDefault) {
        this.themeText = 'Dark'
        this.theme = themeDark
        return
      }

      this.themeText = 'Default'
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

h1 {
  a {
    text-decoration: none;
    color: #444;
    &:hover {
      color: #000;
    }
  }
}

.container {
  margin: 0 auto;
  max-width: 600px;
}
</style>
<style lang="css">
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
</style>
