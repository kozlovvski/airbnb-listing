import { render } from '@testing-library/react';
import { wrapper } from 'tests/testUtils';
import { DetailedListing } from 'typings/listings/DetailedListing';

import DetailedListingAmenities from './DetailedListingAmenities.component';

describe('DetailedListingAmenities', () => {
  let listing: DetailedListing;
  beforeEach(() => {
    listing = { amenities: ['wifi', 'TV'] };
  });

  it('should render a list', () => {
    // given
    // when
    const result = render(<DetailedListingAmenities listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByRole('list')).toBeInTheDocument();
  });
  it('should render correct number of list items', () => {
    // given
    // when
    const result = render(<DetailedListingAmenities listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getAllByRole('listitem')).toHaveLength(2);
  });

  it('should render correct list items', () => {
    // given
    // when
    const result = render(<DetailedListingAmenities listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByText('wifi')).toBeInTheDocument();
    expect(result.getByText('TV')).toBeInTheDocument();
  });
});
