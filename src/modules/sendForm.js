const sendForm = ({ formId, someElem = [] }) => {
	formId.forEach(forms => {
		const form = document.getElementById(forms);
		const total = document.getElementById('total');
		const successText = 'Успешно! С вами свяжется наш специалист';
		const errorText = 'Ошибка..';
		let prelouder = document.createElement('div');

		prelouder.classList.add('prelouder');
		prelouder.innerHTML = `<img src = "images/prelouder.gif" alt = "prelouder">`
		let statusBlock = document.createElement('div');
		statusBlock.classList.add('inform');

		const isEmailValid = (emailValue) => {
			const emailRegexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
			return emailRegexp.test(emailValue)
		}

		const validate = (list) => {												//запомнить!!!проверка
			let sucsess = true;
			list.forEach(input => {
				if (input.name === "user_name") {
					if (input.value.length < 3) {
						sucsess = false
					}
				}
				else if (input.name === "user_email") {
					if (!isEmailValid(input.value)) {
						sucsess = false
					}
				}
				else if (input.name === "user_phone") {
					if (input.value.length < 9) {
						sucsess = false
					}
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
			const formBody = {}   																//собираем обьект
																
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

			if (!document.querySelector("#form2-message").value.trim()) {						//текс не отправляется	
				delete formBody.user_message;
			}

			if (total.textContent == "0") {														//total не выскакивает
				delete formBody.total
			}

			if (validate(formElements)) {
				sendData(formBody)
					.then(data => {
						statusBlock.textContent = successText;
						formElements.forEach(input => {
							input.value = ''
							setTimeout(() => {													//убирается оповещение
								statusBlock.textContent = ''
							}, 4000)           											 
						});
					})
					.catch(error => statusBlock.textContent = errorText);
			} else {
				statusBlock.textContent = errorText;
				alert('Данные не валидны!');
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