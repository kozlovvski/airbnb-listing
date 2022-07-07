import styled from '@emotion/styled';
import { WRAPPER_WIDTH } from 'styles/styles.contants';

export const ListingListWrapper = styled.ul`
  display: grid;
  max-width: ${WRAPPER_WIDTH}px;
  margin: 0 auto;
  gap: ${({ theme }) => theme.space[6]};
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
