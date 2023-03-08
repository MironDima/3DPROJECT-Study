const oneFunc = () => {
	const timerDays = document.getElementById('timer-days')
	const timerHours = document.getElementById('timer-hours')
	const timerMinute = document.getElementById('timer-minutes')
	const timerSeconds = document.getElementById('timer-seconds')

	const getTimeRemaining = (deadLine) => {
		let dateStop = new Date(deadLine).getTime()  //время от наешго дедлайна
		let dateNow = new Date().getTime()	//время в текуешей даты
		let timeRemainig = (dateStop - dateNow) / 1000  // разница(оставшееся время)в секундах

		let days = Math.floor(timeRemainig / 60 / 60 / 24)
		let hours = Math.floor((timeRemainig / 60 / 60) % 24)
		let minutes = Math.floor((timeRemainig / 60) % 60)
		let seconds = Math.floor(timeRemainig % 60)   			//оркугляем

		return {												//функция во
			days,
			hours,
			minutes,
			seconds
		}
	}
	// setInterval(getTimeRemaining,1000,'12 march 2023');      //у сет интервала есть неоябз параметр,который переадеься в фнукцию

	const updateClock = () => {
		let getTime = getTimeRemaining('12 march 2023')
		console.log(getTime);
		// 	timerDays.textContent = days
		// 	timerHours.textContent = hours 
		// 	timerMinute.textContent = minutes
		// 	timerSeconds.textContent = seconds
	}
	updateClock()
}

export default oneFunc
