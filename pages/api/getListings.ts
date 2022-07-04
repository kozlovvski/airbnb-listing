import type { NextApiRequest, NextApiResponse } from "next";
import { LISTINGS_COLLECTION_NAME } from "services/mongodb/mongodb.constants";
import { mongoClient } from "services/mongodb/mongodb.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Listing[]>
) {
  try {
    await mongoClient.connect();
    const db = mongoClient.db();
    const collection = db.collection<Listing>(LISTINGS_COLLECTION_NAME);
    const listings = await collection.find({}).limit(10).toArray();
    res.status(200).json(listings);
  } catch (err) {
    res.status(500).json([]);
  } finally {
    await mongoClient.close();
  }
}
