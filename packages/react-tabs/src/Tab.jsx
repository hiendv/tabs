import React from 'react'
import PropTypes from 'prop-types'

function Tab (props) {
  return (null)
}

Tab.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  hash: PropTypes.string,
  end: PropTypes.bool,
  ghost: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node
}

Tab.defaultProps = {
  title: 'Title',
  icon: {
    attrs () {},
    path () {}
  },
  hash: null,
  end: false,
  ghost: false,
  onClick () { },
  children: undefined
}

export default Tab
