import { ArrowBackIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { getListingThumbnail } from 'components/listings/ListingList/ListingListItem/ListingListItem.helpers';
import Link from 'next/link';
import { WRAPPER_WIDTH } from 'styles/styles.contants';
import { DetailedListing } from 'typings/listings/DetailedListing';

const IMAGE_HEIGHT = 300;

type Props = {
  listing: DetailedListing;
};

const DetailedListingHero = ({ listing }: Props) => {
  const thumbnail = getListingThumbnail(listing);

  return (
    <Wrapper>
      <Buttons>
        <Link href="/">
          <IconButton
            colorScheme="blackAlpha"
            aria-label="Go back to properties list"
            icon={<ArrowBackIcon fontSize={25} />}
          />
        </Link>
      </Buttons>
      <HeroImage src={thumbnail} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: ${IMAGE_HEIGHT}px;

  @media (min-width: ${WRAPPER_WIDTH + 1}px) {
    margin: 0 ${({ theme }) => theme.space[4]};
    border-radius: ${({ theme }) => theme.radii['xl']};
    overflow: hidden;
  }
`;

const Buttons = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  padding: ${({ theme }) => theme.space[4]};

  @media (min-width: ${WRAPPER_WIDTH + 1}px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: ${IMAGE_HEIGHT}px;
  object-position: 50% 50%;
  object-fit: cover;

  @media (max-width: ${WRAPPER_WIDTH}px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export default DetailedListingHero;
