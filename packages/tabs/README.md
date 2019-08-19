# @hiendv/tabs
Utilities & themes for @hiendv/vue-tabs & @hiendv/react-tabs

## Installation & Usage
### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/@hiendv/tabs@latest/dist/iife.js" crossorigin="anonymous"></script>
```
```js
console.log(tabs)
/*
{
  themeDark: {tabs: "dark-module_tabs__2D2d-", items: "dark-module_items__vLUYO", item: "dark-module_item__2t_72", item--active: "dark-module_item--active__2BwxE", panel: "dark-module_panel__3HSBq"},
  themeDefault: {tabs: "default-module_tabs__3f18F", items: "default-module_items__4cVRy", item: "default-module_item__2w-4Z", item--active: "default-module_item--active__3kx5I", panel: "default-module_panel__1onVq"}
}
*/
```

### NPM
The package is mostly consumed by internal Vue & React components. Everything is re-exported.
```js
// Vue
import { themeDefault, themeDark } from '@hiendv/vue-tabs'
console.log(themeDefault, themeDark)
```

Please see **[vue-tabs-example](/packages/vue-tabs-example)** for a complete demonstration.

## Development & Testing
Please check the [Contributing Guidelines](https://github.com/hiendv/tabs/blob/master/CONTRIBUTING.md).

## Contribution
Issues and PRs are welcome !
