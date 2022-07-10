import { GetListingsQuery } from 'generated/graphql-codegen';
import React from 'react';

import { ListingListWrapper } from './ListingList.styles';
import ListingListItem from './ListingListItem/ListingListItem.component';
import ListingListItemSkeleton from './ListingListItem/ListingListItemSkeleton/ListingListItemSkeleton.component';

type Props = {
  pages: GetListingsQuery[] | undefined;
  selectedId?: string;
};

const ListingList = ({ pages, selectedId }: Props) => (
  <ListingListWrapper>
    {pages &&
      pages.map(({ listings }) =>
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
      <ListingListItemSkeleton key={`skeleton_${i}`} />
    ))}
  </ListingListWrapper>
);

export default ListingList;
