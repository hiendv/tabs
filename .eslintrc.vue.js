module.exports = {
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': [2, {
      'singleline': 2,
      'multiline': 2
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
