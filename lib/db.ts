/* eslint-disable no-var */
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || ''; // Your MongoDB URI
console.log(uri);

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!globalThis._mongoClientPromise) {
  client = new MongoClient(uri, options);
  globalThis._mongoClientPromise = client.connect();
}
// eslint-disable-next-line prefer-const
clientPromise = globalThis._mongoClientPromise;

export default clientPromise;
