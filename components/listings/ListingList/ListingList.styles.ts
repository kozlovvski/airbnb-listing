import styled from '@emotion/styled';
import { WRAPPER_WIDTH } from 'styles/styles.contants';

const MIN_CARD_WIDTH = 280;

export const ListingListWrapper = styled.ul`
  display: grid;
  max-width: ${WRAPPER_WIDTH}px;
  padding: 0 20px;
  margin: 0 auto;
  gap: ${({ theme }) => theme.space[6]};
  grid-template-columns: repeat(auto-fill, minmax(${MIN_CARD_WIDTH}px, 1fr));
`;
