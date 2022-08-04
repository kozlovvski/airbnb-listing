import { Divider } from '@chakra-ui/react';
import styled from '@emotion/styled';
import DetailedListingBasicInfo from 'components/listings/detailed_listing/DetailedListingBasicInfo/DetailedListingBasicInfo.component';
import DetailedListingHero from 'components/listings/detailed_listing/DetailedListingHero/DetailedListingHero.component';
import { useGetDetailedListingQuery } from 'generated/graphql-codegen';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { WRAPPER_WIDTH } from 'styles/styles.contants';

import {
  detailedListingAnimationVariants,
  DetailedListingPageWrapper,
} from './index.styles';

const DetailedListingPage: NextPage = (props) => {
  const router = useRouter();
  const id = useRef(router.query.listing_id as string);
  const listing = useGetDetailedListingQuery({ id: id.current }).data?.listing;

  if (!listing) {
    return null;
  }

  return (
    <DetailedListingPageWrapper
      transition={{ type: 'tween', duration: 0.2 }}
      exit="initial"
      initial="initial"
      animate="animate"
      variants={detailedListingAnimationVariants}
      {...props}
    >
      <DetailedListingHero listing={listing} />
      <Content>
        <DetailedListingBasicInfo listing={listing} />
        <Divider my={4} />
      </Content>
    </DetailedListingPageWrapper>
  );
};

export const Content = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.space[4]};
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${WRAPPER_WIDTH}px) {
    margin-top: -${({ theme }) => theme.space[5]};
    border-radius: ${({ theme }) => theme.radii['3xl']};
  }
`;

export default DetailedListingPage;
