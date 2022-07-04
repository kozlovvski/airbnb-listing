import type { NextApiRequest, NextApiResponse } from 'next';
import { LISTINGS_COLLECTION_NAME } from 'services/mongodb/mongodb.constants';
import { mongoClient } from 'services/mongodb/mongodb.service';

const pipeline = [
  { $limit: 10 },
  {
    $project: {
      _id: 1,
      name: 1,
      summary: 1,
      price: {
        $toDouble: '$price',
      },
      images: 1,
    },
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Listing[]>
) {
  try {
    await mongoClient.connect();
    const db = mongoClient.db();
    const collection = db.collection(LISTINGS_COLLECTION_NAME);
    const listings = await collection.aggregate<Listing>(pipeline).toArray();

    res.status(200).json(listings);
  } catch (err) {
    res.status(500).json([]);
  } finally {
    await mongoClient.close();
  }
}
