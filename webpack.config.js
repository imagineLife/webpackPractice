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

const presetConfig = require('./build-utils/loadPresets')

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
      mode,     //mode from 'props'
      module: {
        rules: [
          {
            /*
              URL LOADER
              https://webpack.js.org/loaders/url-loader/
              url-loader works like file-loader, but can return a DataURL if the file is smaller than a byte limit.
              url-loader works with many file-types
              HERE, loads jpeg/jpg images
            */
            test: /\.jpe?g/,
            //-base-64 inline OR emit to output dir
            //references the node-mod
            //SHORTHAND -> 
            // use:["url-loader"],
            /*
              HERE, the url (this jpeg being loaded)
              is assigned a max-size it can be while being a base64 string
              in the root bundle file.  If the img is larger
               than the limit, the file will be hashed
                and stored in the dist folder separately from the root bundle
            */
            use:[{
              loader: "url-loader",
              options: {
                limit: 5000
              }
            }] 
          }
        ]
      },
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
    modeConfig(mode),

    // call a presets-merger, 
    // passing the 'env' mode && presets to it
    presetConfig({mode, presets})
  );
};
