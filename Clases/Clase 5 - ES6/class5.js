// let
// let king = 'Aragorn';
// king = 'Sauron';
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
//returns 3

// let printNumTwo;
// for (let i = 0; i < 3; i++) {
// 	if (i === 2) {
// 		printNumTwo = function () {
// 			return i;
// 		};
// 	}
// }
// console.log(printNumTwo());
// //returns 2
// console.log(i);
//returns "i is not defined"

// Const
// const elf = 'Legolas';
// console.log(elf);

//Object freeze

// const mage = {
// 	name: 'Gandalf',
// 	status: 'semi-god',
// };

// mage.name = 'Saruman';
// console.log(mage);

// comparators and ternary conditionals

// var1 = '15';
// var2 = 15;
// if (var1 === var2) {
// 	console.log("It's true");
// } else {
// 	console.log('They are different!');
// }

// const result = var1 === var2 ? 'They are equal!' : null;
// console.log(result);

// Arrow functions

// function getValue() {
// 	let value = 'Gondor';
// 	return value;
// }

// const result = getValue();
// console.log(result);

const getValue = (value) => value ** 2;
const nombreFuncion = (value, otherNumber) => {
	console.log('Hola que tal');
	return value;
};
console.log(getValue(25, 35));

// let howMany = (...args) => 'You have ' + args.length + ' arguments';
// let printArguments = (...args) => {
// 	console.log(args);
// };

// // console.log(howMany(0, 1, 2));
// printArguments(false, null, { name: 'Gabriel' }, []);

// const hobbit = {
// 	name: 'Frodo',
// 	age: 70,
// 	personality: ['smart', 'noble'],
// 	friend: {
// 		name: 'Sam',
// 		age: 70,
// 		personality: ['loyal', 'courageous'],
// 	},
// };

const hobbits = ['Frodo', 'Sam', 'Merry', 'Pippin'];

const getAgeOfHobbit = (listHobbits) => {
	const [first, second] = listHobbits;
	console.log(first, second);
};
getAgeOfHobbit(hobbits);

//Shorthand properties

const returnObject = (name, city) => ({ name, city });

const result = returnObject('Legolas', 'Mirkwood');
console.log(result);
