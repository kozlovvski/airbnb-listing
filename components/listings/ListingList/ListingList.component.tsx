import React from 'react';
import { Listing } from 'typings/listings/Listing';

import { ListingListWrapper } from './ListingList.styles';
import ListingListItem from './ListingListItem/ListingListItem.component';
import ListingListItemSkeleton from './ListingListItem/ListingListItemSkeleton/ListingListItemSkeleton.component';

type Props = {
  listings: (Listing | null)[];
  selectedId?: string;
};

const ListingList = ({ listings, selectedId }: Props) => (
  <ListingListWrapper>
    {listings.map((listing) =>
      listing ? (
        <ListingListItem
          listing={listing}
          key={listing._id}
          isSelected={listing._id === selectedId}
        />
      ) : null
    )}
    {Array(8).map((_, i) => (
      <ListingListItemSkeleton key={`skeleton_${i}`} />
    ))}
  </ListingListWrapper>
);

export default ListingList;
