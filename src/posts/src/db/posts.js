// @flow

import { Schema, type MongooseModel } from 'mongoose';

import connection from './connection';

const PostsSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Posts: MongooseModel = connection.model('posts', PostsSchema);

export default Posts;
