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
        <h3>Default themes</h3>
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
          <snippet :code="sourceDefault" style="max-height: 400px" />
        </div>
      </section>
      <section>
        <h3>Custom theme & navigation</h3>
        <div style="background-color: #fff; padding: 1rem">
          <tabs :show.sync="show" :theme="themeCustom">
            <template v-slot:nav="{ items }">
              <a
                v-for="(item, index) in items" :key="index"
                href="#" :class="{ 'custom-item': true, 'active': show === index }"
                @click.prevent="show = index"
              >{{ item.title }}</a>
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
          <snippet :code="sourceCustom" style="max-height: 400px" />
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
        panel: 'custom-panel'
      }
    }
  },
  computed: {
    isDefault () {
      return this.themeText === 'Default'
    },
    /* eslint-disable no-useless-escape */
    sourceDefault () {
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
      :title="themeText" :icon="flame"
      end ghost
      @click.prevent="switchTheme"
    />
  </tabs>
</template>
<script>
import { globe, zap, beaker, flame } from 'octicons-vue'
import { Tabs, Tab } from '@hiendv/vue-tabs'
export default {
  components: {
    Tabs,
    Tab,
  },
  data () {
    return {
      globe,
      zap,
      beaker,
      flame,
      theme: themeDefault,
      themeText: 'Default'
    }
  },
  switchTheme () {
    if (this.themeText === 'Dark') {
      this.themeText = 'Dark'
      this.theme = themeDark
      return
    }

    this.themeText = 'Default'
    this.theme = themeDefault
  }
}
<\/script>`
    },
    sourceCustom () {
      return `<template>
  <tabs :show.sync="show" :theme="themeCustom">
    <template v-slot:nav="{ items }">
      <a
        v-for="(item, index) in items" :key="index"
        href="#" @click.prevent="show = index"
        :class="{
          'custom-item': true,
          'active': show === index
        }"
      >{{ item.title }}</a>
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
    Tab,
  },
  data () {
    return {
      show: 1,
      themeCustom: {
        tabs: 'custom-tabs',
        items: 'custom-items',
        item: 'custom-item',
        panel: 'custom-panel'
      }
    }
  }
}
<\/script>
<style lang="scss">
.custom-item {
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

.custom-panel {
  margin-top: 2px;
  padding: 1rem;
  color: #253140;
  background-color: #f9fafe;
}
</style>`
    },
    /* eslint-enable no-useless-escape */
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

.custom-item {
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

.custom-panel {
  margin-top: 2px;
  padding: 1rem;
  color: #253140;
  background-color: #f9fafe;
}
</style>
