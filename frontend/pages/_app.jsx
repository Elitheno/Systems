import React from 'react';
import '../styles/globals.css';
import {ApolloProvider} from '@apollo/client';
import client from '../lib/apollo.js';

const MyApp = ({Component, pageProps}) => (
	<ApolloProvider client={client}>
		<Component {...pageProps} />
	</ApolloProvider>
);

export default MyApp;

