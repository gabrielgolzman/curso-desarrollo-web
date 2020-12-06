// Let & const

let king = 'Aragorn';
king = 'Sauron';
console.log(king);

//Block Scope

var printNumTwo;
for (var i = 0; i < 3; i++) {
	if (i === 2) {
		printNumTwo = function () {
			return i;
		};
	}
}
console.log(printNumTwo());
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

//Const

// const king = 'Aragorn';
// king = 'Sauron';
// console.log(king);

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

// Object.freeze(hobbit);
// hobbit.name = 'Merry';
// console.log(hobbit);

//New comparators && ternary operator

// let myVar = {};
// let myVar2 = null;

// // if (myVar === myVar2) console.log('They are equal');
// // else console.log('They are different');

// const result = myVar == myVar2 ? 'They are equal' : 'They are different';
// console.log(result);

// Arrow functions

// function getValue() {
// 	value = 'Gondor';
// 	return value;
// }

// const result = (value) => value;
// console.log(result('Sarasa'));

// let howMany = (...args) => 'You have ' + args.length + ' arguments';

// let printArguments = (...args) => {
// 	console.log(args, args[0]);
// };

// console.log(howMany(0, 1, 2));
// printArguments(false, null, { name: 'Gabriel' }, []);

// Spread operators

const hobbits = ['Frodo', 'Sam', 'Merry', 'Pippin'];

// const hobbits2 = [...hobbits];
// console.log(hobbits2);

// Destructuring

const { name, age } = hobbit;
const [first, second, ...arr] = hobbits;

console.log(first, second, arr);

//Shorthand property

const myFunc = (name, city) => ({ name, city });
const result = myFunc('Aragorn', 'Mirkwood');
console.log(result);
