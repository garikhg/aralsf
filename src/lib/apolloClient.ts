import { useMemo } from 'react';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

let apolloClient: ApolloClient<any> | undefined;

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({ uri: process.env.NEXT_PUBLIC_WORDPRESS_URL }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: any = {}) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // Hydrate the Apollo client state if initial state is provided
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === 'undefined') {
    return _apolloClient; // SSG and SSR
  }
  if (!apolloClient) {
    apolloClient = _apolloClient; // Create the Apollo Client once in the client
  }

  return apolloClient;
}

export function useApollo(initialState: any = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
