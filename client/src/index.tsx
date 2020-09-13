import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, useQuery, ApolloProvider } from '@apollo/client'

import App from './components/root/App';

const client = new ApolloClient({
  // TODO: add production uri
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
