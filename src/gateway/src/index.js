// @flow

import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

// Initialize an ApolloGateway instance and pass it an array of
// your implementing service names and URLs
const gateway = new ApolloGateway({
  serviceList: [
    {
      name: 'accounts',
      url: __DEV__ ? 'http://localhost:4001' : 'https://tbergq-graphql-account.now.sh/',
    },
    {
      name: 'posts',
      url: __DEV__ ? 'http://localhost:4002' : 'https://tbergq-graphql-posts.now.sh/',
    },
    // Define additional services here
  ],
});

// Pass the ApolloGateway to the ApolloServer constructor
const server = new ApolloServer({
  gateway,

  // Disable subscriptions (not currently supported with ApolloGateway)
  subscriptions: false,
  introspection: true,
  playground: true,
});

server.listen(process.env.PORT ?? 4000).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);
});
