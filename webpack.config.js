const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const wpMerge = require("webpack-merge");

/*
  modeConfig
  returns a fn that takes an arg
  returns a require
  that returns a fn that is called

  looks for webpack.production OR webpack.development
  TAKEN from env.mode from the package.json
*/
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

/*
  Includes default mode && presets
*/
module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  /*
    Webpack Merge
    https://github.com/survivejs/webpack-merge
    like object.assign, accept works with the webpack config files

    can take a...
    - default
    - any EXTRAS

    NOW the prod build config can be separate from dev build config

    Use NPM RUN PROD or NPM RUN DEV
  */
  return wpMerge(
    {
      mode,                   //mode from 'props'
      output: {
        filename: "bundle.js"
      },
      plugins: [
        new HtmlWebpackPlugin(), 
        //shows webpack build process during build
        // as terminal output
        new webpack.ProgressPlugin()
      ]
    },

    //returns production OR development configuration
    modeConfig(mode)
  );
};
