import React from 'react';
import { ListingListElement, ListingListWrapper } from './ListingList.styles';
import Link from 'next/link';

type Props = {
  listings: Listing[];
  selectedId?: string;
};

const ListingList = ({ listings, selectedId }: Props) => {
  return (
    <ListingListWrapper>
      {listings.map(({ _id, name }) => (
        <Link href={`/${_id}`} key={_id}>
          <ListingListElement isSelected={selectedId === _id}>
            {name}
          </ListingListElement>
        </Link>
      ))}
    </ListingListWrapper>
  );
};

export default ListingList;
