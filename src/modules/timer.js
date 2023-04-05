const timer = (deadLine) => {
	const timerDays = document.getElementById('timer-days');
	const timerHours = document.getElementById('timer-hours');
	const timerMinute = document.getElementById('timer-minutes');
	const timerSeconds = document.getElementById('timer-seconds');
	let idSetInterval;

	const getTimeRemaining = () => {
		let dateStop = new Date(deadLine).getTime(); 																	//время от наешго дедлайна
		let dateNow = new Date().getTime();																				//время в текуешей даты
		let timeRemainig = (dateStop - dateNow) / 1000;																	// разница(оставшееся время)в секундах

		let days = Math.floor(timeRemainig / 60 / 60 / 24);
		let hours = Math.floor((timeRemainig / 60 / 60) % 24).toString().padStart(2, '0');
		let minutes = Math.floor((timeRemainig / 60) % 60).toString().padStart(2, '0');
		let seconds = Math.floor(timeRemainig % 60).toString().padStart(2, '0');   										//оркугляем
		return { timeRemainig, days, hours, minutes, seconds }															//функция возвращает обьект
	}

	const updateClock = () => {
		let getTime = getTimeRemaining();
		if (getTime.timeRemainig > 0) {
			timerDays.textContent = getTime.days;
			timerHours.textContent = getTime.hours;
			timerMinute.textContent = getTime.minutes;
			timerSeconds.textContent = getTime.seconds;
		}
		if (getTime.timeRemainig <= 0) {
			clearInterval(idSetInterval);
		}																													//у сет интервала есть неоябз параметр,который переадеься в фнукциb
	}
	updateClock()
	idSetInterval = setInterval(updateClock, 1000)
}
export default timer
