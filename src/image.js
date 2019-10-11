//takes url
//returns element with src=url
const makeImage = (url, {height, width}) => {
	const img = document.createElement('img')
	img.src = url
	img.height = height
	img.width = width
	return img
}

export default makeImage;