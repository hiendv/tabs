import React from 'react'
import PropTypes from 'prop-types'

function TabPanel (props) {
  if (!props.item) {
    return (null)
  }

  const className = props.item.props.class ? `${props.className} ${props.item.props.class}` : props.className

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
