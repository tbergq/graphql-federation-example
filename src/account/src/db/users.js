// @flow

import { Schema, type MongooseModel } from 'mongoose';

import connection from './connection';

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

const User: MongooseModel = connection.model('users', UserSchema);

export default User;
