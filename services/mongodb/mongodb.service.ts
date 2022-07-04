import { MongoClient } from 'mongodb';

const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;

if (!mongoConnectionString) {
  throw new Error('MONGO_CONNECTION_STRING env is not set');
}

export const mongoClient = new MongoClient(mongoConnectionString);
