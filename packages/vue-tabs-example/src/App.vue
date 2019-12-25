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
        <h3>Icon, hash, push-to-right, pure & customized tab item</h3>
        <div style="background-color: #fff; padding: 1rem">
          <tabs>
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
              Hi, my name is <strong>#qux</strong>.
            </tab>

            <tab hash="fred">
              <a
                slot="nav"
                slot-scope="data" href="#"
                :class="data.class" @click.prevent="click($event, data.on.click)"
              ><octicon :icon="star" /> <span>Fred</span></a>

              <p>I'm kinda different because I extend the default click event 😂.</p>
              <p>See the <code>console</code> for easter eggs.</p>
            </tab>

            <tab
              title="Ghost" :icon="flame"
              end ghost
            />
          </tabs>
          <hr>
          <snippet :code="sourceFull" style="max-height: 400px" />
        </div>
      </section>
      <section>
        <h3>Batteries included: Themes</h3>
        <div :style="{ padding: '1rem', backgroundColor: isDark ? '#313131' : '#fff' }">
          <tabs :theme="themes[activeTheme].theme">
            <tab
              v-for="(item, i) in themes"
              :key="i"
              :title="item.name"
              @click.prevent="() => switchTheme(i)"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna.
            </tab>
          </tabs>
          <hr>
          <snippet :code="sourceThemes" style="max-height: 400px" />
        </div>
      </section>
      <section>
        <h3>Custom theme</h3>
        <div style="background-color: #fff; padding: 1rem">
          <tabs :theme="themeCustom">
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
        <h3>Custom panel class & style bindings</h3>
        <div style="background-color: #fff; padding: 1rem">
          <tabs>
            <tab title="Blue" class="bg-blue text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna.
            </tab>

            <tab title="Green" class="bg-green text-white">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </tab>

            <tab
              title="Red" class="text-white"
              style="background-color: #ff3860;"
            >
              Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur.
            </tab>
          </tabs>
          <hr>
          <snippet :code="sourcePanelBindings" style="max-height: 400px" />
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
import { globe, zap, beaker, flame, star, Octicon } from 'octicons-vue'
import { Tabs, Tab, themeDefault, themeDark, themeMaterial, themeMaterialDark, themeMetro, themeMetroDark } from '@hiendv/vue-tabs'
import Snippet from './Snippet.vue'
import sources from './sources'
export default {
  name: 'App',
  components: {
    Tabs,
    Tab,
    Octicon,
    Snippet
  },
  data () {
    return {
      show: 1,
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
      }, {
        name: 'Metro',
        theme: themeMetro,
        type: 'light'
      }, {
        name: 'Metro Dark',
        theme: themeMetroDark,
        type: 'dark'
      }],
      activeTheme: 0,
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
      return this.activeTheme === 0
    },
    isDark () {
      return this.themes[this.activeTheme].type === 'dark'
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
    star () {
      return star
    }
  },
  methods: {
    switchTheme (i) {
      this.activeTheme = i
    },
    click (e, next) {
      console.group('🤖: Beep boop')
      console.log('❗', 'You clicked the tab item')
      console.log('❗', 'I\'m sending the event away')
      next(e)
      console.log('❗', 'Your tab should be on by now')
      console.log('❗', 'GL & HF')
      console.groupEnd()
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

.bg-blue {
  background-color: #3273dc;
}

.bg-green {
  background-color: #23d160;
}

.text-white {
  color: #fff;
}
</style>
