## Creating a Config
- webpack.config.js
```
module.exports = {}
```
- npm run webpack does it's normal thing

### Config / webpack output
- see main.js
- its an iife: 
  - where's the end? 
  - whats being passed into it?
- takes an array of iifes
  - the array of iifes is directly correlate to the module files
```
[0] ./src/index.js 252 bytes {0} [built]
[1] ./src/nav.js 28 bytes {0} [built]
[2] ./src/footer.js 69 bytes {0} [built]
[3] ./src/button.js 218 bytes {0} [built]
[4] ./src/button-styles.js 190 bytes {0} [built]
```

- main.js 
  - stores a module 'cache'
  - has a fn called webpack_require, takes moduleID param
    - checks if moduleID is in the cache