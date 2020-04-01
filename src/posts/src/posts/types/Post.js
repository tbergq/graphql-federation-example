// @flow

import { toGlobalId, fromGlobalId } from '@adeira/graphql-global-id';

import type { Post as PostsDataSource } from '../../dataSources/Posts';
import type { DataSource } from '../../dataSources';

type Context = {
  +dataSources: DataSource,
};

type ResolvePost = {
  +id: string,
};

const Post = {
  id: ({ _id: id }: PostsDataSource): string => {
    return toGlobalId('Post', id);
  },
  user: ({ userId }: PostsDataSource): { +id: string } => ({
    id: userId,
  }),
  __resolveReference: async (
    { id }: ResolvePost,
    { dataSources }: Context,
  ): Promise<PostsDataSource> => {
    const post = await dataSources.posts.getPost(fromGlobalId((id: any)));
    return post;
  },
};

export default Post;
