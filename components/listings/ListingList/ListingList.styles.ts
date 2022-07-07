import styled from '@emotion/styled';
import { WRAPPER_WIDTH } from 'styles/styles.contants';

export const ListingListWrapper = styled.ul`
  display: grid;
  max-width: ${WRAPPER_WIDTH}px;
  margin: 0 auto;
  gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;
