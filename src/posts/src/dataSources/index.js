// @flow

import connection from '../db/connection';
import Posts from './Posts';
import PostModel from '../db/posts';

connection.openUri('mongodb://localhost:27017/posts', {
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
