const myProm = new Promise((resolved, rejected) => {
	let rand = Math.random();
	console.log(rand);
	if (rand <= 0.75) {
		resolved('Good luck!');
	} else {
		rejected('Bad Luck');
	}
})
	.then((response) => {
		console.log(response);
	})
	.catch((error) => console.log(error));
