import { Skeleton, SkeletonText } from '@chakra-ui/react';
import React, { forwardRef } from 'react';

import {
  ListingListItemThumbnailWrapper,
  ListingListItemWrapper,
} from '../ListingListItem.styles';

const ListingListItemSkeleton = forwardRef<HTMLDivElement>((props, ref) => (
  <ListingListItemWrapper>
    <ListingListItemThumbnailWrapper ref={ref} {...props}>
      <Skeleton pos="absolute" w="100%" h="100%" />
    </ListingListItemThumbnailWrapper>
    <SkeletonText mt={3} skeletonHeight={4} lineHeight={2} noOfLines={2} />
  </ListingListItemWrapper>
));

ListingListItemSkeleton.displayName = 'ListingListItemSkeleton';

export default ListingListItemSkeleton;
