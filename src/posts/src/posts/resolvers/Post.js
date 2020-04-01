// @flow

import { fromGlobalId } from '@adeira/graphql-global-id';

import type { DataSource } from '../../dataSources';
import type { Post } from '../../dataSources/Posts';

type Context = {
  +dataSources: DataSource,
};

export default function Users(_: mixed, { id }: { +id: string }, { dataSources }: Context): Post {
  return dataSources.posts.getPost(fromGlobalId((id: any)));
}
