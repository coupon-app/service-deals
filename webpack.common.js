const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client', 'src', 'index.jsx');

module.exports = {
  entry: SRC_DIR,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
