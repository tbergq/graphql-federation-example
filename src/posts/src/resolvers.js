// @flow

import post from './posts/resolvers/Post';
import Post from './posts/types/Post';
import User from './posts/types/User';

const resolvers = {
  Query: {
    post,
  },
  Post,
  User,
};

export default resolvers;
