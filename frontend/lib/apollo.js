import {ApolloClient, InMemoryCache} from '@apollo/client';

// Yes I'm doing this long hacky shit just to make __SURE__ it works
const uri = String(require('process').env.NEXT_PUBLIC_API_URL)
  || 'http://localhost:1337/graphql';

const client = new ApolloClient({
	uri,
	cache: new InMemoryCache(),
});

export default client;

