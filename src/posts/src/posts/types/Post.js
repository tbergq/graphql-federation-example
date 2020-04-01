// @flow

import { toGlobalId } from '@adeira/graphql-global-id';

import type { Post as PostsDataSource } from '../../dataSources/Posts';

type PostsResolver = {
  +id: PostsDataSource => string,
};

const Post: PostsResolver = {
  id: ({ _id: id }) => {
    return toGlobalId('Post', id);
  },
};

export default Post;
