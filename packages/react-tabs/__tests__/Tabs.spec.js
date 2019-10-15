import { setHash } from '@hiendv/tabs'
import { HashRouter as Router, Link } from 'react-router-dom'
import { act, Simulate } from 'react-dom/test-utils'
import React from 'react'
import ReactDOM from 'react-dom'
import { config } from 'react-transition-group'
import { Tabs, Tab } from '../src/main.js'

config.disabled = true
let container

beforeAll(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterAll(() => {
  document.body.removeChild(container)
  container = null
})

describe('Tabs', () => {
  it('renders', () => {
    act(() => {
      ReactDOM.render(<Tabs>
        <Tab title='First'>1</Tab>
        <Tab title='Second'>2</Tab>
      </Tabs>, container)
    })

    expect(container.innerHTML).toMatchSnapshot()

    const node = container.querySelectorAll('.item')[1]
    Simulate.click(node)
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('renders without contents', () => {
    act(() => {
      ReactDOM.render(<Tabs />, container)
    })
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('renders with custom theme', () => {
    act(() => {
      ReactDOM.render(<Tabs theme={{
        tabs: 'one',
        items: 'two',
        item: 'three',
        'item--active': 'three--active',
        panel: 'four'
      }}>
        <Tab title='First'>1</Tab>
        <Tab title='Second'>2</Tab>
      </Tabs>, container)
    })

    expect(container.innerHTML).toMatchSnapshot()
  })

  it('renders with panel custom bindings', () => {
    act(() => {
      ReactDOM.render(<Tabs show={1}>
        <Tab title='Foo' style={{ backgroundColor: '#f5f5f5' }} className="foobar"><div>One Content</div></Tab>
        <Tab title='Bar'><div>Two Content</div></Tab>
      </Tabs>, container)
    })

    expect(container.innerHTML).toMatchSnapshot()
    Simulate.click(container.querySelectorAll('a')[0])
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('renders with custom navigation', () => {
    act(() => {
      ReactDOM.render(<Tabs show={1} navRenderer={function (items, self) {
        const theme = self.props.theme
        return (
          <nav className={theme.items}>
            {
              items.map(({ className, end, hash, icon, title }, i) => (
                <a
                  className={`${theme.item} ${self.isActive(i) ? theme['item--active'] : ''} ${end ? theme['item--end'] : ''}`}
                  key={i}
                  href={hash || '#'}
                  onClick={(e) => self.handleClick(e, i)}>
                  {title}
                </a>
              ))
            }
          </nav>
        )
      }}>
        <Tab title='First'>1</Tab>
        <Tab title='Second'>2</Tab>
      </Tabs>, container)
    })

    expect(container.innerHTML).toMatchSnapshot()
    Simulate.click(container.querySelectorAll('a')[0])
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('renders with hashes', () => {
    setHash('two')

    act(() => {
      ReactDOM.render(<Tabs>
        <Tab title='First' hash='one'>1</Tab>
        <Tab title='Second' hash='two'>2</Tab>
      </Tabs>, container)
    })

    expect(container.innerHTML).toMatchSnapshot()
    Simulate.click(container.querySelectorAll('a')[0])
    expect(window.location.hash).toEqual('#one')
  })

  it('renders with hashes from react-router', () => {
    setHash('')
    act(() => {
      ReactDOM.render(<Router>
        <Tabs show={2} navRenderer={function (items, self) {
          const theme = self.props.theme
          return (
            <nav className={theme.items}>
              {
                items.map(({ className, end, hash, icon, title }, i) => (
                  <Link
                    className={`${theme.item} ${self.isActive(i) ? theme['item--active'] : ''} ${end ? theme['item--end'] : ''}`}
                    key={i}
                    to={hash || '#'}
                    onClick={(e) => self.handleClick(e, i)}>
                    {title}
                  </Link>
                ))
              }
            </nav>
          )
        }}>
          <Tab title='One' hash='one'>1</Tab>
          <Tab title='Two' hash='two'>2</Tab>
          <Tab title='Three'>3</Tab>
          <Tab title='Four'>4</Tab>
        </Tabs>
      </Router>, container)
    })

    expect(window.location.toString()).toEqual('http://localhost/')
    expect(container.innerHTML).toMatchSnapshot()

    Simulate.click(container.querySelectorAll('a')[0])
    expect(window.location.toString()).toEqual('http://localhost/#one')

    Simulate.click(container.querySelectorAll('a')[1])
    expect(window.location.toString()).toEqual('http://localhost/#two')

    Simulate.click(container.querySelectorAll('a')[2])
    expect(window.location.toString()).toEqual('http://localhost/')

    Simulate.click(container.querySelectorAll('a')[3])
    expect(window.location.toString()).toEqual('http://localhost/')
  })

  it('renders <tab> without contents', () => {
    act(() => {
      ReactDOM.render(<Tabs>
        <Tab title='First' />
        <Tab title='Second'>2</Tab>
      </Tabs>, container)
    })

    expect(container.innerHTML).toMatchSnapshot()

    Simulate.click(container.querySelectorAll('.item')[1])
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('renders ghost <tab>', () => {
    act(() => {
      ReactDOM.render(<Tabs>
        <Tab title='First'>1</Tab>
        <Tab title='Second'>2</Tab>
        <Tab title='Ghost' ghost>Ghost</Tab>
      </Tabs>, container)
    })

    expect(container.innerHTML).toMatchSnapshot()
    Simulate.click(container.querySelectorAll('.item')[2])
    expect(container.innerHTML).toMatchSnapshot()
  })

  it('renders end <tab>', () => {
    act(() => {
      ReactDOM.render(<Tabs>
        <Tab title='First'>1</Tab>
        <Tab title='End' end>End</Tab>
      </Tabs>, container)
    })

    expect(container.innerHTML).toMatchSnapshot()
    Simulate.click(container.querySelectorAll('.item')[1])
    expect(container.innerHTML).toMatchSnapshot()
  })
})
