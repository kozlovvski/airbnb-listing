import { render } from '@testing-library/react';
import { wrapper } from 'tests/testUtils';
import { DetailedListing } from 'typings/listings/DetailedListing';

import DetailedListingHost from './DetailedListingHost.component';

describe('DetailedListingHost', () => {
  let listing: DetailedListing;
  beforeEach(() => {
    listing = {
      host: {
        host_name: 'John Doe',
        host_thumbnail_url: 'https://example.com/image.png',
        host_location: 'New York, NY',
      },
      room_type: 'Single room',
      property_type: 'Office',
    };
  });

  it('should render an image if available', () => {
    // given
    // when
    const result = render(<DetailedListingHost listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByRole('img')).toBeInTheDocument();
  });

  it('should render a location if available', () => {
    // given
    // when
    const result = render(<DetailedListingHost listing={listing} />, {
      wrapper,
    });
    // then
    expect(
      result.getByText('New York, NY', { exact: false })
    ).toBeInTheDocument();
  });

  it('should render property owner neame if available', () => {
    // given
    // when
    const result = render(<DetailedListingHost listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByText('John Doe', { exact: false })).toBeInTheDocument();
  });
});
