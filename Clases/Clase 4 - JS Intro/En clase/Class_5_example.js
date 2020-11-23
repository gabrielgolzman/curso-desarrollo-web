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

//JS Objects

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

function isFriendLikeThat(hobbit, quirk) {
	if (hobbit.hasOwnProperty('friend')) {
		if (hobbit.friend.hasOwnProperty('personality')) {
			for (var i = 0; i < hobbit.friend.personality.length; i++) {
				if (hobbit.friend.personality[i] == quirk) {
					return 'Your friend is like that!';
				}
			}
		}
	}
	return 'Your friend is not like that!';
}

// function logProperty(hobbit, prop) {
// 	hobbit.hasOwnProperty(prop);
// 	console.log(hobbit[prop]);
// }

// delete hobbit.personality;

var result = isFriendLikeThat(hobbit, 'arrogant');
console.log(result);
logProperty(hobbit, 'friend');
