// @flow

import { ApolloServer, gql } from 'apollo-server';
import fs from 'fs';
import path from 'path';
import { buildFederatedSchema } from '@apollo/federation';

import resolvers from './resolvers';
import dataSources from './dataSources';

const schemaPath = __DEV__
  ? path.join(__dirname, '..', 'schema.gql')
  : path.join(__dirname, 'schema.gql');
const schema = fs.readFileSync(schemaPath, 'utf-8');
const typeDefs = gql`
  ${schema}
`;

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  dataSources,
  introspection: true,
  playground: true,
});

server.listen(process.env.PORT ?? 4001).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);
});
