import type { NextApiRequest, NextApiResponse } from 'next';
import { getListingsFromMongo } from 'services/listings/listings.mongodb.service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Listing[]>
) {
  try {
    const listings = await getListingsFromMongo();

    res.status(200).json(listings);
  } catch (err) {
    res.status(500).json([]);
  }
}
