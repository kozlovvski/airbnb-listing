import styled from '@emotion/styled';
import { motion, Variants } from 'framer-motion';
import { WRAPPER_WIDTH } from 'styles/styles.contants';

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

export const DetailedListingPageContent = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.space[4]};
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${WRAPPER_WIDTH}px) {
    margin-top: -${({ theme }) => theme.space[5]};
    border-radius: ${({ theme }) => theme.radii['3xl']};
  }
`;
