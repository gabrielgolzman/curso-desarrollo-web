//Loops
var elfs = ['Legolas', 'Farandir', 'Elrond', 'Galadriel'];
var characters = [
	elfs,
	['Boromir', 'Faramir', 'Aragorn'],
	['Gandalf', 'Saruman'],
	['Frodo', 'Pippin', 'Merry', 'Sam'],
];
var ind = 3;

// do {
// 	ind--;
// 	console.log('In the loop!');
// } while (ind > 0);

// for (var i = 0; i < characters.length; i++) {
// 	for (var j = 0; j < characters[i].length; j++) {
// 		console.log(characters[i][j]);
// 	}
// }

//JS Objects /JSON
// var person = {
// 	name: 'Gabriel',
// 	age: 25,
// 	isEnginner: false,
// };

var hobbit = {
	name: 'Frodo',
	age: 70,
	personality: ['smart', 'noble'],
	friend: {
		name: 'Sam',
		age: 70,
		personality: ['loyal', 'courageous'],
	},
};

// console.log(hobbit.hasOwnProperty('height'));

// function isFriendLikeThat(object, quirk) {
// 	if (object.hasOwnProperty('friend')) {
// 		if (object.friend.hasOwnProperty('personality')) {
// 			for (var i = 0; i < object.friend.personality.length; i++) {
// 				if (object.friend.personality[i] == quirk) {
// 					return 'Your friend is like that!';
// 				}
// 			}
// 		}
// 	}
// 	return 'Your friend is not like that!';
// }
// var result = isFriendLikeThat(hobbit, 'arrogant');

function logProperty(object, prop) {
	console.log(object[prop]);
}

var propi = 'friend';
console.log(hobbit[propi]);

logProperty(hobbit, 'name');
