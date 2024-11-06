const webpack = require('webpack')

const packageName = require('../package.json').name

module.exports = function plugin() {
  return {
    configureWebpack(_, isServer) {
      return {
        mergeStrategy: { plugins: 'prepend' },
        output: {
          globalObject: !isServer ? 'window' : undefined,
          library: `${packageName}-[name]`,
          libraryTarget: 'umd',
        },
        plugins: [
          new webpack.NormalModuleReplacementPlugin(
            /@docusaurus\/core\/lib\/client\/clientEntry\.js$/,
            (resource) => {
              resource.request = './src/index.tsx'
            }
          ),
        ],
      }
    },
    name: 'micro-lc-plugin',
  }
}
