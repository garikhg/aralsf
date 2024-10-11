import { useMemo } from 'react';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const useApollo = () => {
  return useMemo(() => {
    const httpLink = new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          // Add authorization header or other headers if needed
        },
      };
    });

    return new ApolloClient({
      link: ApolloLink.from([authLink, httpLink]),
      cache: new InMemoryCache(),
    });
  }, []);
};
