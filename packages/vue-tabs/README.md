# @hiendv/vue-tabs
Lightweight and flexible tabs component for the web :zap:

## Features
[x] Tab definition using template & programmatically
[x] Octicons support in tab items
[x] Beautiful modulized themes included
[ ] Easily accessible navigation with URL
[ ] Panel placeholder loading

## Demo
See [https://hiendv.github.io/vue-meetup-vietnam-2019-talk/](https://hiendv.github.io/vue-meetup-vietnam-2019-talk/)

## Installation & Usage
### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/@hiendv/tabs@latest/dist/iife.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@hiendv/vue-tabs@latest/dist/iife.js" crossorigin="anonymous"></script>
```
**Note: We recommend linking to a specific version number that you can update manually**
```js
Vue.component('tabs', vuetabs.Tabs)
Vue.component('tab', vuetabs.Tab)
```

### NPM
```bash
npm install --save vue-tabs
# yarn add vue-tabs
```

```vue
<script>
import Vue from 'vue'
import { Tabs, Tab } from '@hiendv/vue-tabs'

new Vue({
  el: '#app',
  components: { Tabs, Tab }
)
</script>

// write your tabs
<template>
  <tabs>
    <tab title="First">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </tab>

    <tab title="Second">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </tab>

    <tab title="Third">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
    </tab>
  </tabs>
</template>
```
