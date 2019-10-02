import React, { Component } from 'react'
import { Tabs, Tab, themeDefault, themeDark } from '@hiendv/react-tabs'
import Snippet from './Snippet.jsx'
import Sources from './sources'
import Octicon, { globe, zap, beaker, flame } from 'octicons-react'
const { sourceFull, sourceSimple, sourceCustomNavigation, sourceCustomTheme } = Sources

export default class App extends Component {
  constructor () {
    super()
    this.state = {
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
    this.switchTheme = this.switchTheme.bind(this)
    this.navRenderer = this.navRenderer.bind(this)
  }
  switchTheme (e) {
    const isDefault = this.state.themeText === 'Default'
    this.setState({
      theme: isDefault ? themeDark : themeDefault,
      themeText: isDefault ? 'Dark' : 'Default'
    })
  }
  navRenderer (items, self) {
    return (
      <nav className='my-items'>
        {
          items.map(({ className, end, hash, icon, title }, i) => (
            <a
              className={`my-item${self.isActive(i) ? ' active' : ''}`}
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
      <div id='app'>
        <div className='container'>
          <header>
            <h1><a href='https://github.com/hiendv/tabs/tree/master/packages/react-tabs'>@hiendv/react-tabs</a></h1>
            <iframe
              title='ghbtn'
              src='https://ghbtns.com/github-btn.html?user=hiendv&repo=tabs&type=star&count=true&size=large' frameBorder='0'
              scrolling='0' width='160px'
              height='30px'
            />
          </header>
          <section>
            <h3>Minimal tabs</h3>
            <div style={{ backgroundColor: '#fff', padding: '1rem' }}>
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
              </Tabs>
              <hr />
              <Snippet code={sourceSimple()} style={{ maxHeight: 400 }} />
            </div>
          </section>
          <section>
            <h3>Different themes, icon, hash, push-to-right & pure button</h3>
            <div style={{ padding: '1rem', backgroundColor: this.state.themeText === 'Default' ? '#fff' : '#313131' }}>
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

                <Tab title={this.state.themeText} icon={flame} onClick={this.switchTheme} end ghost />
              </Tabs>
              <hr />
              <Snippet code={sourceFull()} style={{ maxHeight: 400 }} />
            </div>
          </section>
          <section>
            <h3>Custom theme</h3>
            <div style={{ backgroundColor: '#fff', padding: '1rem' }}>
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
              <hr />
              <Snippet code={sourceCustomTheme()} style={{ maxHeight: 400 }} />
            </div>
          </section>
          <section>
            <h3>Custom navigation</h3>
            <div style={{ backgroundColor: '#fff', padding: '1rem' }}>
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
              <hr />
              <Snippet code={sourceCustomNavigation()} style={{ maxHeight: 400 }} />
            </div>
          </section>
          <section>
            <h3>API Documentation</h3>
            <p>See more here: <a href='https://github.com/hiendv/tabs/tree/master/packages/react-tabs'>react-tabs</a></p>
          </section>
        </div>
      </div>
    )
  }
}
