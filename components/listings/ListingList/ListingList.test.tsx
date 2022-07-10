import { cleanup, render } from '@testing-library/react';
import { GetListingsQuery } from 'generated/graphql-codegen';
import { mockedListingListPages } from 'tests/data/listings';
import { wrapper } from 'tests/testUtils';

import ListingList from './ListingList.component';

describe('ListingList', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render a list', () => {
    // given
    const listings: GetListingsQuery[] = [];

    // when
    const result = render(<ListingList pages={listings} />, {
      wrapper,
    });

    // then
    expect(result.getByRole('list')).toBeInTheDocument();
  });

  it('should render correct number of elements', () => {
    // given
    const pages: GetListingsQuery[] = mockedListingListPages;

    // when
    const result = render(<ListingList pages={pages} />, {
      wrapper,
    });

    // then
    expect(result.getAllByTestId('listing-list-item')).toHaveLength(2);
  });
});
