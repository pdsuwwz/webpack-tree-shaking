const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path');
const resolve = (dir = '') => {
  return path.join(process.cwd(), dir)
}


/**
 * @type { webpack.Configuration }
 */
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
    }
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './public/favicon.png',
      template: './public/index.html'
    })
  ]
};
