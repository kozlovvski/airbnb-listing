import ListingList from './ListingList.component';
import { render } from '@testing-library/react';
import { wrapper } from 'tests/testUtils';
import { mockedListingList } from 'tests/data/listings';

describe('ListingList', () => {
  it('should render a list', () => {
    // given
    const listings: Listing[] = [];

    // when
    const result = render(<ListingList listings={listings} />, {
      wrapper,
    });

    // then
    expect(result.getByRole('list')).toBeInTheDocument();
  });

  it('should render correct number of elements', () => {
    // given
    const listings = mockedListingList;

    // when
    const result = render(<ListingList listings={listings} />, {
      wrapper,
    });

    // then
    expect(result.getAllByRole('listitem')).toHaveLength(2);
  });
});
