# Why Webpack

## Origins of JS in the web
Only 2 ways to LOAD js in the browser...
- script tag w. src attr && refering a js file
- script tag with js IN html

### Issues with those 2 ways
- doesn't scale
- too many scripts
- each browser has limit of concurrent requests
- one script becomes too large
- scope
- file-size
- readability
- fragility
- monolith files

## SOLUTION?!
- IIFEs
  - Immediately Invoked Function Expression
  - a fn wrapped in parenthesis, followd by (), which CALLS the fn
  - HERE, the fn can TAKE values from outside it's scope apply to the fn
  - each FILE can be treated as an IIFE (revealing pattern)
- IIFEs allow concatenation
	- 'safely' combining files without concern of scop collision**
- TOOLS BEGAN popping up...
  - make
  - grunt
  - gulp
  - broccoli
  - brunch
  - stealjs

## ... More Problems came about :( 
- changing js file requires full re-build every-time
- some modules are massive, and requiring the whole module for a few functions (**lodash**) is rediculous
- IIFEs are kinda slow
	- JS engines eagerly parse the code
- Dynamic loading became complicated

# Birth of JS Modules
- js on the server
- ...how to load js with no dom?!....
... commonJS came about

## CommonJS
- allow ```requre``` keyword, importing js from 1 module into another module
- ... default un-named exports, ```module.exports = (f,s) => f/s```
- ... named exports, ```exports.add = (f,s) => f + s```
- this helps reduce scope complexity, as these exports/imports can be very segregated
- package.js became the place to get commonJS modules

## CommonJS PROBLEMS
- browsers don't support CommonJS
- no live bindings (??)

## CommonJS Solutions?!
- bundlers / linkers
- ...browserify(static)
- ...requirejs(loader)
- ...systemjs(loader)

##...Problems with these bundlers / linkers??!
- commonJS offers require, which gets abused
- ... no lazy loading support
- its too dynamic of a module

