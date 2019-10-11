// https://webpack.js.org/plugins/compression-webpack-plugin/

const compWP = require('compression-webpack-plugin');
module.exports = () => ({
	plugins: [new compWP()]
})