// @flow

import { MongoDataSource } from 'apollo-datasource-mongodb';

export type User = {
  +_id: string,
  +username: string,
};
export default class Users extends MongoDataSource {
  getUser(userId: string): Promise<User> {
    return this.model.findById(userId);
  }

  getAll(): $ReadOnlyArray<User> {
    return this.model.find();
  }
}
