import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const useApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_WORDPRESS_URL, // Replace with your WordPress GraphQL endpoint
    }),
    cache: new InMemoryCache(),
  });
};

export default useApolloClient;
