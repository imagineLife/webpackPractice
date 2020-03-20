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
- ... this will output ```{mode: 'production'}``` in the console. the env is an object

- USE the env in the webpack config...
```
module.exports = env => {
	console.log(env);
	return {
		output: {
			mode: env.mode,
			filename: 'bundle.js'
		}
	}
}
```
**NOTE** the command in the cli can be **env production**. Sean Larkin recommends using env as an object, though

- can add destructuring to 'simplify' the syntax in the config...
```
module.exports = ({mode}) => { //destructured mode var
	console.log(mode);
	return {
		output: {
			mode, //object literal
			filename: 'bundle.js'
		}
	}
}
```