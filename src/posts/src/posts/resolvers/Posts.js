// @flow

import type { DataSource } from '../../dataSources';
import type { Post } from '../../dataSources/Posts';

type Context = {
  +dataSources: DataSource,
};

export default function Users(
  _: mixed,
  { userId }: { +userId: string },
  { dataSources }: Context,
): Promise<$ReadOnlyArray<Post>> {
  return dataSources.posts.getPostsByUserId(userId);
}
