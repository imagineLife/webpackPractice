## Env flags with webpack

### update package.json to include a new flag
- ```--env.mode production```
- ```"prod": "npm run webpack -- --env.mode production",```
- here, this **env.mode = production** will get passed to the webpack config

### update webpack config
- see the env passed to the config
```
module.exports = env => {
	console.log(env);
	return {
		output: {
			filename: 'bundle.js'
		}
	}
}
```