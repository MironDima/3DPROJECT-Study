import { animate } from "./helpers"

const modal = () => {
	const popupBtn = document.querySelectorAll('.popup-btn')
	const modal = document.querySelector('.popup')
	const modalWindow = modal.querySelector('.popup-content')

	const width = document.documentElement.clientWidth

	modalWindow.style.transform = `translateX(-100px)`
	popupBtn.forEach(button => {
		button.addEventListener('click', () => {

			if (width >= 768) {
				animate({
					duration: 500,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress) {
						console.log(progress);
						modal.style.display = 'block';
						modalWindow.style.transform = `translateX(${50 * progress}px)`
						modalWindow.style.opacity = progress
					}
				});
			} else {
				modalWindow.style.transform = `translate(-50px,50px)`
				modal.style.display = 'block';

			}
		})
	})
	modal.addEventListener('click', (e) => {
		console.log(e.target.closest('.popup-content'));  //получаем null так как выше родительсеого класса у нас нет совпадений,делаем проверку
		if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
			modal.style.display = 'none'
			modalWindow.style.transform = `translateX(-100px)`
			console.log('мимо');
		}
	})

}
export default modal