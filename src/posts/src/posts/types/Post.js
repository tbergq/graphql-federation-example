// @flow

import { toGlobalId } from '@adeira/graphql-global-id';

import type { Post as PostsDataSource } from '../../dataSources/Posts';

type PostsResolver = {
  +id: PostsDataSource => string,
  +user: PostsDataSource => { +id: string },
};

const Post: PostsResolver = {
  id: ({ _id: id }) => {
    return toGlobalId('Post', id);
  },
  user: ({ userId }) => ({
    id: userId,
  }),
};

export default Post;
