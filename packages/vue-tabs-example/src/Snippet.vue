<script>
import Prism from 'prismjs/components/prism-core.js'

require('prismjs/components/prism-markup.js')
require('prismjs/components/prism-clike.js')
require('prismjs/components/prism-javascript.js')
require('prismjs/components/prism-bash.js')
require('prismjs/components/prism-css.js')

export default {
  functional: true,
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: 'markup'
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  render (h, ctx) {
    const code = ctx.props.code || (ctx.children && ctx.children.length > 0 ? ctx.children[0].text : '')
    const language = ctx.props.language
    const prismLanguage = Prism.languages[language]
    const className = `language-${language}`

    if (process.env.NODE_ENV === 'development' && !prismLanguage) {
      throw new Error(`Prism component for language "${language}" was not found`)
    }

    const codeBlock = h('code', {
      class: [ctx.data.class, className],
      domProps: {
        innerHTML: Prism.highlight(code || '', prismLanguage)
      }
    })

    if (ctx.props.inline) {
      return codeBlock
    }

    return h('pre', { class: [ctx.data.class, className], style: ctx.data.staticStyle }, [codeBlock])
  }
}
</script>
<style lang="scss">
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

/* stylelint-disable selector-max-type, selector-no-qualifying-type */
code[class*="language-"],
pre[class*="language-"] {
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  hyphens: none;
  line-height: 1.5;
  color: #374961;
  text-align: left;
  text-shadow: 0 1px #eff2f6;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  tab-size: 2;
  white-space: pre;
  background: none;
}

@media print {
  code[class*="language-"],
  pre[class*="language-"] {
    text-shadow: none;
  }
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #f5f5f5;
}

pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  white-space: normal;
  border-radius: 0.3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #808080;
}

.token.punctuation {
  color: #999;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  background: hsla(0, 0%, 100%, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}

.token.function,
.token.class-name {
  color: #dd4a68;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}
/* stylelint-enable */
</style>
