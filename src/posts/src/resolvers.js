// @flow

import post from './posts/resolvers/Post';
import Post from './posts/types/Post';

const resolvers = {
  Query: {
    post,
  },
  Post,
};

export default resolvers;
