const wpBundleAnalyzer = require('webpack-bundle-analyzer');
const baPlugin = wpBundleAnalyzer.BundleAnalyzerPlugin;

module.exports = () => ({
	plugins: [
		new baPlugin()
	]
})