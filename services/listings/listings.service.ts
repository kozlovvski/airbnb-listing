import { QueryFunction } from 'react-query';

export const getListingsFromAPIRoute: QueryFunction<Listing[]> = async ({
  signal,
}) => {
  const res = await fetch('/api/getListings', {
    signal,
  });
  return res.json();
};
