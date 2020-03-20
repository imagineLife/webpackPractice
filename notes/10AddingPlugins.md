##Introducing a new folder
```build-utils```


## Adding Plugins
### HtmlWebpackPlugin
[HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)
from their docs...
```
The plugin will generate 
an HTML5 file for you 
that includes all your webpack bundles 
in the body using script tags.
```
It injects assets into html file. Now, the html file (_and related js modules_) can be run as static files in an http server!

- ```npm install html-webpack-plugin --save-dev```
- introduce into config file
```
const HtmlWPPlugin = require('html-webpack-plugin')
module.exports = ({mode}) => { //destructured mode var
	console.log(mode);
	return {
		output: {
			mode, //object literal
			filename: 'bundle.js'
		},
		plugins: [
			new HtmlWPPlugin()
		]
	}
}
```

### ProgressPlugin
[Docs](https://webpack.js.org/plugins/progress-plugin/)
```
The ProgressPlugin provides a way 
to customize how progress is reported 
during a compilation.
```

- add to config file
```
const HtmlWPPlugin = require('html-webpack-plugin')
const wp = require('webpack') //comes with wp
module.exports = ({mode}) => { //destructured mode var
	console.log(mode);
	return {
		output: {
			mode, //object literal
			filename: 'bundle.js'
		},
		plugins: [
			new HtmlWPPlugin(),
			wp.ProgressPlugin()
		]
	}
}
```