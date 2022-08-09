import { render } from '@testing-library/react';
import { mockedListing } from 'tests/data/listings';
import { wrapper } from 'tests/testUtils';
import { DetailedListing } from 'typings/listings/DetailedListing';

import DetailedListingHero from './DetailedListingHero.component';

describe('DetailedListingHero', () => {
  let listing: DetailedListing;
  beforeEach(() => {
    listing = mockedListing;
  });

  it('should render an image', () => {
    // given
    // when
    const result = render(<DetailedListingHero listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByRole('img')).toBeInTheDocument();
  });
});
