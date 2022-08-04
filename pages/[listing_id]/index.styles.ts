import styled from '@emotion/styled';
import { motion, Variants } from 'framer-motion';
import { WRAPPER_WIDTH } from 'styles/styles.contants';

const IMAGE_HEIGHT = 300;

export const detailedListingAnimationVariants: Variants = {
  initial: {
    y: 60,
  },
  animate: {
    y: 0,
  },
};

export const DetailedListingPageWrapper = styled(motion.div)`
  max-width: ${WRAPPER_WIDTH}px;
  margin: 0 auto;
`;

export const DetailedListingPageImage = styled.img`
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

export const DetailedListingPageHeroButtons = styled.div`
  padding: ${({ theme }) => theme.space[4]};

  @media (max-width: ${WRAPPER_WIDTH}px) {
    min-height: ${IMAGE_HEIGHT - 30}px;
  }

  > * {
    position: sticky;
    top: ${({ theme }) => theme.space[4]};
  }
`;
