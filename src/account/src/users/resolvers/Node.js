// @flow

import { isTypeOf, fromGlobalId } from '@adeira/graphql-global-id';

import { type User } from '../../dataSources/Users';
import { type DataSource } from '../../dataSources';

type Context = {
  +dataSources: DataSource,
};
type Args = {
  +id: string,
};

type Typename = {
  +__typename: string,
};

type NodeUser = $ReadOnly<{
  ...Typename,
  ...User,
}>;

type NodeResolver = NodeUser | null;

export default async function Node(
  _: mixed,
  { id }: Args,
  { dataSources }: Context,
): Promise<NodeResolver> {
  if (isTypeOf('User', id)) {
    const user = await dataSources.users.getUser(fromGlobalId((id: any)));
    return {
      _id: user._id,
      username: user.username,
      __typename: 'User',
    };
  }
  return null;
}
