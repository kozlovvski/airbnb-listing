import { Badge, Flex, Text } from '@chakra-ui/react';
import { MotionConfig, useMotionValue } from 'framer-motion';
import { formatPrice } from 'helpers/price.helpers';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useMemo, useRef } from 'react';
import { DefinedListing } from 'typings/listings/Listing';

import { getListingThumbnail, stringToColor } from './ListingListItem.helpers';
import { useJSXForLocalizedCountable } from './ListingListItem.hooks';
import {
  ListingListItemContent,
  ListingListItemContentWrapper,
  ListingListItemTextContainer,
  ListingListItemThumbnail,
  ListingListItemWrapper,
} from './ListingListItem.styles';
import { ListingListItemOverlay } from './ListingListItemOverlay/ListingListItemOverlay.component';

type Props = {
  listing: DefinedListing;
  isSelected: boolean;
};

const ANIMATION_DURATION = 500;

const ListingListItem = ({ listing, isSelected }: Props) => {
  const { name, price, property_type, beds } = listing;
  const bathrooms = listing.bathrooms ? Number(listing.bathrooms) : undefined;

  const { t } = useTranslation();
  const contentRef = useRef<HTMLDivElement>(null);
  const thumbnail = useMemo(() => getListingThumbnail(listing), [listing]);

  const y = useMotionValue(0);
  const borderWidth = useMotionValue(isSelected ? 0 : 1);
  const zIndex = useMotionValue(isSelected ? 2 : 0);

  const bathroomsJSX = useJSXForLocalizedCountable('bathroom', bathrooms);
  const bedsJSX = useJSXForLocalizedCountable('bed', beds);

  useEffect(() => {
    if (!isSelected) {
      setTimeout(() => {
        zIndex.set(0);
        borderWidth.set(1);
      }, ANIMATION_DURATION);
    } else {
      zIndex.set(1);
      borderWidth.set(0);
    }
  }, [isSelected]);

  return (
    <Link href={`/${listing._id}`} scroll={false}>
      <ListingListItemWrapper data-testid="listing-list-item">
        <ListingListItemOverlay isSelected={isSelected} />
        <MotionConfig
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 30,
            duration: ANIMATION_DURATION / 1000,
          }}
        >
          <ListingListItemContentWrapper
            isSelected={isSelected}
            style={{ zIndex }}
          >
            <ListingListItemContent
              ref={contentRef}
              style={{ y, borderWidth }}
              layout
            >
              <ListingListItemThumbnail
                style={{
                  originX: 'center',
                  originY: 'center',
                }}
                src={thumbnail}
                layout
                isSelected={isSelected}
              />
              <ListingListItemTextContainer layout="position">
                <Flex mb={1}>
                  <Badge color={stringToColor(property_type)}>
                    {property_type}
                  </Badge>
                  {bedsJSX}
                  {bathroomsJSX}
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
                    {` / ${t('listings:night')}`}
                  </Text>
                </Text>
              </ListingListItemTextContainer>
            </ListingListItemContent>
          </ListingListItemContentWrapper>
        </MotionConfig>
      </ListingListItemWrapper>
    </Link>
  );
};

export default ListingListItem;
