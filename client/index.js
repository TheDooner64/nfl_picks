/* global __DEVELOPMENT__, module, require */
if (__DEVELOPMENT__) {
  module.exports = require('./index-dev') // eslint-disable-line global-require
} else {
  module.exports = require('./index-prod') // eslint-disable-line global-require
}
