const addDots = () => {
	const slideBlock = document.querySelector('.portfolio-content')
	const slides = document.querySelectorAll('.portfolio-item')

	const ul = document.createElement('ul')
	ul.classList.add('portfolio-dots')

	slides.forEach((slide, index) => {
		const li = document.createElement('li')
		li.classList.add('dot')
		if (index === 0) {
			li.classList.add('dot-active')
		}
		ul.append(li)

	})
	slideBlock.append(ul)
}
export default addDots