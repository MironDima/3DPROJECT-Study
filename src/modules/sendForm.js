const sendForm = ({ formId, someElem = [] }) => {
	formId.forEach(forms => {
		const form = document.getElementById(forms)
		let statusBlock = document.createElement('div');

	
		const loadText = 'Загрузка...'
		const successText = 'Успешно! С вами свяжется наш специалист'
		const errorText = 'Ошибка..'



		const validate = (list) => {
			let sucsess = true
			// list.forEach(input => {
			// 	if (input.classList.contains('sucsess')) {
			// 		sucsess = false
			// 	}
			// })
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
			const formElements = form.querySelectorAll('input')
			const formData = new FormData(form)
			const formBody = {}   								//собираем обьект


			statusBlock.textContent = loadText
			form.append(statusBlock)

			formData.forEach((val, key) => {
				formBody[key] = val
			})

			someElem.forEach(elem => {
				const elemTotalCulc = document.getElementById(elem.id)
				if (elem.type === 'block') {
					formBody[elem.id] = elemTotalCulc.textContent
				} else if (elem.type === 'input') {
					formBody[elem.id] = elemTotalCulc.value
				}
			})

			if (validate(formElements)) {
				sendData(formBody)
					.then(data => {
						statusBlock.textContent = successText
						formElements.forEach(input => {
							input.value = ''             											 //убираем содержимое полей
						})
					})
					.catch(error => statusBlock.textContent = errorText)
			} else {
				alert('Данные не введены')
			}
		}

		try {
			if (!form) {
				throw new Error('Не правильная выбранная форма')
			}
			form.addEventListener('submit', (e) => {
				e.preventDefault()
				submitForm()
			})
		} catch (error) {
			console.log(error.message);
		}
	})
}
export default sendForm