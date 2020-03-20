# First JS Module
**making ```nav.js```**
```
export default = "nav"
```
- this exports the sttring

in a parallel index.js...
```
import nav from "./nav"
console.log(nav)
```
- imports the nav module

## Building the first module
```npm run build```
- takes the 2 modules (nav && index) & 'bundles' them together


## using 'watch' mode for hot-module reloading
- update the dev command to include the --watch flag
```dev: npm run webpack -- --mode development --watch```
- now, nav can be updated && re-run live!


## ading another module
```touch footer.js```
```
export const top = "top"
export const bottom = "bottom"
```

- import in index.js
```
import nav from "./nav"
import { top, bottom } from './footer'

console.log(nav)
console.log(top)
console.log(bottom)
```

## ading ANOTHER module
```touch button.js```
```
// take a name, && return an element
module.exports  = (btnName) => {
	return `Button: ${btnName}`
}
```

- import in index.js
```
import nav from "./nav"
import { top, bottom } from './footer'
import btn from './button'

console.log(nav)
console.log(top)
console.log(bottom)
console.log(btn('thisBtnString'))
```

## ading a named-export module
```touch button-styles.js```
```
const red = "color: red;"
const blue = "color: blue;"
const makeColorStyle = (clr) => `color: ${clr}`
exports.red = red
exports.blue = blue
exports.makeColorStyle = makeColorStyle 
```

- import in index.js
```
import nav from "./nav"
import { top, bottom } from './footer'
import btn from './button'
import { makeColorStyle } from './button-styles'

console.log(nav)
console.log(top)
console.log(bottom)
console.log(btn('thisBtnString'))
```

- note: leave exports @ bottom of files, best-practice
- import **only** what i need, webpack leverages this to remove code that isn't being 'used'