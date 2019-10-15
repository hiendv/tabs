/* eslint-disable no-useless-escape */

export default {
  sourceSimple () {
    return `import { Tabs, Tab } from '@hiendv/react-tabs'
<Tabs>
  <Tab title='First'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore.
  </Tab>

  <Tab title='Second'>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
  </Tab>

  <Tab title='Third'>
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur.
  </Tab>
</Tabs>`
  },
  sourceFull () {
    return `import { Tabs, Tab } from '@hiendv/react-tabs'
import Octicon, { globe, zap, beaker, flame } from 'octicons-react'
export default class App extends Component {
  constructor () {
    super()
    this.state = {
      theme: themeDefault,
      themeText: 'Default'
    }
    this.switchTheme = this.switchTheme.bind(this)
    this.navRenderer = this.navRenderer.bind(this)
  }
  switchTheme () {
    const isDefault = this.state.themeText === 'Default'
    this.setState({
      theme: isDefault ? themeDark : themeDefault,
      themeText: isDefault ? 'Dark' : 'Default'
    })
  }
  render () {
    return (
      <Tabs theme={this.state.theme}>
        <Tab title='Foo' icon={globe}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore.
        </Tab>

        <Tab title='Bar' hash='bar' icon={zap}>
          Refresh and I&apos;m still here because the URL fragment is <strong>#bar</strong> now.
        </Tab>

        <Tab title='Qux' hash='qux' icon={beaker}>
          Hi, my name is <strong>#qux</strong>
        </Tab>

        <Tab title={this.state.themeText} icon={flame} onClick={this.switchTheme} />
      </Tabs>
    )
  }
}`
  },
  sourceCustomTheme () {
    return `import { Tabs, Tab } from '@hiendv/react-tabs'
export default class App extends Component {
  constructor () {
    super()
    this.state = {
      themeCustom: {
        tabs: 'custom-tabs',
        items: 'custom-items',
        item: 'custom-item',
        'item--active': 'custom-item-active',
        'item--end': 'custom-item-end',
        panel: 'custom-panel'
      }
    }
  }
  render () {
    return (
      <Tabs theme={this.state.themeCustom}>
        <Tab title='First'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna.
        </Tab>

        <Tab title='Second'>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </Tab>

        <Tab title='Third'>
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </Tab>
      </Tabs>
    )
  }
}`
  },
  sourcePanelBindings () {
    return `import { Tabs, Tab } from '@hiendv/react-tabs'
<Tabs>
  <Tab title='Blue' class='bg-blue text-white'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna.
  </Tab>

  <Tab title='Green' class='bg-green text-white'>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
  </Tab>

  <Tab title='Red' class='text-white' style={{ backgroundColor: '#ff3860' }}>
    Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur.
  </Tab>
</Tabs>`
  },
  sourceCustomNavigation () {
    return `import { Tabs, Tab } from '@hiendv/react-tabs'
import Octicon from 'octicons-react'
export default class App extends Component {
  constructor () {
    super()
  }
  navRenderer (items, self) {
    return (
      <nav className='my-items'>
        {
          items.map(({ className, end, hash, icon, title }, i) => (
            <a
              className={\`my-item\${self.isActive(i) ? ' active' : ''}\`}
              key={i}
              href={hash || '#'}
              onClick={(e) => self.handleClick(e, i)}>
              {icon.attrs() &&
                <Octicon icon={icon} />
              }
              {title}
            </a>
          ))
        }
      </nav>
    )
  }
  render () {
    return (
      <Tabs className='my-tabs' navRenderer={this.navRenderer}>
        <Tab title='First'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna.
        </Tab>

        <Tab title='Second'>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </Tab>

        <Tab title='Third'>
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </Tab>
      </Tabs>
    )
  }
}`
  }
}
