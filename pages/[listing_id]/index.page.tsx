import { Divider } from '@chakra-ui/react';
import DetailedListingAmenities from 'components/listings/detailed_listing/DetailedListingAmenities/DetailedListingAmenities.component';
import DetailedListingBasicInfo from 'components/listings/detailed_listing/DetailedListingBasicInfo/DetailedListingBasicInfo.component';
import DetailedListingHero from 'components/listings/detailed_listing/DetailedListingHero/DetailedListingHero.component';
import DetailedListingHost from 'components/listings/detailed_listing/DetailedListingHost/DetailedListingHost.component';
import FullscreenError from 'components/ui/FullscreenError/FullscreenError.component';
import FullscreenLoader from 'components/ui/FullscreenLoader/FullscreenLoader.component';
import { useGetDetailedListingQuery } from 'generated/graphql-codegen';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import {
  detailedListingAnimationVariants,
  DetailedListingPageContent,
  DetailedListingPageWrapper,
} from './index.styles';

const DetailedListingPage: NextPage = (props) => {
  const router = useRouter();
  const [id, setId] = useState<string>();

  useEffect(() => {
    if (!router.isReady) return;

    const _id = router.query.listing_id;

    if (typeof _id === 'string') {
      setId(_id);
    }
  }, [router.isReady, router.query.listing_id]);

  if (!id) {
    return null;
  }

  return <PageContent id={id} {...props} />;
};

const PageContent = ({ id, ...otherProps }: { id: string }) => {
  const { data, isLoading, isSuccess } = useGetDetailedListingQuery({
    id,
  });
  const listing = data?.listing;

  if (isLoading) return <FullscreenLoader />;

  if (isSuccess && listing) {
    return (
      <DetailedListingPageWrapper
        transition={{ type: 'tween', duration: 0.2 }}
        exit="initial"
        initial="initial"
        animate="animate"
        variants={detailedListingAnimationVariants}
        {...otherProps}
      >
        <DetailedListingHero listing={listing} />
        <DetailedListingPageContent>
          <DetailedListingBasicInfo listing={listing} />
          <Divider my={4} />
          <DetailedListingHost listing={listing} />
          <Divider my={4} />
          <DetailedListingAmenities listing={listing} />
        </DetailedListingPageContent>
      </DetailedListingPageWrapper>
    );
  }

  return <FullscreenError status={404} />;
};

export default DetailedListingPage;
