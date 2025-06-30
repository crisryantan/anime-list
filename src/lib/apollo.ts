import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client';

const ANILIST_API = 'https://graphql.anilist.co';

export function createApolloClient() {
  const httpLink = new HttpLink({
    uri: ANILIST_API,
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    return forward(operation);
  });

  return new ApolloClient({
    link: from([authMiddleware, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Page: {
          keyFields: ['pageInfo', ['currentPage']],
        }
      }
    }),
    connectToDevTools: process.env.NODE_ENV === 'development',
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
        nextFetchPolicy: 'cache-first',
      },
      query: {
        fetchPolicy: 'network-only',
      },
    },
  });
}

let apolloClient: ReturnType<typeof createApolloClient>;

export function getApolloClient() {
  if (!apolloClient) {
    apolloClient = createApolloClient();
  }
  return apolloClient;
} 