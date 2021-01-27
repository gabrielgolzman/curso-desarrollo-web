import React, { Component } from 'react';

import classes from './App.module.css';

import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
		this.state = {
			persons: [
				{
					name: 'Matias Peralta',
					age: 23,
				},
				{
					name: 'Tomas Zorzolo',
					age: 24,
				},
				{
					name: 'Leandro Castillo',
					age: 23,
				},
			],
			showPersons: false,
			university: 'UTN',
			showCockpit: true,
			changedCounter: 0,
		};
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps');
		console.log(state);
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	clickHandler = (newName) => {
		this.setState({
			persons: [
				{
					name: 'Matias Peralta',
					age: 23,
				},
				{
					name: newName,
					age: 24,
				},
				{
					name: 'Leandro Castillo',
					age: 23,
				},
			],
		});
	};

	showPersonsHandler = () => {
		this.setState({ showPersons: !this.state.showPersons });
	};

	showCockpitHandler = () => {
		this.setState({ showCockpit: !this.state.showCockpit });
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
		this.setState((prevState) => {
			return {
				persons: persons,
				changedCounter: prevState.changedCounter + 1,
			};
		});
	};

	render() {
		console.log('[App.js] render');
		const persons = this.state.showPersons ? (
			<Persons
				persons={this.state.persons}
				changed={this.switchNameHandler}
				clicked={this.deletePersonHandler}
			/>
		) : null;

		const showCockpit = this.state.showCockpit ? (
			<Cockpit
				clicked={this.showPersonsHandler}
				showPersons={this.state.showPersons}
			/>
		) : null;

		return (
			<div className={classes.App}>
				<button onClick={this.showCockpitHandler}>
					{this.state.showCockpit ? 'Remover encabezado' : 'Agregar encabezado'}
				</button>
				{showCockpit}
				{persons}
			</div>
		);
	}
}

export default App;
