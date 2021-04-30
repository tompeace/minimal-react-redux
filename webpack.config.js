const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLwebplugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env) => {
  const mode = env.development ? "development" : "production"
  const isDev = mode === "development"

  const webpackPlugins = [
    new HTMLwebplugin({ template: './src/index.html' }),
    isDev && new ReactRefreshWebpackPlugin(),
    !isDev && new MiniCssExtractPlugin(),
  ].filter(Boolean)
  
  const styleLoader = isDev 
    ? "style-loader"
    : MiniCssExtractPlugin.loader

  return {
    mode,
    output: {
      publicPath: '/',
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          include: path.join(__dirname, 'src'),
          use: {
            loader: 'babel-loader',
          }
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