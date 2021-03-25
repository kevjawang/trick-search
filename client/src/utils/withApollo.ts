import { useMemo } from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloLink,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = (authToken) => {
  const authMiddleware = new ApolloLink((operation, forward) => {
    if (authToken) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
    }
    return forward(operation);
  });

  return new ApolloClient({
    ssrMode: true, // set to true for SSR
    link: authMiddleware.concat(
      new HttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_HOST,
      })
    ),
    cache: new InMemoryCache(),
  });
};

export function initializeApollo(initialState = null, authToken = "") {
  const _apolloClient = apolloClient ?? createApolloClient(authToken);

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (authToken) {
    _apolloClient.setLink(
      new ApolloLink((operation, forward) => {
        if (authToken) {
          operation.setContext({
            headers: {
              authorization: `Bearer ${authToken}`,
            },
          });
        }
        return forward(operation);
      }).concat(
        new HttpLink({
          uri: process.env.NEXT_PUBLIC_GRAPHQL_HOST,
        })
      )
    );
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState, authToken) {
  const store = useMemo(() => initializeApollo(initialState, authToken), [
    initialState,
    authToken,
  ]);
  return store;
}
