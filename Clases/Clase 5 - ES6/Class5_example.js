// let & const

// var king = 'Aragorn';
// var king = 'Sauron';

// console.log(king);

// let king = 'Aragorn';
// let king = 'Sauron';
// console.log(king);

//Block Scope

// var printNumTwo;
// for (var i = 0; i < 3; i++) {
// 	if (i === 2) {
// 		printNumTwo = function () {
// 			return i;
// 		};
// 	}
// }
// console.log(printNumTwo());
// returns 3

// let printNumTwo;
// for (let i = 0; i < 3; i++) {
// 	if (i === 2) {
// 		printNumTwo = function () {
// 			return i;
// 		};
// 	}
// }
// console.log(printNumTwo());
// // returns 2
// console.log(i);
// // returns "i is not defined"

// const keyword

// const mage = 'Gandalf';
// mage = 'Saruman';
// console.log(mage);

//Object freeze

// var mage = {
// 	name: 'Gandalf',
// 	status: 'semi-god',
// };

// // Object.freeze(mage);
// mage.name = 'Saruman';
// console.log(mage);

// New comparators && ternary operator

// let myVar1 = '15';

// let myVar2 = 15;

// if (myVar1 === myVar2) {
// 	console.log('They are equal!');
// } else {
// 	console.log('They are different!');
// }

// myVar1 === myVar2 ? console.log('They are equal!') : null;

// Arrow functions

// function getValue() {
// 	value = 'Gondor';
// 	return value;
// }

// let getValue = (value = 'Gondor') => value;
// console.log(getValue());

// let multiply = (number, multi) => number * multi;

// console.log(multiply(15, 34));

// let howMany = (...args) => 'You have ' + args.length + ' arguments';
// let printArguments = (...args) => {
// 	console.log(args);
// };

// console.log(howMany(0, 1, 2));
// printArguments(false, null, { name: 'Gabriel' }, []);

// Spread operators

// const hobbits = ['Frodo', 'Sam', 'Merry', 'Pippin'];

// const hobbits2 = ['Bilbo', ...hobbits];
// console.log(hobbits2);

//Destructuring

const hobbit = {
	name: 'Frodo',
	age: 70,
	personality: ['smart', 'noble'],
	friend: {
		name: 'Sam',
		age: 70,
		personality: ['loyal', 'courageous'],
	},
};

// const { name, age } = hobbit;

// console.log(age);

// const birthdayHobbit = (hobbit) => {
// 	let { age } = hobbit;
// 	age += 1;
// 	console.log(age);
// 	hobbit.age = age;
// 	console.log(hobbit);
// };

// birthdayHobbit(hobbit);

// const birthdayHobbit = (hobbit) => {
// 	let { age: hobbitAge } = hobbit;
// 	hobbitAge += 1;
// 	console.log(hobbitAge);
// 	hobbit.age = hobbitAge;
// 	console.log(hobbit);
// };

// birthdayHobbit(hobbit);

// const hobbits = ['Frodo', 'Sam', 'Merry', 'Pippin'];

// // const [a, , pp] = hobbits;
// // console.log(a, pp);

// const [h, o, ...arr] = hobbits;
// console.log(arr);

//Shorthand properties

// const createElfObject = (name, city) => ({ name, city });
// console.log(createElfObject('Legolas', 'Mirkwood'));
