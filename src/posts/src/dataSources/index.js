// @flow

import { config } from 'dotenv';
import { invariant } from '@adeira/js';

import connection from '../db/connection';
import Posts from './Posts';
import PostModel from '../db/posts';

config();

const { POSTS_DB_URL } = process.env;

invariant(POSTS_DB_URL != null, 'Missing POSTS_DB_URL environment url');

connection.openUri(POSTS_DB_URL, {
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
