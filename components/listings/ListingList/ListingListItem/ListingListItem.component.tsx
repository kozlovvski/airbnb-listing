import React, { useMemo } from 'react';
import {
  ListingListItemThumbnail,
  ListingListItemThumbnailWrapper,
  ListingListItemWrapper,
} from './ListingListItem.styles';
import Link from 'next/link';
import { getListingThumbnail } from './ListingListItem.helpers';

type Props = {
  listing: Listing;
  isSelected: boolean;
};

const ListingListItem = ({ listing, isSelected }: Props) => {
  const thumbnail = useMemo(() => getListingThumbnail(listing), [listing]);

  return (
    <Link href={`/${listing._id}`}>
      <ListingListItemWrapper>
        <ListingListItemThumbnailWrapper>
          <ListingListItemThumbnail src={thumbnail} />
        </ListingListItemThumbnailWrapper>
      </ListingListItemWrapper>
    </Link>
  );
};

export default ListingListItem;
