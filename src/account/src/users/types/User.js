// @flow

import { toGlobalId } from '@adeira/graphql-global-id';

import type { User as UserDataSource } from '../../dataSources/Users';

type UserResolver = {
  +id: UserDataSource => string,
};
const User: UserResolver = {
  id: ({ _id: id }) => {
    return toGlobalId('User', id);
  },
};

export default User;
