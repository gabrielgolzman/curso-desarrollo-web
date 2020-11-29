//Loops
var elfs = ['Legolas', 'Farandir', 'Elrond', 'Galadriel'];
var characters = [
	elfs,
	['Boromir', 'Faramir', 'Aragorn'],
	['Gandalf', 'Saruman'],
	['Frodo', 'Pippin', 'Merry', 'Sam'],
];

//While
// var ind = 3;
// do {
// 	ind -= 1;
// 	console.log(ind);
// } while (ind > 0);

//For

// for (var i = 0; i < characters.length; i++) {
// 	for (var j = 0; j < characters[i].length; j++) {
// 		console.log(characters[i][j]);
// 	}
// }

//JS Object

var hobbit = {
	name: 'Frodo',
	age: 75,
	personality: ['noble', 'courageous'],
	friend: {
		name: 'Sam',
		age: 70,
		personality: ['loyal', 'brave'],
	},
};

// function logPropertyObject(object, prop) {
// 	console.log(object[prop]);
// }

function isFriendLikeThat(object, quirk) {
	if (object.hasOwnProperty('friend')) {
		if (object.friend.hasOwnProperty('personality')) {
			for (var i = 0; i < object.friend.personality.length; i++) {
				if (object.friend.personality[i] == quirk) {
					return 'Your friend is like that!';
				}
			}
		}
	}
	return 'Your friend is not like that!';
}

// var result = hobbit.hasOwnProperty('pico');
var result = isFriendLikeThat(hobbit, 'arrogant');
console.log(result);

// console.log(hobbit['personality']);
// logPropertyObject(hobbit, 'personality');
