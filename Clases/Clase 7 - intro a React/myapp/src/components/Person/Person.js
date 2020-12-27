import React from 'react';

import classes from './Person.module.css';

const person = (props) => {
	/*
    props = {
        name: 'sadnasdjasn',
        age:'sdasdas'
    }
    */

	return (
		<div className={classes.Person}>
			<p onClick={props.click}>
				Me llamo {props.name} y tengo {props.age} años
			</p>
			<input onChange={props.changed} value={props.name} />
		</div>
	);
};

export default person;
