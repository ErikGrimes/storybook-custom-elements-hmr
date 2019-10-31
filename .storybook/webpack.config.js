const path = require('path');

module.exports = {
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        enforce: 'pre'
      }
    ]
  }
};
