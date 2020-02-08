const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const DIST_DIR = path.resolve(__dirname, 'client', 'public');

module.exports = merge(common, {
  output: {
    filename: 'dev.bundle.js',
    path: DIST_DIR,
  },
  mode: 'development',
});
