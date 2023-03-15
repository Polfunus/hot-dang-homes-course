import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.WP_GRAPHQL_URL,
  cache: new InMemoryCache(), // in-memory cache does not persist data between page loads
});

export default client;
