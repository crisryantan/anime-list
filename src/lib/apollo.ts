import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client';

const apiUrl = process.env.NEXT_PUBLIC_ANILIST_API;

if (!apiUrl) {
  throw new Error('Missing NEXT_PUBLIC_ANILIST_API env variable');
}

export function createApolloClient() {
  if (!apiUrl) {
    throw new Error('Missing NEXT_PUBLIC_ANILIST_API env variable');
  }

  const httpLink = new HttpLink({
    uri: apiUrl,
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