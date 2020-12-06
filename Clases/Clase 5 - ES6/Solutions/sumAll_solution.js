const sumAll = (arr) => {
	const [first, second] = arr;
	let sum = 0;
	if (first > second) {
		for (let i = first; i >= second; i--) {
			sum += i;
		}
	}
	if (second > first) {
		for (let i = second; i >= first; i--) {
			sum += i;
		}
	}
	return sum;
};

console.log(sumAll([1, 4]));
