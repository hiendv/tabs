import React from 'react'
import PropTypes from 'prop-types'

function Tab (props) {
  if (props.ghost) return <div />
  if (!props.children) return <div />
  return <div onClick={props.onClick}>{props.children}</div>
}

Tab.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  hash: PropTypes.string,
  end: PropTypes.bool,
  ghost: PropTypes.bool,
  onClick: PropTypes.func
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
  onClick () { }
}

export default Tab
