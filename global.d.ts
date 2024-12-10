/* eslint-disable no-var */
import { MongoClient } from 'mongodb';

declare global {
  // Add a custom type definition for `_mongoClientPromise`
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export {};
