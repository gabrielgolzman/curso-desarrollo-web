// JavaScript provides eight different data types which are
//  undefined, null, boolean, string, symbol, bigint, number, and object.

//String

// var initText = `Pablito Paez tiene `;
// var n = 6;
// var phrase = initText + n + " Doctorados";
// var fruit = 'apple'

// console.log(fruit);

// Arrays

// var elfs = ['Legolas', 'Farandir', 'Elrond', 'Galadriel'];
// var characters = [
// 	elfs,
// 	['Boromir', 'Faramir', 'Aragorn'],
// 	['Gandalf', 'Saruman'],
// 	['Frodo', 'Pippin', 'Merry', 'Sam'],
// ];

//Functions
// var count = 0;

// console.log('Before function ' + count);

// function showMe() {
// 	var count = 3;
// 	console.log(count + 'Inside function');
// 	return count;
// }

// console.log(showMe());
// console.log(count);

//Objects
var hobbit = {
	name: 'Frodo',
	age: 60,
	personality: ['smart', 'noble'],
	friend: {
		name: 'Sam',
		age: 70,
		personality: ['loyal', 'courageous'],
	},
};

// console.log(hobbit);

// hobbit.name = 'Sam';
// hobbit.height = '120cm';

// console.log(hobbit);

// delete hobbit.personality;

// var check = hobbit.hasOwnProperty('personality');
// console.log(check);

// var hobbits = [
// 	{ name: 'Frodo', age: 60, personality: ['smart', 'noble'] },
// 	{ name: 'Sam', age: 70, personality: ['loyal', 'courageous'] },
// ];

//Potpourri
// var rando = Math.random();
// console.log(rando + ' float number');
// console.log(rando.toFixed(2) + ' float with two values after comma');
// console.log(Math.floor(rando * 7));

// var result = parseInt('10') * 10;
// console.log(result);

// delete hobbit.name;

// var resultQuestion = hobbit.hasOwnProperty('name')
// 	? 'This hobbit has a name!'
// 	: 'Suspicious...';
// console.log(resultQuestion);
