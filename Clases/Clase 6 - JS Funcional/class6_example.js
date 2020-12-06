//Recap

// Function that returns a string representing a cup of green tea
// const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
// const getTea = (numOfCups) => {
// 	const teaCups = [];

// 	for (let cups = 1; cups <= numOfCups; cups += 1) {
// 		const teaCup = prepareTea();
// 		teaCups.push(teaCup);
// 	}
// 	return teaCups;
// };

// const tea4TeamFCC = getTea(7);
// console.log(tea4TeamFCC);

// Callbacks and high order functions

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
	const teaCups = [];

	for (let cups = 1; cups <= numOfCups; cups += 1) {
		const teaCup = prepareTea();
		teaCups.push(teaCup);
	}
	return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(() => 'greenTea', 5);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 9);
// Only change code above this line

// console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

//Avoid mutations

//Destructuring (again)

const hobbit = {
	name: 'Sam',
	age: 67,
	likes: ['food', 'dancing'],
};

const birthdayHobbit = (hobbit) => {
	let { age: newAge } = hobbit;
	newAge++;
	console.log(newAge);
	console.log(hobbit);
};

birthdayHobbit(hobbit);

// slice() function

const arr1 = [1, 7, -7, 3, -2, -8];

const aux = arr1.slice(0, 4);
// console.log(aux);

const addSum = (arr) => {
	const result = arr.reduce((acc, val) => acc + val, 0);
	// arr.push(result); //breaks inmutability
	const arr1 = arr.slice();
	arr1.push(result);
	console.log(arr1);
};

// addSum(arr1);

const addsquares = (arr) => {
	const result = arr.map((val) => val ** 2);
	//arr.push(result); //breaks inmutability
	// const arr1 = arr.slice();
	const newArray = arr1.concat(result);
	console.log(newArray);
};

// addsquares(arr1);

// join & split

const ar2 = ['Hello', 'World', '!'];
const ar2S = 'Hello World !';
console.log(ar2.join(' '));

// sort method
const numbs = [1, 3, 6, 0, 9, 5];
const charNames = [
	'Frodo',
	'Sam',
	'Legolas',
	'Gimli',
	'Gandalf',
	'Aragorn',
	'Boromir',
	'Pippin',
	'Merry',
];

// console.log(charNames.sort());

// every & some

// console.log(charNames.some((val) => val[0] === 'Z'));
