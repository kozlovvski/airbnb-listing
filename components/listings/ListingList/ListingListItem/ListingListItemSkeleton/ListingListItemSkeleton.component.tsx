import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import React, { forwardRef } from 'react';

import { ListingListItemWrapper } from '../ListingListItem.styles';

const ListingListItemSkeleton = forwardRef<HTMLLIElement>((props, ref) => {
  const theme = useTheme();
  return (
    <ListingListItemWrapper
      ref={ref}
      data-testid="listing-list-item-skeleton"
      style={{
        borderWidth: 1,
        borderRadius: theme.radii.lg,
        overflow: 'hidden',
      }}
      {...props}
    >
      <Skeleton w="100%" h="150px" borderRadius={0} />
      <Box p={4}>
        <SkeletonText mt={2} skeletonHeight={3} noOfLines={1} w={20} />
        <SkeletonText mt={2} skeletonHeight={5} noOfLines={1} />
        <SkeletonText mt={2} skeletonHeight={3} noOfLines={1} w={40} />
      </Box>
    </ListingListItemWrapper>
  );
});

ListingListItemSkeleton.displayName = 'ListingListItemSkeleton';

export default ListingListItemSkeleton;
