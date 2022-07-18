import {useEffect} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/graphql';

// Register a new user
export const registerUser = (username, email, password) => {
	// Prevent function from being ran on the server
	if (typeof window === 'undefined') {
		return;
	}

	return new Promise((resolve, reject) => {
		axios
			.post(`${API_URL}/auth/local/register`, {username, email, password})
			.then(res => {
				// Set token response from Strapi for server validation
				cookie.set('token', res.data.jwt);

				// Resolve the promise to set loading to false in SignUp form
				resolve(res);
				// Redirect back to home page for restaurance selection
				Router.push('/');
			})
			.catch(error => {
				// Reject the promise and pass the error object back to the form
				reject(error);
			});
	});
};

export const login = (identifier, password) => {
	// Prevent function from being ran on the server
	if (typeof window === 'undefined') {
		return;
	}

	return new Promise((resolve, reject) => {
		axios
			.post(`${API_URL}/auth/local/`, {identifier, password})
			.then(res => {
				// Set token response from Strapi for server validation
				cookie.set('token', res.data.jwt);

				// Resolve the promise to set loading to false in SignUp form
				resolve(res);
				// Redirect back to home page for restaurance selection
				Router.push('/');
			})
			.catch(error => {
				// Reject the promise and pass the error object back to the form
				reject(error);
			});
	});
};

export const logout = () => {
	// Remove token and user cookie
	cookie.remove('token');
	delete window.__user;
	// Sync logout between multiple windows
	window.localStorage.setItem('logout', Date.now());
	// Redirect to the home page
	Router.push('/');
};

// Higher Order Component to wrap our pages and logout simultaneously logged in tabs
// THIS IS NOT USED in the tutorial, only provided if you wanted to implement
export const withAuthSync = Component => {
	const Wrapper = props => {
		const syncLogout = event => {
			if (event.key === 'logout') {
				Router.push('/login');
			}
		};

		useEffect(() => {
			window.addEventListener('storage', syncLogout);

			return () => {
				window.removeEventListener('storage', syncLogout);
				window.localStorage.removeItem('logout');
			};
		}, []);

		return <Component {...props} />;
	};

	if (Component.getInitialProps) {
		Wrapper.getInitialProps = Component.getInitialProps;
	}

	return Wrapper;
};
