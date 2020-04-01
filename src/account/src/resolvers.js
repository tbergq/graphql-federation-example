// @flow

import users from './users/resolvers/Users';
import User from './users/types/User';

const resolvers = {
  Query: {
    users,
  },
  User,
};

export default resolvers;
