// Introductory class to JS

// JavaScript provides eight different data types which are
//  undefined, null, boolean, string, symbol, bigint, number, and object.

// var n = 12;
// var s = 25;
// n = s + 34;
// var initialText = 'Pablo Paez';
// var secondText = 'tiene 5 masters';

// console.log(initialText);

var elfs = ['Legolas', 'Farandir', 'Elrond', 'Galadriel'];
var evil = 'Sauron';
var characters = [
	elfs,
	evil,
	['Boromir', 'Faramir', 'Aragorn'],
	['Gandalf', 'Saruman'],
	['Frodo', 'Pippin', 'Merry', 'Sam'],
];
var newElf = 'Cirandir';
var oldElf = 'Aragorn';
console.log(elfs);

// console.log(oldElf);

switch (oldElf) {
	case 'Legolas':
	case 'Elrond':
		console.log('Legolas!');
		break;
	case 'Farandir':
		console.log('Farandir!');
		break;
	case 'Galadriel':
		console.log('Galadriel!');
		break;
	default:
		console.log('No elfs!');
		break;
}

function esFrodo(hobbit) {
	hobbitCopy = hobbit.slice();
	console.log(hobbitCopy);
	hobbitCopy = 'Merry';
	return hobbitCopy;
}
var hobbit = 'Pippin';
var result = esFrodo(hobbit);
console.log(result);
