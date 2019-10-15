import React from 'react'
import PropTypes from 'prop-types'
import Octicon from 'octicons-react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import { setHash, themeDefault } from '@hiendv/tabs'
import TabPanel from './TabPanel.jsx'
import Tab from './Tab.jsx'
import './assets/transitions/slide-down.scss'

export default class Tabs extends React.Component {
  constructor () {
    super()
    this.state = {
      active: 0
    }
    this.items = this.items.bind(this)
    this.syncActiveHash = this.syncActiveHash.bind(this)
    this.currentHash = this.currentHash.bind(this)
    this.isActive = this.isActive.bind(this)
    this.setHash = this.setHash.bind(this)
    this.setActive = this.setActive.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount () {
    this.setActive(this.props.show)
    this.syncActiveHash()
  }
  items () {
    return this.props.children.map(c => c.props)
  }
  activePanel () {
    return this.props.children.find((panel, i) => this.isActive(i))
  }
  currentHash () {
    return (this.props.route ? this.props.route.hash : window.location.hash).substring(1)
  }
  isActive (index) {
    return this.state.active === index
  }
  setHash (index) {
    const hash = this.currentHash()
    const item = this.items()[index]
    if (hash === item.hash) {
      return
    }

    if (this.props.route && !hash && !item.hash) {
      return
    }

    if (this.props.route) {
      this.props.router.replace({ hash: item.hash })
    }

    setHash(item.hash)
  }
  syncActiveHash () {
    const hash = this.currentHash()
    const index = this.items().findIndex(el => {
      return el.hash === hash
    })

    if (index < 0) return

    this.setActive(index)
  }
  setActive (index) {
    this.setHash(index)
    this.setState({
      active: index
    })
    if (this.props.onUpdate) {
      this.props.onUpdate(index)
    }
  }
  handleClick (e, index) {
    e.preventDefault()
    const item = this.items()[index]
    if (item.onClick) {
      item.onClick(e)
    }
    if (item.ghost) {
      return
    }

    return this.setActive(index)
  }
  render () {
    const theme = this.props.theme
    return (
      <div className={classNames(this.props.className, theme.tabs)}>
        {this.props.navRenderer && this.props.navRenderer(this.items(), this)}
        {!this.props.navRenderer &&
          <nav className={theme.items}>
            {
              this.items().map(({ className, ...item }, i) => (
                <a
                  className={classNames(theme.item, {
                    [theme['item--active']]: this.isActive(i),
                    [theme['item--end']]: item.end
                  })}
                  key={i}
                  href={item.hash || '#'}
                  onClick={(e) => this.handleClick(e, i)}>
                  {item.icon.attrs() ? (
                    <React.Fragment>
                      <Octicon icon={item.icon} className={theme.octicon}/> {item.title}
                    </React.Fragment>
                  ) : item.title
                  }
                </a>
              ))
            }
          </nav>
        }
        {<SwitchTransition mode='out-in'>
          <CSSTransition
            key={this.state.active}
            addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
            classNames='slide-down'
            timeout={150}>
            <TabPanel key={this.state.active} className={classNames(theme.panel, 'slide-down')} item={this.activePanel()}></TabPanel>
          </CSSTransition>
        </SwitchTransition>}
      </div>
    )
  }
}

Tabs.propTypes = {
  theme: PropTypes.object,
  show: PropTypes.number,
  children: PropTypes.arrayOf(Tab),
  onUpdate: PropTypes.func,
  className: PropTypes.string,
  navRenderer: PropTypes.func
}

Tabs.defaultProps = {
  theme: themeDefault,
  show: 0,
  children: [],
  onUpdate: () => {},
  className: '',
  navRenderer: null
}
