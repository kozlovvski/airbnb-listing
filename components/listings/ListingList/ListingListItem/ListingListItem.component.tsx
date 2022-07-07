import React, { useMemo } from 'react';
import {
  ListingListItemThumbnail,
  ListingListItemThumbnailWrapper,
  ListingListItemWrapper,
} from './ListingListItem.styles';
import Link from 'next/link';
import { getListingThumbnail } from './ListingListItem.helpers';
import { Text } from '@chakra-ui/react';
import { formatPrice } from 'helpers/price.helpers';

type Props = {
  listing: Listing;
  isSelected: boolean;
};

const ListingListItem = ({ listing, isSelected }: Props) => {
  const thumbnail = useMemo(() => getListingThumbnail(listing), [listing]);
  const { name, price } = listing;

  return (
    <Link href={`/${listing._id}`}>
      <ListingListItemWrapper>
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
