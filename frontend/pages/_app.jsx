import React from 'react';
import App from 'next/app.js';
import '../styles/globals.css';
import cookie from 'js-cookie';
import {ApolloProvider} from '@apollo/client';
import client from '../lib/apollo.js';
import AppContext from '../context/app-context.js';

class MyApp extends App {
	state = {
		user: null,
		cart: {items: [], total: 0},
	};

	componentDidMount() {
		const token = cookie.get('token');
		// Restore cart from cookie, this could also be tracked in a db
		const cart = cookie.get('cart');

		if (typeof cart === 'string' && cart !== 'undefined') {
			for (const item of JSON.parse(cart)) {
				this.setState({
					cart: {items: JSON.parse(cart), total: item.price * item.quantity},
				});
			}
		}

		if (token) {
			// Authenticate the token on the server and place set user object
			fetch('http://localhost:1337/users/me', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}).then(async res => {
				// If res comes back not valid, token is not valid
				// delete the token and log the user out on client
				if (!res.ok) {
					cookie.remove('token');
					this.setState({user: null});
					return null;
				}

				const user = await res.json();
				this.setUser(user);
			});
		}
	}

	setUser = user => {
		this.setState({user});
	};

	addItem = item => {
		const {items} = this.state.cart;
		// Check for item already in cart
		// if not in cart, add item if item is found increase quanity ++
		const newItem = items.find(i => i.id === item.id);
		// If item is not new, add to cart, set quantity to 1
		if (!newItem) {
			// Set quantity property to 1
			item.quantity = 1;
			console.log(this.state.cart.total, item.price);
			this.setState(
				{
					cart: {
						items: [...items, item],
						total: this.state.cart.total + item.price,
					},
				},
				() => cookie.set('cart', this.state.cart.items),
			);
		} else {
			this.setState(
				{
					cart: {
						items: this.state.cart.items.map(item =>
							item.id === newItem.id
								? Object.assign({}, item, {quantity: item.quantity + 1})
								: item,
						),
						total: this.state.cart.total + item.price,
					},
				},
				() => cookie.set('cart', this.state.cart.items),
			);
		}
	};

	removeItem = item => {
		const {items} = this.state.cart;
		// Check for item already in cart
		// if not in cart, add item if item is found increase quanity ++
		const newItem = items.find(i => i.id === item.id);
		if (newItem.quantity > 1) {
			this.setState(
				{
					cart: {
						items: this.state.cart.items.map(item =>
							item.id === newItem.id
								? Object.assign({}, item, {quantity: item.quantity - 1})
								: item,
						),
						total: this.state.cart.total - item.price,
					},
				},
				() => cookie.set('cart', this.state.cart.items),
			);
		} else {
			const items = [...this.state.cart.items];
			const index = items.findIndex(i => i.id === newItem.id);

			items.splice(index, 1);
			this.setState(
				{cart: {items, total: this.state.cart.total - item.price}},
				() => cookie.set('cart', this.state.cart.items),
			);
		}
	};

	render() {
		const {Component, pageProps} = this.props;

		return (
			<AppContext.Provider
				value={{
					user: this.state.user,
					isAuthenticated: Boolean(this.state.user),
					setUser: this.setUser,
					cart: this.state.cart,
					addItem: this.addItem,
					removeItem: this.removeItem,
				}}
			>
				<ApolloProvider client={client}>
					<Component {...pageProps} />
				</ApolloProvider>
			</AppContext.Provider>
		);
	}
}

export default MyApp;
