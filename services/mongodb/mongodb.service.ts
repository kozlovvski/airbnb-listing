import { MongoClient } from 'mongodb';

const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;
const options = {};

if (!mongoConnectionString) {
  throw new Error('MONGO_CONNECTION_STRING env is not set');
}

declare module global {
  var _mongoClientPromise: Promise<MongoClient>;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(mongoConnectionString, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(mongoConnectionString, options);
  clientPromise = client.connect();
}

export default clientPromise;
