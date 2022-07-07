import styled from '@emotion/styled';

export const ListingListItemWrapper = styled.li`
  list-style-type: none;
`;

export const ListingListItemThumbnailWrapper = styled.div`
  position: relative;

  ::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const ListingListItemThumbnail = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
