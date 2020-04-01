// @flow

import type { Post as PostsDataSource } from '../../dataSources/Posts';
import type { DataSource } from '../../dataSources';

type Context = {
  +dataSources: DataSource,
};

const User = {
  posts: (
    { id }: { +id: string },
    _: mixed,
    { dataSources }: Context,
  ): Promise<$ReadOnlyArray<PostsDataSource>> => {
    return dataSources.posts.getPostsByUserId(id);
  },
};

export default User;
