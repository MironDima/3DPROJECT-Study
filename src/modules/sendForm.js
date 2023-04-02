const sendForm = ({ formId, someElem = [] }) => {
	formId.forEach(forms => {
		const form = document.getElementById(forms)
		let prelouder = document.createElement('div')
		prelouder.classList.add('prelouder')
		prelouder.innerHTML = `<img src = "images/prelouder.gif" alt = "prelouder">`

		const successText = 'Успешно! С вами свяжется наш специалист';
		const errorText = 'Ошибка..';
		let statusBlock = document.createElement('div');
		statusBlock.classList.add('inform')

		const validate = (list) => {
			let sucsess = true;
			const inputName = list[0];
			const inputEmail = list[1];
			const inputPhone = list[2];

			list.forEach(input => {
				const changeName = /^[а-яА-ЯёЁ\s]+[а-яА-ЯёЁ]*$/gi
				const changeEmail = /(([\-\~\_\!\'\s\.\*\d\w]+)(@)([\w]+\.)+([\w]{2,4}))/gi
				const changePhone = /([\d\(\)\+]*[\d\-]{4,15})/gi

				if (changeName.test(inputName.value) && inputName.value !== '') {
					sucsess = true;
				} else {
					sucsess = false;
				}
				if (changeEmail.test(inputEmail.value) && inputEmail.value !== '') {
					sucsess = true;
				} else {
					sucsess = false;
				}
				if (changePhone.test(inputPhone.value) && inputPhone.value !== '') {
					sucsess = true;
				} else {
					sucsess = false;
				}
			})
			return sucsess
		}

		const sendData = (data) => {
			return fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					"Content-type": 'application/json'
				}
			}).then(response => response.json())
		}

		const submitForm = () => {
			const formElements = form.querySelectorAll('input');
			const formData = new FormData(form);
			const formBody = {}   																					//собираем обьект

			form.append(prelouder)
			setTimeout(() => {
				prelouder.classList.add('hide-prelouder')
			}, 1500)
			form.append(statusBlock);

			formData.forEach((val, key) => {
				formBody[key] = val;
			})

			someElem.forEach(elem => {
				const elemTotalCulc = document.getElementById(elem.id);
				if (elem.type === 'block') {
					formBody[elem.id] = elemTotalCulc.textContent;
				} else if (elem.type === 'input') {
					formBody[elem.id] = elemTotalCulc.value;
				}
			})

			if (!document.querySelector("#form2-message").value.trim()) {							//чтобы сообщение не уходило на отправку-костыль
				delete formBody.user_message;
			}

			if (validate(formElements)) {
				sendData(formBody)
					.then(data => {
						statusBlock.textContent = successText
						formElements.forEach(input => {
							input.value = ''             											 //убираем содержимое полей
						})
					})
					.catch(error => statusBlock.textContent = errorText);
			} else {
				alert('Данные не валидны!');
				statusBlock.textContent = errorText;
			}
		}

		try {
			if (!form) {
				throw new Error('Не правильная выбранная форма')
			}
			form.addEventListener('submit', (e) => {
				e.preventDefault();
				submitForm();
			})
		} catch (error) {
			console.log(error.message);
		}
	})
}
export default sendForm