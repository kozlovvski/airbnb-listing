import { getListingThumbnail } from 'components/listings/ListingList/ListingListItem/ListingListItem.helpers';
import { useGetDetailedListingQuery } from 'generated/graphql-codegen';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import {
  detailedListingAnimationVariants,
  DetailedListingPageImage,
  DetailedListingPageWrapper,
} from './index.styles';

const DetailedListingPage: NextPage = (props) => {
  const router = useRouter();
  const id = useRef(router.query.listing_id as string);
  const listing = useGetDetailedListingQuery({ id: id.current }).data?.listing;

  if (!listing) {
    return null;
  }

  const thumbnail = getListingThumbnail(listing);

  return (
    <DetailedListingPageWrapper
      transition={{ type: 'tween', duration: 0.2 }}
      exit="initial"
      initial="initial"
      animate="animate"
      variants={detailedListingAnimationVariants}
      {...props}
    >
      <DetailedListingPageImage src={thumbnail} />
      {JSON.stringify(listing)}
    </DetailedListingPageWrapper>
  );
};

export default DetailedListingPage;
