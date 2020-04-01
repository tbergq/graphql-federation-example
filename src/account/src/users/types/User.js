// @flow

import { toGlobalId, fromGlobalId } from '@adeira/graphql-global-id';

import type { User as UserDataSource } from '../../dataSources/Users';
import type { DataSource } from '../../dataSources';

type Context = {
  +dataSources: DataSource,
};
type ResolveUser = {
  +id: string,
};
type UserResolver = {
  +id: UserDataSource => string,
  +__resolveReference: (ResolveUser, Context) => Promise<UserDataSource>,
};

const User: UserResolver = {
  id: ({ _id: id }) => {
    return toGlobalId('User', id);
  },

  __resolveReference: async ({ id }: ResolveUser, { dataSources }: Context) => {
    const user = await dataSources.users.getUser(fromGlobalId((id: any)));
    return user;
  },
};

export default User;
