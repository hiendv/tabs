# @hiendv/react-tabs
Lightweight and flexible tabs component for the web :zap:

## Features
- [x] Tab definition using template & programmatically
- [x] Octicons support in tab items
- [x] Beautiful modulized themes included
- [x] Easily accessible navigation with URL
- [x] Easy tab positioning
- [x] *Ghost* tabs support

## Demo
See [https://hiendv.github.io/tabs](https://hiendv.github.io/tabs)

## Installation & Usage
### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/@hiendv/react-tabs@latest/dist/iife.js" crossorigin="anonymous"></script>
```
**Note: We recommend linking to a specific version number that you can update manually**
```js
const { Tab, Tabs, themeDefault, themeDark } = reacttabs
```

### NPM
```bash
npm install --save @hiendv/react-tabs
# yarn add @hiendv/react-tabs
```

```jsx
import React, { Component } from 'react'
import { Tabs, Tab } from '@hiendv/react-tabs'
export default class App extends Component {
  render () {
    return (
      <Tabs>
        <Tab title='First'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Tab>

        <Tab title='Second'>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Tab>

        <Tab title='Third'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </Tab>
      </Tabs>
    )
  }
}
```
Please see **[react-tabs-example](/packages/react-tabs-example)** for a complete demonstration.

## Documentation
### Tabs
| Property | Type | Required | Default | Description
|-------|-------|-------|-------|-------|
| theme | Object | No | themeDefault - *[@hiendv/tabs](https://github.com/hiendv/tabs/tree/master/packages/tabs)* | Modulized style
| show | Number | No | 0 | Initial active tab
---

| Event | Arguments | Description
|-------|-------|-------|
| onUpdate | (index) | Current active tab


### Tab
#### Props
| Property | Type | Required | Default | Description
|-------|-------|-------|-------|-------|
| title | String | No | 'Title' | Tab title
| icon | Object | No | Empty | Tab octicon - *[octicons-react](https://github.com/hiendv/octicons-modular/tree/master/packages/octicons-react)*
| hash | String | No | null | Unique hash fragment for easy bookmark and navigation
| end | Boolean | No | false | Push the tab and its following friends to the right
| ghost | Boolean | No | false | Mark tab as a pure button


## Development & Testing
Please check the [Contributing Guidelines](https://github.com/hiendv/tabs/blob/master/CONTRIBUTING.md).

## Contribution
Issues and PRs are welcome !
