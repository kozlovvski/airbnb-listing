import styled from '@emotion/styled';

export const ListingListWrapper = styled.ul``;

export const ListingListElement = styled.li<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? 'red' : 'blue')};
  transform: scale(${({ isSelected }) => (isSelected ? 1.5 : 1)});
  transition: color 1s ease-in-out, transform 1s ease-in-out;
`;
