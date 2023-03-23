import { animate } from "./helpers"

const modal = () => {
	const popupBtn = document.querySelectorAll('.popup-btn')
	const modal = document.querySelector('.popup')
	const modalWindow = modal.querySelector('.popup-content')

	const width = document.documentElement.clientWidth

	const showModal = () => {
		if (width >= 768) {
			animate({
				duration: 2000,
				timing(timeFraction) {
					return timeFraction;
				},
				draw(progress) {
					modalWindow.style.transform = `translateX(${progress =  0}%)`

					console.log(progress);
					if (progress <= -10) {
						modal.style.display = 'block';
						modalWindow.style.transform = `translate(${progress * 1}%)`;
					} else {
						cancelAnimationFrame(animate);
					}
				}
			});
		} else {
			modalWindow.style.transform = `translate(${progress = 0}%,20%)`;
			modal.style.display = 'block';
		}
	}
	popupBtn.forEach(button => {
		button.addEventListener('click', showModal)
	})
	modal.addEventListener('click', (e) => {
		console.log(e.target.closest('.popup-content'));  //получаем null так как выше родительсеого класса у нас нет совпадений,делаем проверку
		if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
			modal.style.display = 'none'
			
			cancelAnimationFrame(animate)
			console.log('мимо');
		}
	})


	// const showModal = () => {
	// 	if (width >= 768) {
	// 		timeOut = requestAnimationFrame(showModal)
	// 		count++
	// 		// scale += 0.1
	// 		if (scale < 63) {
	// 			// modalWindow.style.transform = `scale(${scale = 1.5})`;
	// 			modalWindow.style.transform = `translate(-50%, -50%)`
	// 			modalWindow.style.position = "absolute"
	// 			modalWindow.style.top = "50%"
	// 			modalWindow.style.left = "50%"
	// 			console.log(scale);
	// 		}
	// 		if (count <= -10) {
	// 			modal.style.display = 'block';
	// 			modalWindow.style.transform = `translate(${count * 2}%)`;
	// 			// modalWindow.style.opacity = '0.90';
	// 		}else {
	// 			cancelAnimationFrame(timeOut);
	// 		}
	// 	}else {
	// 		modalWindow.style.transform = `translate(${count = -15}%,20%)`;
	// 		modal.style.display = 'block';
	// 		// modalWindow.style.opacity = '0.88';
	// 	}
	// }

}
export default modal