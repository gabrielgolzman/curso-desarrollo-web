import React from 'react';

import './Person.css';

const person = (props) => {
	return (
		<div className="Person">
			<input onChange={props.changed} value={props.name} />
			<p onClick={props.click}>
				Mi nombre es {props.name} y tengo {props.age} años
			</p>
		</div>
	);
};

export default person;
