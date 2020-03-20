## Webpack Dev Server
[Docs](https://webpack.js.org/configuration/dev-server/)

A nice node server that works well alongside webpack.
They made it. So it works nicely!

- install it
```npm install webpack-dev-server --dev```

- include in script in package.json
```wds: "webpack-dev-server"```

-update dev script to utilize wds
```dev: npm run wds -- --env.mode development```


Spins up a server.
In watch mode!

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
... now, updating files will 'hot-reload' the UI!