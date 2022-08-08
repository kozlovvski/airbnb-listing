import { render } from '@testing-library/react';
import { mockedListing } from 'tests/data/listings';
import { wrapper } from 'tests/testUtils';
import { DefinedListing } from 'typings/listings/Listing';

import ListingListItem from './ListingListItem.component';
import { getListingThumbnail } from './ListingListItem.helpers';

describe('ListingListItem', () => {
  let listing: DefinedListing;
  beforeEach(() => {
    listing = mockedListing;
  });

  it('should render a list item', () => {
    // given
    // when
    const result = render(<ListingListItem listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByRole('listitem')).toBeInTheDocument();
  });

  it('should render a name', () => {
    // given
    // when
    const result = render(<ListingListItem listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByText('Listing 1')).toBeInTheDocument();
  });

  it('should render a price', () => {
    // given
    // when
    const result = render(<ListingListItem listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByText(/\$50 USD/i)).toBeInTheDocument();
  });

  it('should render an image', () => {
    // given
    // when
    const result = render(<ListingListItem listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByRole('img')).toBeInTheDocument();
  });

  it('should render a correct number of bathrooms when single', () => {
    // given
    listing.bathrooms = 1;
    // when
    const result = render(<ListingListItem listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByText('1 bathroom')).toBeInTheDocument();
  });

  it('should render a correct number of bathrooms when single', () => {
    // given
    listing.bathrooms = 2;
    // when
    const result = render(<ListingListItem listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByText('2 bathrooms')).toBeInTheDocument();
  });
});

describe('getListingThumbnail', () => {
  it('should return an empty string if images are undefined', () => {
    // given
    const listing = {};
    // when
    const result = getListingThumbnail(listing);
    // then
    expect(result).toBe('');
  });

  it('should return an empty string if none url is provided', () => {
    // given
    const listing = { images: {} };
    // when
    const result = getListingThumbnail(listing);
    // then
    expect(result).toBe('');
  });

  it('should return a correct string', () => {
    // given
    const medium_url = 'test';
    const listing: DefinedListing = { images: { medium_url } };
    // when
    const result = getListingThumbnail(listing);
    // then
    expect(result).toBe(medium_url);
  });
});
