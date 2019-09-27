import Prism from 'prismjs/components/prism-core.js'
import PropTypes from 'prop-types'
import React from 'react'

require('prismjs/components/prism-markup.js')
require('prismjs/components/prism-clike.js')
require('prismjs/components/prism-javascript.js')
require('prismjs/components/prism-bash.js')
require('prismjs/components/prism-css.js')
require('prismjs/components/prism-jsx.js')

const snippet = props => {
  const code = props.code
  const language = props.language
  const prismLanguage = Prism.languages[language]
  const className = `language-${language}`

  if (process.env.NODE_ENV === 'development' && !prismLanguage) {
    throw new Error(`Prism component for language "${language}" was not found`)
  }

  const codeBlock = <code className={className} dangerouslySetInnerHTML={{ __html: Prism.highlight(code || '', prismLanguage) }} />

  if (props.inline) {
    return codeBlock
  }

  return (
    <pre className={className} style={props.style}>
      {codeBlock}
    </pre>
  )
}

snippet.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string,
  inline: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
}

snippet.defaultProps = {
  code: '',
  language: 'jsx',
  inline: false,
  className: '',
  style: {}
}

export default snippet
