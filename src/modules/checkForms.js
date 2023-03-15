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
					formName.value = ''
				} else {
					alert('Вводите имя буквами кирилицы')
					formName.value = ''
				}

				if (/(([\-\~\_\!\'\s\.\*\d\w]+)(@)([\w]+\.)+([\w]{2,4}))/gi.test(formEmail.value)) {
					alert(`Ваш email ${formEmail.value}`)
					console.log(formEmail.value);
					formEmail.value = ''
				} else {
					alert('Вводите email только латинскими буквами')
					console.log(formEmail.value);
					formEmail.value = ''
				}

				if (/^[\d(\)]*[\d\-]{4,15}/gi.test(formPhone.value)) {
					alert(`Ваш номер ${formPhone.value}`)
					formPhone.value = ''
				} else {
					alert('Вводите ваш номер цифрами от 4 до 15')
					formPhone.value = ''
				}
				
				if (/^[а-яА-ЯёЁ\-\s]/gi.test(formText.value)) {
					console.log(formText.value);
				} else {
					alert('Вводите текст буквами кириллицы')					
				}
			})
		})

	}
	checkFormOne()
}
export default checkForms

