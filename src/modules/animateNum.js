const animateNum = (numberTotalPrice, spanElement) => {
	let time = 1 //ms  								 	//время выполнения прокрутки
	let step = 1;										//шаг прокрутки
	let interval
	let n

	const outSpan = (numTotalPrice, spanElem) => {								//number - число до которого будет идти прокуртка
		n = 0;
		console.dir(spanElem);
		let timeInterval = Math.round(time / (numTotalPrice / step))

		interval = setInterval(() => {
			n = n + step
			console.log(`переданное число ${n}`);
			console.log(`переданное шаги ${step}`);
			console.log(`переданное num ${numTotalPrice}`);

			if (n === numTotalPrice) {
				clearInterval(interval)
			}
			spanElem.textContent = n
		}, timeInterval)
	}
	outSpan(numberTotalPrice, spanElement)
}
export default animateNum