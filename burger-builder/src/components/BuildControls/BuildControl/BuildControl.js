import React from 'react';

import classes from './BuildControl.module.css';

const BuildControl = (props) => {
	return (
		<div className={classes.BuildControl}>
			<label className={classes.Label}>{props.label}</label>
			<button
				disabled={props.disable}
				className={classes.Less}
				onClick={props.removeIngredient}
			>
				Menos
			</button>
			<button className={classes.More} onClick={props.addIngredient}>
				Más
			</button>
		</div>
	);
};

export default BuildControl;
