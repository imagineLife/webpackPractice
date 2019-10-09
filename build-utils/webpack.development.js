module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                	/*
                		style-loader
                		adds the css script tag in the browers
                		consumes the css-loader arr
                	*/ 
	                "style-loader", 
	                /*
	                	css-loader TRANSFORMS the css to a js obj,
	                	as seen through footerJS
	                	import css from "./footer.css";
	                	console.log('css')
	                	console.log(css)
	                	
	                	[
										  [
										    "./src/footer.css",
										    "footer {\n    height: 100px;\n    width: 100%;\n    background: yellowgreen;\n    border: 1px solid black;\n}",
										    ""
										  ]
										]
	                */
	                "css-loader"
                ]
            }
        ]
    }
});
