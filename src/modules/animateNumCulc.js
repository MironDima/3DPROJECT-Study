import { animate } from "./helpers";

const animateNum = (numberTotalPrice) => {
	let total = document.getElementById('total')

	animate({
		duration: 2000,
		timing(timeFraction) {
			return timeFraction
		},
		draw(progress) {
			total.textContent = Math.round(progress * numberTotalPrice)
		}
	});

}

export default animateNum