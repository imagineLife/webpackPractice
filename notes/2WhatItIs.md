# Webpack
## A Module Bundler
- lets programmer write any module format (_mixed_)
- compiles them for **the browser!**
- supports static async bundling
  - ... can create static async bundles @ build-time
- rich ecosystem. the most performant tool to build a web-app

## History
in 2012, tobias had to write a thesis. 
He worked at Google, a C# developer.
He wanted to find a library to use, modules.webMake.
He wanted code-splitting.

then, pete hunt.
worked at instagram.
talked about bundling instagram to bundle the app.

then Jul 2014, Dan Abramov.
Stack overflow, hot module replacement in webpack.
This is the root of redux.

# The Config
The config is just another commonJS module.... module.exports  = {...configObjectHere!}

# The CLI
Everything in the config can be written in the cli