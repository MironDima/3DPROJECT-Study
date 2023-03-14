const checkForms = () => {

	const checkCulcalate = () => {

		const calcSquare = document.querySelector('.calc-square')
		const calcCount = document.querySelector('.calc-count')
		const calcDay = document.querySelector('.calc-day')

		const checkWords = (e) => {
			e.target.value = e.target.value.replace(/\D+/gi, "")
		}
		calcSquare.addEventListener('input', checkWords)
		calcCount.addEventListener('input', checkWords)
		calcDay.addEventListener('input', checkWords)

	}
	checkCulcalate()


	const checkFormOne = () => {

		const formOne = document.querySelectorAll('form')
		formOne.forEach(item => {
			item.addEventListener('submit', (event) => {
				event.preventDefault()
				const formName = item.querySelector('input[type="text"]')
				const formEmail = item.querySelector('input[type="email"]')
				const formPhone = item.querySelector('input[type="tel"]')
				const formText = item.querySelector('input.mess')
				console.log(formText);

				if (/^[а-яА-ЯёЁ\-\s]/gi.test(formName.value)) {
					alert(`Ваше имя ${formName.value}`)
					formName.style.border = '1px solid green'
					formName.value = ''
				} else {
					formName.style.border = '1px solid red'
					alert('Вводите имя буквами кирилицы')
					formName.value = ''
				}

				if (/^[\w\@\-\_\.\!\~\*\']/gi.test(formEmail.value)) {
					alert(`Ваш email ${formEmail.value}`)
					formEmail.style.border = '1px solid green'
					formEmail.value = ''
				} else {
					formEmail.style.border = '1px solid red'
					alert('Вводите email только латинскими буквами')
					formEmail.value = ''
				}

				if (/^[\d(\)]*[\d\-]{4,15}/gi.test(formPhone.value)) {
					alert(`Ваш номер ${formPhone.value}`)
					formPhone.style.border = '1px solid green'
					formPhone.value = ''
				} else {
					formPhone.style.border = '1px solid red'
					alert('Вводите ваш номер цифрами от 4 до 15')
					formPhone.value = ''
				}

				if (/^[а-яА-ЯёЁ\-\s]/gi.test(formText.value)) {
					formText.style.border = '1px solid green'
					console.log(formText.value);
				} else {
					formText.style.border = '1px solid red'
					alert('Вводите текст буквами кириллицы')
					
				}
			})
		})

	}
	checkFormOne()
}

export default checkForms




// requaried