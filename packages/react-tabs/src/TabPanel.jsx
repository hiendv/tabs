import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function TabPanel (props) {
  return React.createElement(
    'div',
    {
      className: classNames(props.className, props.item.props.className),
      style: props.item.props.style
    },
    props.item.props.children
  )
}

TabPanel.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string
}

TabPanel.defaultProps = {
  item: {
    props: {}
  }
}

export default TabPanel
