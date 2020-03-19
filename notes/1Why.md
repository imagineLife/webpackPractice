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
  