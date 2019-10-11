//takes url
//returns element with src=url
const makeImage = url => {
	const img = document.createElement('img')
	img.src = url
	img.height = '100'
	img.width = '100'
	return img
}

export default makeImage;