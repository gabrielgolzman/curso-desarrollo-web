import React from 'react';

import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
	const ingredients = [
		{ label: 'Lechuga', type: 'salad' },
		{ label: 'Panceta', type: 'bacon' },
		{ label: 'Queso', type: 'cheese' },
		{ label: 'Carne', type: 'meat' },
	];
	const controls = ingredients.map((ctrl) => (
		<BuildControl
			addIngredient={() => props.addIngredient(ctrl.type)}
			removeIngredient={() => props.removeIngredient(ctrl.type)}
			label={ctrl.label}
			disable={props.disableInfo[ctrl.type]}
			key={ctrl.type}
		/>
	));
	return (
		<div className={classes.BuildControls}>
			<p>
				Precio final: <b>${props.total}</b>
			</p>
			{controls}
			<button disabled={!props.purchasable} className={classes.OrderButton}>
				¡Pedila ya!
			</button>
		</div>
	);
};

export default BuildControls;
