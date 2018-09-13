"use strict"
const utils = require("./utils")
const webpack = require("webpack")
const config = require("../config")
const merge = require("webpack-merge")
const baseWebpackConfig = require("./webpack.base.conf")
const MergeWebpackPlugin = require("webpack-merge-and-include-globally")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

const env = require("../config/prod.env")

baseWebpackConfig.entry = {
  system: ["./src/static.js"],
}

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.static.productionSourceMap,
      extract: true,
      usePostCSS: true,
    }),
  },
  entry: "./src/static.js",
  devtool: config.build.productionSourceMap ? config.static.devtool : false,
  output: {
    path: config.static.assetsRoot,
    filename: utils.staticSystemPath("lux.min.js"),
    library: "lux",
    libraryTarget: "var",
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      "process.env": env,
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
        },
      },
      sourceMap: config.static.productionSourceMap,
      parallel: true,
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.staticSystemPath("lux.min.css"),
      allChunks: false,
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: { safe: true },
    }),
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
})

if (config.static.productionGzip) {
  const CompressionWebpackPlugin = require("compression-webpack-plugin")

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: new RegExp("\\.(" + config.system.productionGzipExtensions.join("|") + ")$"),
      threshold: 10240,
      minRatio: 0.8,
    })
  )
}

if (config.static.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
