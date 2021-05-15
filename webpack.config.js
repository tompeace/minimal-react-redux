const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLwebplugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = () => {

  const mode = isDev ? 'development' : 'production'

  const webpackPlugins = [
    new HTMLwebplugin({ template: './src/index.html' }),
    isDev && new webpack.HotModuleReplacementPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
    !isDev && new MiniCssExtractPlugin(),
  ].filter(Boolean)
  
  const styleLoader = isDev 
    ? "style-loader"
    : MiniCssExtractPlugin.loader

  return {
    mode,
    target: 'web',
    entry: {
      main: './src/index.js',
    },
    output: {
      publicPath: '/',
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          include: path.join(__dirname, 'src'),
          use: 'babel-loader'
        },
        {
          test: /\.css$/i,
          use: [
            styleLoader,
            "css-loader",
            "postcss-loader",
          ]
        }
      ]
    },
    plugins: webpackPlugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    },
    devServer: {
      historyApiFallback: true,
      publicPath: '/',
      hot: true,
      port: 4040
    }
  }
}