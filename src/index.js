import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import './button.css';
import imageStr from './icon.jpeg'
import makeImage from './image'

// shows base-64 string!
console.log('image')

const thisImage = makeImage(imageStr, {height: 100, width: 100})

const button = makeButton("Yay! A Button!");
// button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(thisImage)
document.body.appendChild(footer);

