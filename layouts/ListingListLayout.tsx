import { useQuery } from 'react-query';
import { getListingsFromAPIRoute } from 'services/listings/listings.api.service';
import ListingList from 'components/listings/ListingList/ListingList.component';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

/**
 * This Layout component is used to render listings in order to prevent
 * rerenders while changing the page.
 */
export const ListingListLayout = ({ children }: PropsWithChildren) => {
  const { data } = useQuery('listings', getListingsFromAPIRoute, {
    refetchOnWindowFocus: false,
  });
  const { listing_id } = useRouter().query;

  if (Array.isArray(listing_id)) {
    console.error('[ListingLayouy] listing_id is an array');
    return null;
  }

  return (
    <div>
      {data && data.length > 0 && (
        <ListingList listings={data} selectedId={listing_id} />
      )}
      {children}
    </div>
  );
};
