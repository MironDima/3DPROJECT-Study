import animateNum from './animateNum'
const culc = (price = 100) => {
	const calcBlock = document.querySelector('.calc-block');
	const culcType = document.querySelector('.calc-type');
	const calcSquare = document.querySelector('.calc-square');
	const calcCount = document.querySelector('.calc-count');
	const calcDay = document.querySelector('.calc-day');
	let total = document.getElementById('total');
	let totalPrice = 0

	const countCulc = () => {
		const culcTypeValue = +culcType.options[culcType.selectedIndex].value;
		const calcSquareValue = calcSquare.value;
		let culcCountValue = 1;
		let calcDayValue = 1;

		if (calcCount.value > 1) {
			culcCountValue = culcCountValue + (calcCount.value / 10);
		}

		if (calcDay.value && calcDay.value < 5) {
			calcDayValue = 2;
		} else if (calcDay.value && calcDay.value < 10) {
			calcDayValue = 1.5;
		}

		if (culcType.value && calcSquare.value) {
			totalPrice = price * culcTypeValue * calcSquareValue * culcCountValue * calcDayValue;
			animateNum(totalPrice, total);
		} else {
			totalPrice = 0;
		}
		total.textContent = totalPrice;
	}

	calcBlock.addEventListener('input', (e) => {									// ограничения
		if (e.target === culcType || e.target === calcSquare ||
			e.target === calcCount || e.target === calcDay) {
			countCulc()
		}
	})
}
export default culc
