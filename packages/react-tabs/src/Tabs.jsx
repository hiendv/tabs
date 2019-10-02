import React from 'react'
import PropTypes from 'prop-types'
import Octicon from 'octicons-react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
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
    this.slotProps = this.slotProps.bind(this)
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
  slotProps () {
    return this.props.children.map(c => c.props)
  }
  currentHash () {
    return (this.props.route ? this.props.route.hash : window.location.hash).substring(1)
  }
  isActive (index) {
    return this.state.active === index
  }
  setHash (index) {
    const hash = this.currentHash()
    const item = this.slotProps()[index]
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
    const index = this.slotProps().findIndex(el => {
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
    const item = this.slotProps()[index]
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
      <div className={`${this.props.className} ${theme.tabs}`}>
        {this.props.navRenderer &&
          this.props.navRenderer(this.slotProps(), this)
        }
        {!this.props.navRenderer &&
          <nav className={theme.items}>
            {
              this.slotProps().map(({ className, ...props }, i) => (
                <a
                  className={className || `${theme.item} ${this.isActive(i) ? theme['item--active'] : ''} ${props.end ? theme['item--end'] : ''}`}
                  key={i}
                  href={props.hash || '#'}
                  onClick={(e) => this.handleClick(e, i)}>
                  {props.icon.attrs() &&
                    <Octicon icon={props.icon} />
                  }
                  {props.title}
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
            <TabPanel key={this.state.active} className={`${theme.panel} slide-down`}>
              {this.slotProps().length && this.slotProps()[this.state.active].children}
            </TabPanel>
          </CSSTransition>
        </SwitchTransition>}
      </div>
    )
  }
}

Tabs.propTypes = {
  theme: PropTypes.object,
  show: PropTypes.number,
  children: PropTypes.arrayOf(Tab)
}

Tabs.defaultProps = {
  theme: themeDefault,
  show: 0,
  children: []
}
