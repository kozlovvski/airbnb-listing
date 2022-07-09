import React from 'react';
import { Listing } from 'typings/listings/Listing';

import { ListingListWrapper } from './ListingList.styles';
import ListingListItem from './ListingListItem/ListingListItem.component';

type Props = {
  listings: (Listing | null)[];
  selectedId?: string;
};

const ListingList = ({ listings, selectedId }: Props) => {
  return (
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
    </ListingListWrapper>
  );
};

export default ListingList;
