import React, { Component } from 'react';

import classes from './Person.module.css';

class Person extends Component {
	/*
    props = {
        name: 'sadnasdjasn',
        age:'sdasdas'
    }
    */

	render() {
		console.log('[Person.js] is rendering...');
		return (
			<div className={classes.Person}>
				<p onClick={this.props.click}>
					Me llamo {this.props.name} y tengo {this.props.age} años
				</p>
				<input onChange={this.props.changed} value={this.props.name} />
			</div>
		);
	}
}

export default Person;
