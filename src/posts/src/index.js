// @flow

import { ApolloServer, gql } from 'apollo-server';
import fs from 'fs';
import path from 'path';
import { buildFederatedSchema } from '@apollo/federation';

import resolvers from './resolvers';
import dataSources from './dataSources';

const schema = fs.readFileSync(path.join(__dirname, '..', 'schema.gql'), 'utf-8');
const typeDefs = gql`
  ${schema}
`;

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  dataSources,
});

server.listen(4002).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);
});
