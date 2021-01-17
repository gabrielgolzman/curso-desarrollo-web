import React from 'react';

import classes from './Cockpit.module.css';

const cockpit = (props) => {
	const styles = [classes.Button];
	if (props.showPersons) {
		styles.push(classes.Cancel);
	}

	return (
		<div>
			<h1>Mi curso de React!</h1>
			<button className={styles.join(' ')} onClick={props.clicked}>
				Mostrar personas!
			</button>
		</div>
	);
};

export default cockpit;
