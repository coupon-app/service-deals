const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client', 'src', 'index.jsx');
const DIST_DIR = path.resolve(__dirname, 'client', 'public');

module.exports = {
  entry: SRC_DIR,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
