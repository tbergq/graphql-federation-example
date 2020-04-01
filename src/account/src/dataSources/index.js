// @flow

import { config } from 'dotenv';
import { invariant } from '@adeira/js';

import connection from '../db/connection';
import Users from './Users';
import UserModel from '../db/users';

config();

const { ACCOUNT_DB_URL } = process.env;

invariant(ACCOUNT_DB_URL != null, 'Missing env variable ACCOUNT_DB_URL');

connection.openUri(ACCOUNT_DB_URL, {
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
