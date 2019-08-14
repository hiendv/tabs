module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return
    }

    // eslint-loader has problems with caching when running in watch mode
    config.module.rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.cache = false
        return options
      })
  },
  publicPath: process.env.NODE_ENV === 'production' && process.env.GH_PAGES ? '/tabs' : ''
}
