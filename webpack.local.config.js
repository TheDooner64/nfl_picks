var config = require('./webpack.base.config.js')
var webpack = require('webpack')


config.entry.app.unshift(
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  'react-hot-loader/patch'
)

config.output.publicPath = 'http://localhost:3000/assets/bundles/'

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.DefinePlugin({
    __DEV_TOOLS__: JSON.stringify(true),
    __DEVELOPMENT__: JSON.stringify(true),
    'process.env': {
        NODE_ENV: JSON.stringify('development')
    }
  })
)

config.module.rules.push(
  {
    test: /\.scss?$/,
    use: [
      'style-loader',
      'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      'postcss-loader',
      'sass-loader',
    ]
  }
)


module.exports = config

