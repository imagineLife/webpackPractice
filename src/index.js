import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import './button.css';
import imageStr from './icon.jpeg'
import makeImage from './image'

/*
	Using a preset
	npm run prod:ts
	- incorporates the typescript config 
	- Un-Comment the following import Foo.ts
	- runs typescript, looking for a ts.config file
*/
// import Foo from './foo.ts'

// shows base-64 string!
// console.log(imageStr)

const thisImage = makeImage(imageStr, {height: 100, width: 100})

const button = makeButton("Yay! A Button!");
// button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(thisImage)
document.body.appendChild(footer);

