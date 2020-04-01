// @flow

import post from './posts/resolvers/Post';
import posts from './posts/resolvers/Posts';
import Post from './posts/types/Post';
import User from './posts/types/User';

const resolvers = {
  Query: {
    post,
    posts,
  },
  Post,
  User,
};

export default resolvers;
