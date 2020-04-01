// @flow

import users from './users/resolvers/Users';
import node from './users/resolvers/Node';
import User from './users/types/User';

const resolvers = {
  Query: {
    users,
    node,
  },
  User,
  Node: {
    __resolveType: ({ __typename }: { +__typename: string }): string => __typename,
  },
};

export default resolvers;
