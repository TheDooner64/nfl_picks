var config = require('./webpack.base.config.js')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

config.devtool = ''

config.output.publicPath = '/static/'

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
        __DEV_TOOLS__: JSON.stringify(false),
        __DEVELOPMENT__: JSON.stringify(false),
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new ExtractTextPlugin({filename: '[name]-[contenthash].css'})
)

config.module.rules.push(
    {
      test: /\.scss?$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          'sass-loader'
        ]
      })
    }
)


module.exports = config
