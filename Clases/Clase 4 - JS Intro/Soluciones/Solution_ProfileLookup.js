// Tenemos un arreglo de objetos representando diferentes personas de nuestra lista de contactos.

//Una función llamada "lookUpProfile" toma el nombre (name) y la propiedad (prop) como argumentos.

//La función debería chequear si el nombre del contacto (name) es realmente el nombre de pila (firstName) y
// si la propiedad (prop) es propiedad de ese contacto.

// Si ambas condiciones se cumplen, devolver el valor de esa propiedad del objeto contacto.

// Si el nombre no corresponde con ningun contacto, devolver entonces "No such contact"

// Si el nombre corresponde con algún contacto pero ese contacto no tiene ninguna propiedad igual a (prop),
// entonces devolver "No such property".

// Pista: deberan usar todo lo aprendido durante la intro a JS (lógica condicional, arreglos,
//objetos, lógica de bucle).

// Setup
var contacts = [
	{
		firstName: 'Akira',
		lastName: 'Laine',
		number: '0543236543',
		likes: ['Pizza', 'Coding', 'Brownie Points'],
	},
	{
		firstName: 'Harry',
		lastName: 'Potter',
		number: '0994372684',
		likes: ['Hogwarts', 'Magic', 'Hagrid'],
	},
	{
		firstName: 'Sherlock',
		lastName: 'Holmes',
		number: '0487345643',
		likes: ['Intriguing Cases', 'Violin'],
	},
	{
		firstName: 'Kristian',
		lastName: 'Vos',
		number: 'unknown',
		likes: ['JavaScript', 'Gaming', 'Foxes'],
	},
];

function lookUpProfile(name, prop) {
	// Solo cambiar código debajo de esta línea.
	for (var i = 0; i < contacts.length; i++) {
		if (name == contacts[i].firstName) {
			if (contacts[i].hasOwnProperty(prop)) return contacts[i][prop];
			else {
				return 'No such property';
			}
		}
	}

	return 'No such contact';
	// Solo cambiar código por arriba de esta línea.
}

var result = lookUpProfile('Akira', 'likes');
console.log(result);
