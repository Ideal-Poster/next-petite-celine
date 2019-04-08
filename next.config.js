

const {
  PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD
} = require('next/constants')

// Fixes npm packages that depend on `fs` module
const nextConfig = { webpack: config => ({ ...config, node: { fs: 'empty' } }) }

module.exports = () => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withCSS = require('@zeit/next-css')
    return withCSS(nextConfig)
  }
  /* eslint-disable */
  const withLess = require('@zeit/next-less')
  const lessToJS =  require('less-vars-to-js')
  const fs = require('fs')
  const path = require('path')

  // where your antd-custom.less file lives
  const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
  )

    // fix: prevents error when .less files are required by node
    if (typeof require !== 'undefined') {
      require.extensions['.less'] = file => {}
      const withCSS = require('@zeit/next-css')

    }

    return withLess({
      lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables, // make your antd custom effective
      }
    })
}
