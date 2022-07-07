import { LISTINGS_COLLECTION_NAME } from 'services/mongodb/mongodb.constants';
import clientPromise from 'services/mongodb/mongodb.service';

export const getListingsFromMongo = async () => {
  const client = await clientPromise;
  const collection = client.db().collection(LISTINGS_COLLECTION_NAME);

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
