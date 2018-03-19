var path = require('path')
var webpack = require('webpack')
var ManifestRevisionPlugin = require('manifest-revision-webpack-plugin')
var rootAssetPath = './client'

module.exports = {
  devtool: 'eval',

  entry: {
    app: [
      'tether',
      'bootstrap-loader',
      'font-awesome-webpack!./font-awesome.config.js',
      'babel-polyfill',
      rootAssetPath + '/index'
    ]
  },

  output: {
    path: path.resolve('./nfl_picks/static/'),
    filename: '[name]-[hash].js',
    chunkFilename: '[id]-[hash].js'
  },

  plugins: [
    new ManifestRevisionPlugin(path.join('nfl_picks', 'manifest.json'), {
      rootAssetPath: rootAssetPath,
      ignorePaths: []
    }),
    new webpack.ProvidePlugin({
      'window.Tether': 'tether'
    }),
    new webpack.IgnorePlugin(/react\/addons/),
    new webpack.IgnorePlugin(/react\/lib\/ReactContext/),
    new webpack.IgnorePlugin(/react\/lib\/ExecutionEnvironment/)
  ],

  resolve: {
    modules: [
      path.join(__dirname, 'client'),
      path.join(__dirname, 'node_modules'),
    ],
    alias: {
      'client': path.join(__dirname, 'client'),
      'react': path.join(__dirname, 'node_modules', 'react')
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['url-loader?limit=10000&mimetype=application/font-woff']
      },
      {
        test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['file-loader']
      }
    ]
  }

}
