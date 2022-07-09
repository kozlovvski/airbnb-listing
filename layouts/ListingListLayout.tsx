import ListingList from 'components/listings/ListingList/ListingList.component';
import { useGetListingsQuery } from 'generated/graphql-codegen';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

/**
 * This Layout component is used to render listings in order to prevent
 * rerenders while changing the page.
 */
export const ListingListLayout = ({ children }: PropsWithChildren) => {
  const { data } = useGetListingsQuery();
  const { listing_id } = useRouter().query;

  if (Array.isArray(listing_id)) {
    console.error('[ListingLayouy] listing_id is an array');
    return null;
  }

  const listings = data?.listingsAndReviews;

  return (
    <div>
      {listings && listings.length > 0 && (
        <ListingList listings={listings} selectedId={listing_id} />
      )}
      {children}
    </div>
  );
};
