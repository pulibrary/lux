"use strict"
require("./check-versions")()

process.env.NODE_ENV = "production"

const ora = require("ora")
const rm = require("rimraf")
const path = require("path")
const chalk = require("chalk")
const webpack = require("webpack")
const config = require("../config")
const webpackConfig = require("./webpack.static.conf")

const spinner = ora("Building LUX Design System Library...")
spinner.start()

rm(path.join(config.static.assetsRoot, config.static.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + "\n\n"
    )

    if (stats.hasErrors()) {
      console.log(chalk.red("  LUX static asset build failed with errors.\n"))
      process.exit(1)
    }

    console.log(chalk.cyan("  LUX static asset build complete.\n"))
    console.log(
      chalk.yellow(
        "  Tip: You can now use LUX in any HTML page.\n" +
          "  Locate the js and css files in the 'static/assets' directory. Add these to your HTML doc \n" +
          "  and wrap any LUX components in a element with class='lux'. \n"
      )
    )
  })
})
