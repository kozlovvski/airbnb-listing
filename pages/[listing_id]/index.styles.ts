import styled from '@emotion/styled';
import { motion, Variants } from 'framer-motion';

export const detailedListingAnimationVariants: Variants = {
  initial: {
    y: 60,
  },
  animate: {
    y: 0,
  },
};

export const DetailedListingPageWrapper = styled(motion.div)`
  display: flex;
  min-height: 100vh;

  > * {
    flex: 1;
  }
`;

export const DetailedListingPageImage = styled(motion.img)`
  object-position: 50% 50%;
  object-fit: cover;
`;
