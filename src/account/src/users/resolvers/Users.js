// @flow

import type { DataSource } from '../../dataSources';
import type { User } from '../../dataSources/Users';

type Context = {
  +dataSources: DataSource,
};
export default function Users(_: mixed, __: mixed, { dataSources }: Context): $ReadOnlyArray<User> {
  return dataSources.users.getAll();
}
