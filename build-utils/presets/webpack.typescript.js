/*
	a one-off type-script config
	RUN USING
	npm run prod:ts (see package.json)
*/
module.exports = () => ({
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader'
			}
		]
	}
})