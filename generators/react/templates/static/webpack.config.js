// @flow
require('dotenv').config({silent: true})

const {
  addPlugins,
  createConfig,
  defineConstants,
  env,
  entryPoint,
  setOutput,
  sourceMaps,
} = require('@webpack-blocks/webpack2')
const {resolveModules} = require('webpack-blocks-utils')
const babel = require('@webpack-blocks/babel6')
const BabiliPlugin = require('babili-webpack-plugin')
const devServer = require('@webpack-blocks/dev-server2')
const extractText = require('@webpack-blocks/extract-text2')
const html = require('webpack-blocks-html')
const webpack = require('webpack')
const path = require('path')
const sass = require('@webpack-blocks/sass')

module.exports = createConfig([
  // Entry points (order is important)
  entryPoint('babel-polyfill'),
  env('development', [entryPoint('react-hot-loader/patch')]),
  entryPoint('./src/Main.js'),

  // Allow centralized imports
  resolveModules([path.resolve('./src'), path.resolve('./node_modules')]),

  // Configure the babel loader
  babel(),

  // Configure sass
  sass({includePaths: 'node_modules'}),

  // Save output to 'public' with a short hash in the filename
  setOutput({
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[hash:8].js',
    publicPath: '/',
  }),

  // Replace references to environment variables
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV || 'production',
  }),

  // Generate an HTML template
  html({template: 'assets/index.html'}),

  // Development
  env('development', [
    addPlugins([new webpack.NamedModulesPlugin()]),
    devServer(),
    sourceMaps(),
  ]),

  // Production
  env('production', [
    extractText('[name].[contenthash:8].css'),
    addPlugins([
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new BabiliPlugin(),
    ]),
  ]),
])
