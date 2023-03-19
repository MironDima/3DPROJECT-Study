const menu = () => {
	const menuBtn = document.querySelector('.menu')
	const menu = document.querySelector('menu')
	const closeBtn = menu.querySelector('.close-btn')
	const menuItems = document.querySelectorAll('ul > li > a')
	const anchorBtnService = document.querySelectorAll('a[href = "#service-block"]')
	const main = document.querySelector('main')


	const handleMenu = () => {
		menu.classList.toggle('active-menu')
	}

	menu.addEventListener('click', (e) => {
		if (e.target.classList.contains('close-btn')) {
			handleMenu()
		}
		if (e.target.matches('ul>li>a')) {
			handleMenu()
		}
	})

	main.addEventListener('click', (e) => {
		if (e.target.closest('.menu')) {
			console.log(e.target);
			handleMenu()
		}
	})

}
export default menu
