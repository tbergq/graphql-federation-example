// @flow

import { MongoDataSource } from 'apollo-datasource-mongodb';

export type Post = {
  +_id: string,
  +userId: string,
  +date: string,
  +body: string,
};

export default class Posts extends MongoDataSource {
  getPost(id: string): Promise<Post> {
    return this.model.findById(id);
  }

  getPostsByUserId(userId: string): Promise<$ReadOnlyArray<Post>> {
    return this.model.find({ userId });
  }
}
