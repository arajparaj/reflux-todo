const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true', './src/app'
  ],
  devtool: "eval",
  debug: true,
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js','.jsx']
  },
  module: {
    loaders: [
      {
        test: /.*\.json$/,
        loader: 'json'
      }, {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file-loader"
      }, {
        test: /\.js?x$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [require.resolve('babel-preset-es2015'), require.resolve('babel-preset-react'), require.resolve('babel-preset-stage-0')]
        }
      }
    ]
  }
}
