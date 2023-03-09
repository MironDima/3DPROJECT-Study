const dateTime = document.getElementById('date')
let date = new Date()

const formatDate = (data) => {
	let weekday = date.toLocaleString('ru-RU', { weekday: 'long' })
	let showDate = date.toLocaleTimeString('ru-RU', { hour12: true })
	let hours = date.getHours()

	const formateHours = (hours) => {
		if (hours < 6 && hours > 0) {
			return 'ночь';
		}
		else if (hours < 12 && hours > 6) {
			return 'утро';
		}
		else if (hours < 18 && hours > 12) {
			return 'день';
		}
		else {
			return 'вечер';
		}
	}
	formateHours(hours);

	const timeRemainig = function () {
		let dateNewYearStop = new Date('1 january 2024').getTime()
		let dateNewYearNow = new Date().getTime()
		let dateNewYearRemaining = (dateNewYearStop - dateNewYearNow) / 1000
		let newYearRemainig = Math.floor(dateNewYearRemaining / 60 / 60 / 24)
		return `До нового года осталось ${newYearRemainig} дней`
	}
	timeRemainig();

	return `<p>Добрый ${formateHours(hours)}</p>
	<p>Сегодня: ${weekday}</p>
	<p>Текущее время: ${showDate}</p>
	<p>${timeRemainig()}</p>`
}
formatDate(date);
dateTime.insertAdjacentHTML('beforeend', formatDate(date))