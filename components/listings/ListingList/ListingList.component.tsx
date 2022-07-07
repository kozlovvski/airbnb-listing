import React from 'react';
import { ListingListWrapper } from './ListingList.styles';
import Link from 'next/link';
import ListingListItem from './ListingListItem/ListingListItem.component';

type Props = {
  listings: Listing[];
  selectedId?: string;
};

const ListingList = ({ listings, selectedId }: Props) => {
  return (
    <ListingListWrapper>
      {listings.map((listing) => (
        <ListingListItem listing={listing} key={listing._id} />
      ))}
    </ListingListWrapper>
  );
};

export default ListingList;
