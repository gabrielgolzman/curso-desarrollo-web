// Classes

class Vegetable {
	constructor(name, color) {
		this.name = name;
		this.color = color;
	}

	returnColor = () => {
		return this.color;
	};
}

const carrot = new Vegetable('carrot', 'orange');

// console.log(carrot.returnColor());

//Promises

const result = new Promise((resolved, rejected) => {
	if (carrot.returnColor() === 'green') {
		resolved("It's a good carrot!");
	} else {
		rejected('Buy another one');
	}
})
	.then((response) => console.log(response + ' great!'))
	.catch((error) => console.log(error));

// console.log(result);
