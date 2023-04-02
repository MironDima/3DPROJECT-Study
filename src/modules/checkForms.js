const checkForms = () => {
	const checkCulcalate = () => {
		const calcSquare = document.querySelector('.calc-square');
		const calcCount = document.querySelector('.calc-count');
		const calcDay = document.querySelector('.calc-day');

		const checkWords = (e) => {
			e.target.value = e.target.value.replace(/\D+/gi, "");
		}
		calcSquare.addEventListener('input', checkWords);
		calcCount.addEventListener('input', checkWords);
		calcDay.addEventListener('input', checkWords);

	}
	checkCulcalate();

	const checkForm = () => {
		const form = document.querySelectorAll('form');
		form.forEach(item => {
			const deleteSpace = (str) => {
				let regSpace = /^[\s\-]+|[\s\-]+$/;
				str = str.replace(regSpace, "");

				regSpace = /\-{2,}/g;
				str = str.replace(regSpace, "-");
				return str
			}
			const formName = item.querySelector('input[type="text"]');
			const formEmail = item.querySelector('input[type="email"]');
			const formPhone = item.querySelector('input[type="tel"]');
			const formText = item.querySelector('input.mess');

			item.addEventListener('submit', (event) => {
				event.preventDefault();

				if (/^[а-яА-ЯёЁ\s]+[а-яА-ЯёЁ]*$/gi.test(formName.value)) {
					formName.style.border = '1px solid green';

				} else {
					formName.style.border = '1px solid red';
					alert('Вводите имя буквами кирилицы');
				}

				if (/(([\-\~\_\!\'\s\.\*\d\w]+)(@)([\w]+\.)+([\w]{2,4}))/gi.test(formEmail.value) && formEmail.value !== '') {
					formEmail.style.border = '1px solid green';

				} else {
					formEmail.style.border = '1px solid red';
					alert('Вводите email только латинскими буквами');
				}

				if (/[\d\(\)]*[\d\-]{4,15}/gi.test(formPhone.value)) {
					formPhone.style.border = '1px solid green';

				} else {
					formPhone.style.border = '1px solid red';
					alert('Вводите ваш номер цифрами от 4 до 15');
				}

				if (formText) {
					if (/^[а-яА-ЯёЁ\s\d\,\.\;\:\...\!\?\-\(\)\"]+[а-яА-ЯёЁ\d\,\.\;\:\...\!\?\-\(\)\"]*$/gi.test(formText.value)) {
						formText.style.border = '1px solid green';
						console.log(formText.value);

					} else {
						formText.style.border = '1px solid red';
						alert('Вводите текст буквами кириллицы');
					}
				}
			})

			item.querySelectorAll('input').forEach((input) => {
				input.addEventListener('blur', (event) => {
					if (event.target.name === 'user_message') {
						const changeElem = /[^а-яА-ЯёЁ\s\d\,\.\;\:\...\!\?\-\(\)\"]*/gi;
						event.target.value = event.target.value.replace(changeElem, "");
						event.target.value = deleteSpace(event.target.value);
						event.target.value = event.target.value.replace(/(\s|^)[а-яёa-z]/g, (str) => {
							return str.toUpperCase();
						})
					}

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
						const changeElem = /[^\d\+(\)\-\+]*/gi;
						event.target.value = event.target.value.replace(changeElem, "");
						event.target.value = deleteSpace(event.target.value);
					}
				})
			})
		})
	}
	checkForm();
}
export default checkForms

