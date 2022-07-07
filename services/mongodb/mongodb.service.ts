import { Db, MongoClient } from 'mongodb';

const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;

type Connection = {
  client: MongoClient;
  db: Db;
};

let cachedConnection: Connection;

export async function connectToDatabase() {
  if (!mongoConnectionString) {
    throw new Error('MONGO_CONNECTION_STRING env is not set');
  }

  if (cachedConnection) return cachedConnection;

  const client = await MongoClient.connect(mongoConnectionString);
  const db = client.db();

  const connection = {
    client,
    db,
  };

  cachedConnection = connection;
  return connection;
}
