import React, { Component } from 'react';

import classes from './App.module.css';

import Person from './components/Person/Person';

class App extends Component {
	state = {
		persons: [
			{
				name: 'Matias Peralta',
				age: '23',
			},
			{
				name: 'Tomas Zorzolo',
				age: '24',
			},
			{
				name: 'Leandro Castillo',
				age: '23',
			},
		],
		showPersons: false,
		university: 'UTN',
	};

	clickHandler = (newName) => {
		this.setState({
			persons: [
				{
					name: 'Matias Peralta',
					age: '23',
				},
				{
					name: newName,
					age: '24',
				},
				{
					name: 'Leandro Castillo',
					age: '23',
				},
			],
		});
	};

	showPersonsHandler = () => {
		this.setState({ showPersons: !this.state.showPersons });
	};

	deletePersonHandler = (index) => {
		const newArrayPersons = [...this.state.persons];
		newArrayPersons.splice(index, 1);
		this.setState({ persons: newArrayPersons });
	};

	switchNameHandler = (event, index) => {
		//  this.state.persons[index] = event.target.value; MUY MAL
		// const persons = this.state.persons; MAL
		//   const persons = this.state.persons.slice() BIEN
		const persons = [...this.state.persons]; //MEJOR
		let person = { ...persons[index] };
		person.name = event.target.value;
		persons[index] = person;
		this.setState({ persons: persons });
	};

	render() {
		const persons = this.state.showPersons
			? this.state.persons.map((person, index) => (
					<Person
						changed={(event) => this.switchNameHandler(event, index)}
						key={index}
						name={person.name}
						age={person.age}
						click={() => this.deletePersonHandler(index)}
					/>
			  ))
			: null;
		const styles = [classes.Button];
		if (this.state.showPersons) {
			styles.push(classes.Cancel);
		}
		return (
			<div className={classes.App}>
				<h1>Mi curso de React!</h1>
				<button className={styles.join(' ')} onClick={this.showPersonsHandler}>
					Mostrar personas!
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
