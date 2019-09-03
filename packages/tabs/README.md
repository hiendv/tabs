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
{setHash: ƒ, themeDark: {…}, themeDefault: {…}}
*/
```

### NPM
The package is mostly consumed by internal Vue & React components. Everything is re-exported.
```js
// Vue
import { themeDefault, themeDark, setHash } from '@hiendv/vue-tabs'
console.log(themeDefault, themeDark, setHash)
```

Please see **[vue-tabs-example](/packages/vue-tabs-example)** for a complete demonstration.

## Development & Testing
Please check the [Contributing Guidelines](https://github.com/hiendv/tabs/blob/master/CONTRIBUTING.md).

## Contribution
Issues and PRs are welcome !
