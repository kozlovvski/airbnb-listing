import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

type Props = {
  isSelected: boolean;
};

const StyledComponent = styled(motion.div)<Props>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.8);
  pointer-events: ${({ isSelected }) => (isSelected ? 'auto' : 'none')};
`;

export const ListingListItemOverlay = ({ isSelected }: Props) => (
  <Link href="/">
    <StyledComponent
      isSelected={isSelected}
      initial={false}
      animate={{ opacity: isSelected ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="overlay"
    />
  </Link>
);
