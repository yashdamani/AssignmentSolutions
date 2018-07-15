// program to find remainder without using %

function noModulus(number1, number2) {
	
	var quotient = (number1/number2).toFixed(3);
	var integerPart = parseInt((number1/number2));
	var result = quotient - integerPart;
	console.log("remainder is = " + (result * number2));
}

noModulus(3,4);