import styled from '@emotion/styled';

export const ListingListItemWrapper = styled.li`
  list-style-type: none;
`;

export const ListingListItemThumbnailWrapper = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.space[2]};

  @supports (aspect-ratio: 1) {
    aspect-ratio: 1;
  }

  @supports not (aspect-ratio: 1) {
    ::after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }

  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    pointer-events: none;
  }
`;

export const ListingListItemThumbnail = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
