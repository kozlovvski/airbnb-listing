import ListingListItem from './ListingListItem.component';
import { render } from '@testing-library/react';
import { wrapper } from 'tests/testUtils';
import { mockedListing } from 'tests/data/listings';

describe('ListingListItem', () => {
  it('should render a list item', () => {
    // given
    const listing = mockedListing;
    // when
    const result = render(<ListingListItem listing={listing} isSelected />, {
      wrapper,
    });

    // then
    expect(result.getByRole('listitem')).toBeInTheDocument();
  });

  it('should render a name', () => {
    // given
    const listing = mockedListing;
    // when
    const result = render(<ListingListItem listing={listing} isSelected />, {
      wrapper,
    });

    // then
    expect(result.getByText('Listing 1')).toBeInTheDocument();
  });

  it('should render a price', () => {
    // given
    const listing = mockedListing;
    // when
    const result = render(<ListingListItem listing={listing} isSelected />, {
      wrapper,
    });

    // then
    expect(result.getByText(/\$50 USD/i)).toBeInTheDocument();
  });

  it('should render an image', () => {
    // given
    const listing = mockedListing;
    // when
    const result = render(<ListingListItem listing={listing} isSelected />, {
      wrapper,
    });

    // then
    expect(result.getByRole('img')).toBeInTheDocument();
  });
});
