const sendForm = ({ formId, someElem = [] }) => {
	const form = document.getElementById(formId)
	const small = document.querySelector('small')
	const statusBlock = document.createElement('div')
	const loadText = 'Загрузка...'
	const errorText = 'Ошибка..'
	const successText = 'Успешно! С вами свяжется наш специалист'

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
						input.value = ''             			 //убираем содержимое полей
					})
				})
				.catch(error => statusBlock.textContent = errorText )
		} else {
			alert('данные не введены')
			// statusBlock.textContent = errorText
			// form.append(statusBlock)
		}
	}

	try {
		if(!form) {
			throw new Error('Не правильная выбранная форма')
		}
		form.addEventListener('submit', (e) => {
			e.preventDefault()
			submitForm()
		})
	} catch (error) {
		console.log(error.message);
	}
}

export default sendForm