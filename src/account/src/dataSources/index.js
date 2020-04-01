// @flow

import connection from '../db/connection';
import Users from './Users';
import UserModel from '../db/users';

connection.openUri('mongodb://localhost:27017/account', {
  useCreateIndex: true,
  useNewUrlParser: true,
});

export type DataSource = {
  +users: Users,
};

export default function createDataSources(): DataSource {
  return {
    users: new Users(UserModel),
  };
}
