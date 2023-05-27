const path = require('path');

module.exports = {
  module: {
    rules: [{
      test: /\.yaml$/,
      use: 'js-yaml-loader',
    }]
  }
};