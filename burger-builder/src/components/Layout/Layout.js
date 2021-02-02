import React from 'react';

import classes from './Layout.module.css';

import Auxiliary from '../../hoc/Auxiliary';

const layout = (props) => {
	return (
		<Auxiliary>
			<div>Toolbar, Sidedrawer, Backdrop </div>
			<main className={classes.Content}>{props.children}</main>
		</Auxiliary>
	);
};

export default layout;
