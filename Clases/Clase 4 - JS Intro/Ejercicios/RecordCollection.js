// Nos dan un objeto JSON representando una parte de nuestra colección musical.
// Cada album tiene un número de ID único como clave primaria y varias propiedades más.
// No todos los albumes tienen la información completa.

// Comenzamos ya con una función llamda "updateRecords" que toma como parámetros:
// Un objeto del tipo colección.
// Una id.
// Una prop (como "artist" o "tracks").
// y un valor.
// Debemos completar la funcion CUMPLIENDO LAS REGLAS QUE SE ENCUENTRAN DEBAJO.

// La función siempre debe retornar un objeto.
// Si prop no es "tracks" y "value" no es una cadena vacía, cambiar la "prop" del album por ese "value".
// Si "prop" es "tracks" pero el album no tiene una propiedad "tracks", crea una propiedad "tracks" que es un arreglo con un único valor: "value".
// Si "prop" es "tracks" y "value" no es una cadena vacía, agrega "value" al arreglo "tracks" del album.
// Si "value" es una cadena vacía, borra la propiedad "prop" del album

// Setup
var collection = {
	2548: {
		albumTitle: 'Slippery When Wet',
		artist: 'Bon Jovi',
		tracks: ['Let It Rock', 'You Give Love a Bad Name'],
	},
	2468: {
		albumTitle: '1999',
		artist: 'Prince',
		tracks: ['1999', 'Little Red Corvette'],
	},
	1245: {
		artist: 'Robert Palmer',
		tracks: [],
	},
	5439: {
		albumTitle: 'ABBA Gold',
	},
};

// Cambia solo código debajo de esta linea
function updateRecords(object, id, prop, value) {
	return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');
