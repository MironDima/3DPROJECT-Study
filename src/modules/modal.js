const modal = () => {
	const popupBtn = document.querySelectorAll('.popup-btn')
	const modal = document.querySelector('.popup')
	const modalWindow = modal.querySelector('.popup-content')
	const popupClose = modal.querySelector('.popup-close')
	const width = document.documentElement.clientWidth
	let timeOut
	let count = 0
	let scale = 0

	modalWindow.style.transform = `translateX(${count = -30}%)`
	modalWindow.style.transform = `scale(${scale = 0.1})`
	const showModal = () => {
		if (width >= 768) {
			timeOut = requestAnimationFrame(showModal)
			count++
			scale += 0.1
			if(scale < 63){
				modalWindow.style.transform = `scale(${scale = 1.5})`;
				modalWindow.style.transform =  `translate(-50%, -50%)`
				modalWindow.style.position ="absolute"
				modalWindow.style.top ="50%"
				modalWindow.style.left ="50%"
				console.log(scale);
			}	
			if (count <= -10) {
				modal.style.display = 'block';
				modalWindow.style.transform = `translate(${count * 2}%)`;
				modalWindow.style.opacity = '0.90';
			}
			
			else {
				cancelAnimationFrame(timeOut);
			}
		}
		else {
			modalWindow.style.transform = `translate(${count = -15}%,20%)`;
			modal.style.display = 'block';
			modalWindow.style.opacity = '0.88';
		}
	}

	const closeModal = () => {
		modal.style.display = 'none'
		count = -30
		cancelAnimationFrame(timeOut)
	}

	popupBtn.forEach(button => {
		button.addEventListener('click', showModal)
	})

	popupClose.addEventListener('click', closeModal)
}

export default modal