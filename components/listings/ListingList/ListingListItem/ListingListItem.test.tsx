import { theme } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { mockedListing } from 'tests/data/listings';
import { wrapper } from 'tests/testUtils';
import { DefinedListing } from 'typings/listings/Listing';

import ListingListItem from './ListingListItem.component';
import { getListingThumbnail, stringToColor } from './ListingListItem.helpers';

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

describe('stringToColor', () => {
  it('should return a gray color string if provided string is falsy', () => {
    // given
    const str = '';
    // when
    const result = stringToColor(str);
    // then
    expect(result).toBe(theme.colors.gray[200]);
  });

  it('should return a hex color string for a correct string', () => {
    // given
    const str = 'dummy string';
    // when
    const result = stringToColor(str);
    // then
    expect(result).toMatch(/^#[0-9A-F]{6}$/i);
  });
});
