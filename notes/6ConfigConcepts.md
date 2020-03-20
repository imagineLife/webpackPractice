## Core Contepts
### Entry
- the first js file to kick-off the functionality
- tells webpack **WHAT** files to load for the browser, complimenting the **__output__** property

### Output
- where && how webpack names the file
- a PATH for it to go to
- a NAME for the thile to be called

### Loaders && Rules
- rules
  - how to treat files that match agains a 'loader', using rule-sets
    - if a file matches the regexp in ```test```, use a **loader**  
  - a rule, per-file, with a loader-to-rule match
  - include/exclue (ex. any files from node_modules file)

#### Chaining Loaders
- execute from right-to-left
- example...
```
{
	teset: /\.less$/,
	use: ['style','css','less']
}
```
  - a .less file
  - goes through the lesss loader && converts to a css file
  goes through the css loader,which converts the file to style-rules in an array in memory, ready for the style-loader
  - then goes to stylel-loader, converts it to a js module && appends the script tag to the browser
