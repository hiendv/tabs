# @hiendv/tabs
Utilities & themes for Tabs components

## Installation & Usage
### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/@hiendv/tabs@latest/dist/iife.js" crossorigin="anonymous"></script>
```
```js
console.log(tabs)
/*
{
  styleDark: {tabs: "dark-module_tabs__2D2d-", items: "dark-module_items__vLUYO", item: "dark-module_item__2t_72", item--active: "dark-module_item--active__2BwxE", panel: "dark-module_panel__3HSBq"},
  styleDefault: {tabs: "default-module_tabs__3f18F", items: "default-module_items__4cVRy", item: "default-module_item__2w-4Z", item--active: "default-module_item--active__3kx5I", panel: "default-module_panel__1onVq"}
}
*/
```

### NPM
The package is mostly consumed by internal Vue & React components. Everything is re-exported.
```js
// Vue
import { styleDefault, styleDark } from '@hiendv/vue-tabs'
console.log(styleDefault, styleDark)
```
