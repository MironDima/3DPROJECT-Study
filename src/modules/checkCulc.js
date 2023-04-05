const checkCulcalate = () => {
	const calcSquare = document.querySelector('.calc-square');
	const calcCount = document.querySelector('.calc-count');
	const calcDay = document.querySelector('.calc-day');

	const checkWords = (e) => {
		e.target.value = e.target.value.replace(/\D+/gi, "");
	}
	calcSquare.addEventListener('input', checkWords);
	calcCount.addEventListener('input', checkWords);
	calcDay.addEventListener('input', checkWords);
}

export default checkCulcalate