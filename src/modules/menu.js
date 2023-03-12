const menu = () => {
	const menuBtn = document.querySelector('.menu')
	const menu = document.querySelector('menu')
	const closeBtn = menu.querySelector('.close-btn')
	const menuItems = document.querySelectorAll('ul > li > a')
	const anchorBtnService = document.querySelectorAll('a[href = "#service-block"]')
	console.log(anchorBtnService);


	const handleMenu = () => {
		menu.classList.toggle('active-menu')
	}

	menuBtn.addEventListener('click', handleMenu)  					//меню кнопка
	closeBtn.addEventListener('click', handleMenu)   				// x закрытие

	menuItems.forEach(menuItems => {   								 //перебираем мееню			
		menuItems.addEventListener('click', handleMenu)
		menuItems.addEventListener('click', (event) => {
			event.preventDefault()
			const blockId = menuItems.getAttribute('href').substring(1)
			console.log(blockId);
			document.getElementById(blockId).scrollIntoView({
				behavior: 'smooth',
				block: "center",
				inline: 'center'
			})
		})
	})

	anchorBtnService.forEach(btn => {
		btn.addEventListener('click', (event) =>{
		event.preventDefault()
		const  btnSecvice = btn.getAttribute('href').substring(1)
		document.getElementById(btnSecvice).scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		})
		})
	})


}
export default menu
