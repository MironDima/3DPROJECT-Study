const menu = () => {
	const menuBtn = document.querySelector('.menu')
	console.log(menuBtn);
	const menu = document.querySelector('menu')
	console.log(menu);
	const closeBtn = menu.querySelector('.close-btn')
	console.log(closeBtn);
	const menuItems = document.querySelectorAll('ul > li > a')
	console.log(menuItems);

	const handleMenu = () => {
		menu.classList.toggle('active-menu')
	}

	menuBtn.addEventListener('click', handleMenu)  					//меню кнопка
	closeBtn.addEventListener('click', handleMenu)   				// x закрытие

	menuItems.forEach(menuItems => {   								 //перебираем мееню			
		menuItems.addEventListener('click', handleMenu)
	})
}
export default menu
