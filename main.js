let factors = [];
function factorize(number) {
	let divisor = 2;

	while (number > 1) {
		if (number % divisor === 0) {
			factors.push(divisor);
			number /= divisor;
		} else {
			divisor++;
		}
	}

	return factors;
}

function calculate() {
	let numberInput = document.getElementById('number-input');
	let resultLabel = document.getElementById('result-label');
	let text = document.getElementById('text');

	let number = parseInt(numberInput.value);

	if (number < 2) {
		resultLabel.textContent =
			"Son tub ko'paytuvchilarga ajratilishi mumkin emas.";
	} else {
		let primeFactors = factorize(number);
		resultLabel.textContent = number + ' = ' + primeFactors.join(' * ');
		if (factors.length == 1) {
			text.textContent = ' Bu son tub son!';
		} else text.textContent = ' Bu son murakkab son!';
	}
}

let calculateButton = document.getElementById('calculate-button');
calculateButton.addEventListener('click', calculate);
