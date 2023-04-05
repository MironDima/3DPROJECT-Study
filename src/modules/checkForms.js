const checkForms = () => {
		const form = document.querySelectorAll('form');
		form.forEach(item => {
			const deleteSpace = (str) => {
				let regSpace = /^[\s\-]+|[\s\-]+$/;
				str = str.replace(regSpace, "");
				regSpace = /\-{2,}/g;
				str = str.replace(regSpace, "-");
				return str
			}

			item.querySelectorAll('input').forEach((input) => {
				input.addEventListener('blur', (event) => {

					if (event.target.name === 'user_name') {
						const changeElem = /[^а-яА-ЯёЁ\s]/gi;
						event.target.value = event.target.value.replace(changeElem, "");
						event.target.value = deleteSpace(event.target.value);
						event.target.value = event.target.value.replace(/(\s|^)[а-яёa-z]/g, (str) => {
							return str.toUpperCase();
						})
					}

					if (event.target.type === 'email') {
						const changeElem = /[^\d\w\-\~\_\!\'\s\.\*\@]/gi;
						event.target.value = event.target.value.replace(changeElem, "");
						event.target.value = deleteSpace(event.target.value);
					}

					if (event.target.type === 'tel') {
						const changeElem = /[^0-9\+(\)\-]/gi;
						event.target.value = event.target.value.replace(changeElem, "");
						event.target.value = deleteSpace(event.target.value);
					}

					if (event.target.name === 'user_message') {
						const changeElem = /[^а-яА-ЯёЁ\s\d\,\.\;\:\...\!\?\-\(\)\"]/gi;
						event.target.value = event.target.value.replace(changeElem, "");
						event.target.value = deleteSpace(event.target.value);
						event.target.value = event.target.value.replace(/(\s|^)[а-яёa-z]/g, (str) => {
							return str.toUpperCase();
						})
					}
				})
			})
		})
	}

export default checkForms

