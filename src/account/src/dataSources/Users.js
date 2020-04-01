// @flow

import { MongoDataSource } from 'apollo-datasource-mongodb';

export type User = {
  +_id: string,
  +username: string,
};
export default class Users extends MongoDataSource {
  getUser(userId: string): User {
    return this.findOneById(userId);
  }

  getAll(): $ReadOnlyArray<User> {
    return this.model.find();
  }
}
