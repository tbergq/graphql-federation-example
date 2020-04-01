// @flow

import { config } from 'dotenv';

import connection from '../db/connection';
import Posts from './Posts';
import PostModel from '../db/posts';

config();

connection.openUri(process.env.POSTS_DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

export type DataSource = {
  +posts: Posts,
};

export default function createDataSources(): DataSource {
  const posts = new Posts(PostModel);
  return {
    posts,
  };
}
