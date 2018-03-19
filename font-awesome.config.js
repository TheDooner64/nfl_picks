/* global module, process, require */
/* eslint no-magic-numbers: 0 */
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  styles: {
    animated: true,
    core: true,
    icons: true,
    mixins: true,
    path: true
  }
}

if (process.env.NODE_ENV === 'production') { // eslint-disable-line no-process-env
  // Snippet copied and modified from:
  // - https://github.com/gowravshekar/font-awesome-webpack/issues/33#issuecomment-283829998
  const encodeLoader = function encodeLoader (loader) {
    if (typeof loader === 'string') {
      return loader
    }

    if (typeof loader.options !== 'undefined') {
      const query = Object.
        keys(loader.options).
        map((param) => `${encodeURIComponent(param)}=${encodeURIComponent(loader.options[param])}`).
        join('&')

      return `${loader.loader}?${query}`
    }

    return loader.loader
  }

  const buildExtractStylesLoader = function buildExtractStylesLoader (loaders) {
    const extractTextLoader = encodeLoader(loaders[0])
    const fallbackLoader = encodeLoader(loaders[1])

    const restLoaders = loaders.
      slice(2).
      map((loader) => {
        if (typeof loader === 'string') {
          return loader
        }

        return encodeLoader(loader)
      })

    return [
      extractTextLoader,
      fallbackLoader,
      ...restLoaders
    ].join('!')
  }

  config.styleLoader = buildExtractStylesLoader(ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      'css-loader',
      'less-loader'
    ]
  }))
}

module.exports = config
