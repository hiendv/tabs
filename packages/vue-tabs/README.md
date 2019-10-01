# @hiendv/vue-tabs
Lightweight and flexible tabs component for the web :zap:

## Features
- [x] Template-first approach
- [x] Beautiful modulized themes included
- [x] Individual panel styling
- [x] Easy positioning
- [x] Accessible navigation with hash fragment
- [x] Octicons support
- [x] *Ghost* tabs support

## Demo
See [https://hiendv.github.io/tabs](https://hiendv.github.io/tabs)

## Installation & Usage
### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/@hiendv/vue-tabs@latest/dist/iife.js" crossorigin="anonymous"></script>
```
**Note: We recommend linking to a specific version number that you can update manually**
```js
console.log(vuetabs.themeDefault, vuetabs.themeDark)

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
})
</script>

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
Please see **[vue-tabs-example](/packages/vue-tabs-example)** for a complete demonstration.

## Documentation
### Tabs
| Property | Type | Required | Default | Description
|-------|-------|-------|-------|-------|
| theme | Object | No | themeDefault - *[@hiendv/tabs](https://github.com/hiendv/tabs/tree/master/packages/tabs)* | Modulized style
| show | Number | No | 0 | Initial active tab

---

| Method | Arguments | Return | Description
|-------|-------|-------|-------|
| loadSlots | () | No | Manually reload the slots

---

| Event | Arguments | Description
|-------|-------|-------|
| update:show | (index) | Current active tab


### Tab
#### Props
| Property | Type | Required | Default | Description
|-------|-------|-------|-------|-------|
| title | String | No | 'Title' | Tab title
| icon | Object | No | Empty | Tab octicon - *[octicons-vue](https://github.com/hiendv/octicons-modular/tree/master/packages/octicons-vue)*
| hash | String | No | null | Unique hash fragment for easy boorkmark and navigation
| end | Boolean | No | false | Push the tab and its following friends to the right
| ghost | Boolean | No | false | Mark tab as a pure button


## Development & Testing
Please check the [Contributing Guidelines](https://github.com/hiendv/tabs/blob/master/CONTRIBUTING.md).

## Contribution
Issues and PRs are welcome !
