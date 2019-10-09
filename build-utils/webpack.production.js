//https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtract = require('mini-css-extract-plugin')

module.exports = () => ({
  output: {
  	// makes the filename scrambled
  	//... incld the src string in the index.html 
  	// .. 93298cf39b8093536b08.js
    // filename: "[chunkhash].js"
    filename: "bundle.js"
  },
  module: {
  	rules: [
  		{
  			test: /\.css$/,
  			/*
  				In Dev this is
  				use: ["style-loader", "css-loader"]
  				THIS puts the styles in a css file in the dist folder
  			*/
  			use: [MiniCssExtract.loader, "css-loader"]
  		}
  	]
  },
  plugins: [
  	new MiniCssExtract()
  ]
});
