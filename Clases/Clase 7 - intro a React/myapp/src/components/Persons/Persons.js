import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
	static getDerivedStateFromProps(props, state) {
		console.log('[Persons.js] getDerivedStateFromProps');
		return state;
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.js] shouldComponentUpdate');
		if (nextProps.persons !== this.props.persons) {
			return true;
		}
		return false;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return {};
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('[Persons.js] componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('[Persons.js] componentWillUnmount');
	}

	render() {
		console.log('[Persons.js] is rendering...');
		const persons = this.props.persons.map((person, index) => (
			<Person
				changed={(event) => this.props.changed(event, index)}
				key={index}
				name={person.name}
				age={person.age}
				click={() => this.props.clicked(index)}
			/>
		));

		return <div>{persons}</div>;
	}
}

export default Persons;
