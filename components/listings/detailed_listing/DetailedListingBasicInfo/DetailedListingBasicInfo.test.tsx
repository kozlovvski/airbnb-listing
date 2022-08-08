import { render } from '@testing-library/react';
import { wrapper } from 'tests/testUtils';
import { DetailedListing } from 'typings/listings/DetailedListing';

import DetailedListingBasicInfo from './DetailedListingBasicInfo.component';

describe('DetailedListingBasicInfo', () => {
  let listing: DetailedListing;
  beforeEach(() => {
    listing = {
      name: 'Test name',
      summary: 'Lorem ipsum',
      review_scores: {
        review_scores_rating: 15,
      },
      property_type: 'Office',
    };
  });

  it('should render a name', () => {
    // given
    // when
    const result = render(<DetailedListingBasicInfo listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByText('Test name')).toBeInTheDocument();
  });
  it('should render a property type', () => {
    // given
    // when
    const result = render(<DetailedListingBasicInfo listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByText('Office')).toBeInTheDocument();
  });

  it('should render a summary', () => {
    // given
    // when
    const result = render(<DetailedListingBasicInfo listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByText('Lorem ipsum')).toBeInTheDocument();
  });

  it('should render a review score', () => {
    // given
    // when
    const result = render(<DetailedListingBasicInfo listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByText('1.5')).toBeInTheDocument();
  });
});
