import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ListingListItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  height: 259px;
  list-style-type: none;
`;

export const ListingListItemContentWrapper = styled(motion.div)<{
  isSelected?: boolean;
}>`w
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  pointer-events: none;
  z-index: 0;

  ${({ isSelected }) =>
    isSelected &&
    `
    position: fixed;
    overflow: hidden;
    padding: 40px 20px;
    top: 0;
    left: 0;
  `}
`;

export const ListingListItemContent = styled(motion.div)`
  max-width: 700px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.lg};
  pointer-events: all;
  background-color: ${({ theme }) => theme.colors.white};
  list-style-type: none;
`;

export const ListingListItemThumbnail = styled(motion.img)<{
  isSelected: boolean;
}>`
  width: 700px;
  height: ${({ isSelected }) => (isSelected ? '300px' : '150px')};
  object-position: 50% 50%;
  object-fit: cover;
`;

export const ListingListItemTextContainer = styled(motion.div)`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;
