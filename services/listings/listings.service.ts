import { QueryFunction } from 'react-query';
import { NEXT_API_URL } from 'services/services.constants';

export const getListingsFromAPIRoute: QueryFunction<Listing[]> = async ({
  signal,
}) => {
  const res = await fetch(`${NEXT_API_URL}/getListings`, {
    signal,
  });
  return res.json();
};
