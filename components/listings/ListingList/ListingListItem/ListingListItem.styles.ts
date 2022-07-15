import styled from '@emotion/styled';

export const ListingListItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  height: 259px;
  list-style-type: none;
`;

export const ListingListItemContentWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  pointer-events: none;
  z-index: 0;
`;

export const ListingListItemContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.lg};
  pointer-events: all;
  background-color: ${({ theme }) => theme.colors.white};
  list-style-type: none;
`;

export const ListingListItemThumbnail = styled.img`
  width: 700px;
  height: 150px;
  object-position: 50% 50%;
  object-fit: cover;
`;

export const ListingListItemTextContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;
