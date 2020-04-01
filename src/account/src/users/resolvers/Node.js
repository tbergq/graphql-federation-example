// @flow

import { isTypeOf, fromGlobalId } from '@adeira/graphql-global-id';
import { decode } from '@adeira/graphql-global-id/src/Encoder';

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

type ExternalType = $ReadOnly<{
  ...Typename,
  id: string,
}>;

type NodeResolver = NodeUser | ExternalType;

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
  const [type] = decode((id: any)).split(':');
  return {
    id,
    __typename: type,
  };
}
