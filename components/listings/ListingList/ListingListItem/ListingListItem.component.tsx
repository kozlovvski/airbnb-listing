import { Badge, Flex, Text } from '@chakra-ui/react';
import { formatPrice } from 'helpers/price.helpers';
import Link from 'next/link';
import React, { useMemo, useRef } from 'react';
import { DefinedListing } from 'typings/listings/Listing';

import { getListingThumbnail, stringToColor } from './ListingListItem.helpers';
import {
  ListingListItemContent,
  ListingListItemContentWrapper,
  ListingListItemTextContainer,
  ListingListItemThumbnail,
  ListingListItemWrapper,
} from './ListingListItem.styles';

type Props = {
  listing: DefinedListing;
};

const separator = (
  <Text fontSize="xs" mx={1}>
    •
  </Text>
);

const ListingListItem = ({ listing }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const thumbnail = useMemo(() => getListingThumbnail(listing), [listing]);
  const { name, price, property_type, beds } = listing;
  const bathrooms = listing.bathrooms ? Number(listing.bathrooms) : undefined;

  const bedsContent = beds && (
    <>
      {separator}
      <Text fontSize="xs">
        {beds} bed{beds > 1 && 's'}
      </Text>
    </>
  );

  const bathroomsContent = bathrooms && (
    <>
      {separator}
      <Text fontSize="xs">
        {bathrooms} bathroom{bathrooms > 1 && 's'}
      </Text>
    </>
  );

  return (
    <Link href={`/${listing._id}`} prefetch={false}>
      <ListingListItemWrapper data-testid="listing-list-item">
        <ListingListItemContentWrapper>
          <ListingListItemContent ref={contentRef}>
            <ListingListItemThumbnail src={thumbnail} />
            <ListingListItemTextContainer>
              <Flex mb={1}>
                <Badge color={stringToColor(property_type)}>
                  {property_type}
                </Badge>
                {bedsContent}
                {bathroomsContent}
              </Flex>
              <Text
                fontWeight="bold"
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
              >
                {name}
              </Text>
              <Text fontSize="sm">
                {formatPrice(price)}
                <Text as="span" color="gray.500">
                  {' '}
                  / night
                </Text>
              </Text>
            </ListingListItemTextContainer>
          </ListingListItemContent>
        </ListingListItemContentWrapper>
      </ListingListItemWrapper>
    </Link>
  );
};

export default ListingListItem;
