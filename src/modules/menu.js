const menu = () => {
	const menuBtn = document.querySelector('.menu')
	const menu = document.querySelector('menu')
	const closeBtn = menu.querySelector('.close-btn')
	const main = document.querySelector('main')

	const handleMenu = () => {
		menu.classList.toggle('active-menu')
	}

	document.addEventListener('click', (e) => {
		if (e.target.closest('.menu')) {
			
			handleMenu()
		}
		else if (!e.target.closest('menu')) {
			
			menu.classList.remove('active-menu')
		}
		else if (e.target.classList.contains('close-btn')) {
			e.preventDefault()
			
			handleMenu()
		}
		else if (e.target.matches('ul>li>a')) {
			
			handleMenu()
		}
	})

}
export default menu
