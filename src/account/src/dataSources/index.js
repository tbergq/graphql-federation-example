// @flow

import { config } from 'dotenv';

import connection from '../db/connection';
import Users from './Users';
import UserModel from '../db/users';

config();

connection.openUri(process.env.ACCOUNT_DB_URL, {
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
