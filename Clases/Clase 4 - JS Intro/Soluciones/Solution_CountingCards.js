var count = 0;

function cc(card) {
	// Cambia el codigo debajo de esta linea
	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count += 1;
			break;
		case 10:
		case 'J':
		case 'Q':
		case 'K':
		case 'A':
			count -= 1;
			break;
		default:
			break;
	}
	if (count > 0) {
		return count + ' Apuesta';
	} else {
		return count + ' Mantiene';
	}
}
// Cambia el codigo arriba de esta linea

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');
