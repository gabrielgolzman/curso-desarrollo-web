import React, { Component } from 'react';

import Person from './components/Person/Person';

import './App.css';

class App extends Component {
	state = {
		persons: [
			{ name: 'Eric Reinwald', age: '23' },
			{ name: 'Andres Botello', age: '24' },
			{ name: 'Pablo Paez', age: '23' },
		],
	};

	switchNameHandler = (newName) => {
		//console.log('Clickeado!');
		this.setState({
			persons: [
				{ name: 'Eric Reinwald', age: '23' },
				{ name: newName, age: '24' },
				{ name: 'Pablo Paez', age: '23' },
			],
		});
	};

	changeNameHandler = (event) => {
		let newName = event.target.value;
		this.setState({
			persons: [
				{ name: 'Eric Reinwald', age: '23' },
				{ name: newName, age: '24' },
				{ name: 'Pablo Paez', age: '23' },
			],
		});
	};

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		};

		return (
			<div className="App">
				<h1>Mi curso de React</h1>
				<button style={style} onClick={() => this.switchNameHandler('EMP')}>
					Cambiar nombre
				</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
					click={this.switchNameHandler.bind(this, 'EMP')}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					changed={(event) => this.changeNameHandler(event)}
				/>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		);
	}
}

export default App;
