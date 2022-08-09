import { Theme } from '@chakra-ui/react';
import styled from '@emotion/styled';

const __getBorderRadius = ({ theme }: { theme: Theme }) => theme.radii.lg;

export const ListingListItemWrapper = styled.li`
  position: relative;
  list-style-type: none;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    box-shadow: 0 0 8px 0 ${({ theme }) => theme.colors.gray[400]};
    border-radius: ${__getBorderRadius};
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const ListingListItemThumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-position: 50% 50%;
  object-fit: cover;
  border-top-left-radius: ${__getBorderRadius};
  border-top-right-radius: ${__getBorderRadius};
`;

export const ListingListItemTextContainer = styled.div`
  padding: 20px;
  box-shadow: inset 0 0 1px ${({ theme }) => theme.colors.gray[600]};
  border-bottom-left-radius: ${__getBorderRadius};
  border-bottom-right-radius: ${__getBorderRadius};
`;
