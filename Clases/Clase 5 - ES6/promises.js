// Classes

class Vegetable {
	constructor(name, color) {
		this.name = name;
		this.color = color;
	}

	returnColor = () => this.color;
}

const carrot = new Vegetable('carrot', 'green');

// console.log(carrot.returnColor());

// Promises

// const result = new Promise((resolved, rejected) => {
// 	if (carrot.returnColor() === 'orange') {
// 		resolved("It's a good carrot!");
// 	} else if (carrot.returnColor() === 'green') {
// 		rejected("It's too mature");
// 	} else {
// 		rejected('Buy another one');
// 	}
// })
// 	.then((response) => console.log(response + ' great!'))
// 	.catch((error) => console.log(error));

// console.log(result);

// Math.random() // 0 y 1
const result2 = new Promise((resolved, rejected) => {
	const rand = Math.random();
	console.log(rand);
	if (rand < 0.8) resolved('Good luck!');
	else rejected('Bad Luck');
})
	.then((response) => console.log(response))
	.catch((error) => console.log(error));
