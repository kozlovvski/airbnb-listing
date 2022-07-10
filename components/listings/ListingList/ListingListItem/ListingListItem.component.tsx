import { Text } from '@chakra-ui/react';
import { formatPrice } from 'helpers/price.helpers';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { DefinedListing } from 'typings/listings/Listing';

import { getListingThumbnail } from './ListingListItem.helpers';
import {
  ListingListItemThumbnail,
  ListingListItemThumbnailWrapper,
  ListingListItemWrapper,
} from './ListingListItem.styles';
import { ListingListItemOverlay } from './ListingListItemOverlay/ListingListItemOverlay.component';

type Props = {
  listing: DefinedListing;
  isSelected: boolean;
};

const ListingListItem = ({ listing, isSelected }: Props) => {
  const thumbnail = useMemo(() => getListingThumbnail(listing), [listing]);
  const { name, price } = listing;

  return (
    <Link href={`/${listing._id}`}>
      <ListingListItemWrapper data-testid="listing-list-item">
        <ListingListItemOverlay isSelected={isSelected} />
        <ListingListItemThumbnailWrapper>
          <ListingListItemThumbnail src={thumbnail} />
        </ListingListItemThumbnailWrapper>
        <Text fontWeight="bold">{name}</Text>
        <Text color="gray.500">{formatPrice(price)} / night</Text>
      </ListingListItemWrapper>
    </Link>
  );
};

export default ListingListItem;
