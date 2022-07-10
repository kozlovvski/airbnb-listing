import { useInView } from 'framer-motion';
import { GetListingsQuery } from 'generated/graphql-codegen';
import React, { useEffect, useRef } from 'react';

import { ListingListWrapper } from './ListingList.styles';
import ListingListItem from './ListingListItem/ListingListItem.component';
import ListingListItemSkeleton from './ListingListItem/ListingListItemSkeleton/ListingListItemSkeleton.component';

type Props = {
  pages: GetListingsQuery[] | undefined;
  onSkeletonInView: () => void;
  selectedId?: string;
};

const ListingList = ({ pages, onSkeletonInView, selectedId }: Props) => {
  const firstSkeletonRef = useRef<HTMLDivElement>(null);
  const isSkeletonInView = useInView(firstSkeletonRef);

  useEffect(() => {
    isSkeletonInView && onSkeletonInView();
  }, [isSkeletonInView, onSkeletonInView]);

  return (
    <ListingListWrapper>
      {pages &&
        pages?.map(({ listings }) =>
          listings
            ? listings.map((listing) =>
                listing ? (
                  <ListingListItem
                    listing={listing}
                    key={listing._id}
                    isSelected={listing._id === selectedId}
                  />
                ) : null
              )
            : null
        )}
      {[...Array(20)].map((_, i) => (
        <ListingListItemSkeleton
          ref={i === 0 ? firstSkeletonRef : null}
          key={`skeleton_${i}`}
        />
      ))}
    </ListingListWrapper>
  );
};

export default ListingList;
