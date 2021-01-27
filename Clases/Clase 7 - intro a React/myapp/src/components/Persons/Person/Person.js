import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';

import withClass from '../../../hoc/WithClass/WithClass';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

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
			<Auxiliary>
				<p onClick={this.props.click}>
					Me llamo {this.props.name} y tengo {this.props.age} años
				</p>
				<input onChange={this.props.changed} value={this.props.name} />
			</Auxiliary>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
