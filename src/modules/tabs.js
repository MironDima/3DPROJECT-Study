const tabs = () => {
	const tabContent = document.querySelectorAll('.service-tab');
	const tabs = document.querySelectorAll('.service-header-tab');
	const tabPanel = document.querySelector('.service-header');

	tabPanel.addEventListener('click', (e) => {
		if (e.target.closest('.service-header-tab')) {
			const newTabs = e.target.closest('.service-header-tab');			//чтобы наши табы переклюались вместе с спаном,мы сравниваем с нашей новой кнопкой

			tabs.forEach((tab, index) => {
				if (tab === newTabs) {
					tab.classList.add('active');
					tabContent[index].classList.remove('d-none');
				} else {
					tab.classList.remove('active');
					tabContent[index].classList.add('d-none');
				}
			})
		}
	})
}
export default tabs