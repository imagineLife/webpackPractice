## Environment-Based config files
use a new fn called ```modeConfig``` @ the top of the config file

``` 
...
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
module.expor...
```
here, the build-utils webpack.config file is DYNAMIC based on the mode var from the command line.
- mode development will use ```build-utils/webpack.development.js```
- mode production will use ```build-utils/webpack.production.js```

### use this modeConfig @ end of webpack file
```
...(_webpack config_)
return {
  mode,
  output: {
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
},
modeConfig(mode)

```

### update the first line of the webpack config module export
```
module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
```
- mode && presets have defaults, 
  - production mode 
  - no presets

#### Using WebpackMerge to combine webpack files
[Docs](https://github.com/survivejs/webpack-merge)

(_from their docs_)
```
...webpack-merge provides a merge function 
that concatenates arrays and merges objects
creating a new object. If functions are encountered, 
it will execute them, run the results through the 
algorithm, and then wrap the returned values within a function again.
```

- install the package
``` npm install webpack-merge``` 
- import the package in webpack config
``` const webpackMerge = require("webpack-merge")```
- wrap config in this fn
```
module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      output: {
        filename: "bundle.js"
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    modeConfig(mode, presets)
  );
};
```
...now the config is **COMPOSED!!**
note, the modeConfig now is set to take ```mode, presets```