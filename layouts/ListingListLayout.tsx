import ListingList from 'components/listings/ListingList/ListingList.component';
import { useInfiniteGetListingsQuery } from 'components/listings/ListingList/ListingList.hooks';
import { useRouter } from 'next/router';
import { PropsWithChildren, useCallback } from 'react';

/**
 * This Layout component is used to render listings in order to prevent
 * rerenders while changing the page.
 */
export const ListingListLayout = ({ children }: PropsWithChildren) => {
  const { data, fetchNextPage } = useInfiniteGetListingsQuery(
    {
      pageParam: 0,
    },
    {
      getNextPageParam: (_lastpage, pages) => {
        return pages.length;
      },
    }
  );
  const { listing_id } = useRouter().query;
  const onSkeletonInView = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  if (Array.isArray(listing_id)) {
    console.error('[ListingLayouy] listing_id is an array');
    return null;
  }

  return (
    <div>
      <ListingList
        onSkeletonInView={onSkeletonInView}
        pages={data?.pages}
        selectedId={listing_id}
      />
      {children}
    </div>
  );
};
