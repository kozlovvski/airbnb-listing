import { Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

import {
  ListingListItemThumbnailWrapper,
  ListingListItemWrapper,
} from '../ListingListItem.styles';

const ListingListItemSkeleton = () => (
  <ListingListItemWrapper>
    <ListingListItemThumbnailWrapper>
      <Skeleton pos="absolute" w="100%" h="100%" />
    </ListingListItemThumbnailWrapper>
    <SkeletonText mt={3} skeletonHeight={4} lineHeight={2} noOfLines={2} />
  </ListingListItemWrapper>
);

export default ListingListItemSkeleton;
