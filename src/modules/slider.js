const slider = (classSlideBlock, classSlides) => {
	const slideBlock = document.querySelector(`.${classSlideBlock}`)
	const slides = document.querySelectorAll(`.${classSlides}`)

	if (slideBlock && slides.length > 0) {
		const dots = document.querySelectorAll('.dot')
		let timeInteval = 2000
		let currentSlide = 0
		let intarval

		const prevSlide = (elemsArr, index, slideClassActive = 'portfolio-item-active', dotclassActive = 'dot-active') => {
			elemsArr[index].classList.remove(slideClassActive)
			elemsArr[index].classList.remove(dotclassActive) 									//удаляем у действующего слайда класс
		}

		const nextSlide = (elemsArr, index, slideClassActive = 'portfolio-item-active', dotclassActive = 'dot-active') => {
			elemsArr[index].classList.add(slideClassActive)
			elemsArr[index].classList.add(dotclassActive)  						 				//добавляем новому слайду класс
		}

		const autoSlide = () => {
			prevSlide(slides, currentSlide, 'portfolio-item-active')
			prevSlide(dots, currentSlide, 'dot-active')
			currentSlide++
			if (currentSlide >= slides.length) {    							 				//  делаем проверку что обновлялся слайдер
				currentSlide = 0
			}
			nextSlide(slides, currentSlide, 'portfolio-item-active')
			nextSlide(dots, currentSlide, 'dot-active')
		}

		const startSlide = (timer = 1500) => {
			intarval = setInterval(autoSlide, timer)
		}

		const stopSlide = () => {
			clearInterval(intarval)
		}

		slideBlock.addEventListener('click', (e) => {												//управление
			e.preventDefault()	

			if (!e.target.matches('.dot, .portfolio-btn')) {
				return
			}

			console.log();
			prevSlide(slides, currentSlide, 'portfolio-item-active')
			prevSlide(dots, currentSlide, 'dot-active')

			if (e.target.matches('#arrow-right')) {
				currentSlide++
			} else if (e.target.matches('#arrow-left')) {
				currentSlide--
			} else if (e.target.classList.contains('dot')) {
				dots.forEach((dot, index) => {
					if (e.target === dot) {
						currentSlide = index
					}
				})
			}

			if (currentSlide >= slides.length) {    									//чтобы слайдер обновлялся			 
				currentSlide = 0
			}
			if (currentSlide < 0) {																   						//чтобы слайдер обновлялся при нажатии назад		
				currentSlide = slides.length - 1
			}

			nextSlide(slides, currentSlide, 'portfolio-item-active')
			nextSlide(dots, currentSlide, 'dot-active')
		})

		slideBlock.addEventListener('mouseenter', (e) => {
			if (e.target.matches('.dot, .portfolio-btn')) {
				stopSlide()
			}

		}, true)
		slideBlock.addEventListener('mouseleave', (e) => {
			if (e.target.matches('.dot, .portfolio-btn')) {
				startSlide(timeInteval)
			}

		}, true)

		startSlide(timeInteval)
	} else {
		return
	}



}
export default slider