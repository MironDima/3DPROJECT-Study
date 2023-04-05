const scroll = () => {
	const menuItems = document.querySelectorAll('ul > li > a');
	const anchorBtnService = document.querySelectorAll('a[href = "#service-block"]');
	menuItems.forEach(menuItems => {
		menuItems.addEventListener('click', (e) => {
			e.preventDefault()
			const blockId = menuItems.getAttribute('href').substring(1);
			document.getElementById(blockId).scrollIntoView({
				behavior: 'smooth',
				block: "start",
			});
		});
	});

	anchorBtnService.forEach(btn => {
		btn.addEventListener('click', (e) => {
			e.preventDefault()
			const btnSecvice = btn.getAttribute('href').substring(1);
			document.getElementById(btnSecvice).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	});
}
export default scroll