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
      <Skeleton w="100%" h="150px" />
      <Box p={4}>
        <SkeletonText mt={2} skeletonHeight={4} lineHeight={2} noOfLines={2} />
      </Box>
    </ListingListItemWrapper>
  );
});

ListingListItemSkeleton.displayName = 'ListingListItemSkeleton';

export default ListingListItemSkeleton;
