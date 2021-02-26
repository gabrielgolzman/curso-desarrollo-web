import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
	salad: 5,
	cheese: 4,
	meat: 13,
	bacon: 7,
};
class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 40,
		purchasable: false,
	};

	addIngredientHandler = (type) => {
		const updateIngredients = { ...this.state.ingredients };
		let oldCount = updateIngredients[type];
		let updatePrice = this.state.totalPrice;
		updatePrice += INGREDIENTS_PRICE[type];
		oldCount += 1;
		updateIngredients[type] = oldCount;
		this.updatePurchaseState(updateIngredients);
		this.setState({ ingredients: updateIngredients, totalPrice: updatePrice });
	};

	removeIngredientHandler = (type) => {
		const updateIngredients = { ...this.state.ingredients };
		let oldCount = updateIngredients[type];
		let updatePrice = this.state.totalPrice;
		updatePrice -= INGREDIENTS_PRICE[type];
		oldCount -= 1;
		updateIngredients[type] = oldCount;
		this.updatePurchaseState(updateIngredients);
		this.setState({ ingredients: updateIngredients, totalPrice: updatePrice });
	};

	updatePurchaseState = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map((igKey) => {
				return ingredients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({ purchasable: sum > 0 });
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<div>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					purchasable={this.state.purchasable}
					disableInfo={disabledInfo}
					total={this.state.totalPrice}
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
				/>
			</div>
		);
	}
}

export default BurgerBuilder;
