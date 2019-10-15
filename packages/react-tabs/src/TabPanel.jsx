import React from 'react'
import PropTypes from 'prop-types'

function TabPanel (props) {
  const className = props.item.props.className ? `${props.className} ${props.item.props.className}` : props.className

  return React.createElement(
    'div',
    {
      className,
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
