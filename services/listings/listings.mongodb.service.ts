import { QueryFunction } from 'react-query';
import { LISTINGS_COLLECTION_NAME } from 'services/mongodb/mongodb.constants';
import { connectToDatabase } from 'services/mongodb/mongodb.service';

export const getListingsFromMongo = async () => {
  const { db } = await connectToDatabase();
  const collection = db.collection(LISTINGS_COLLECTION_NAME);

  return collection
    .aggregate<Listing>([
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
    ])
    .toArray();
};
