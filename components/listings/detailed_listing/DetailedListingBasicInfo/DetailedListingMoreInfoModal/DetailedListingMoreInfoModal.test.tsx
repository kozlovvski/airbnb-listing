import { fireEvent, render } from '@testing-library/react';
import { wrapper } from 'tests/testUtils';
import { DetailedListing } from 'typings/listings/DetailedListing';

import DetailedListingMoreInfoModal from './DetailedListingMoreInfoModal.component';

describe('DetailedListingMoreInfoModal', () => {
  let listing: DetailedListing;
  beforeEach(() => {
    listing = {
      security_deposit: '2000',
      description: 'Nice house by the lake',
      house_rules: 'Stay quiet',
    };
  });

  it('should render a button with `Show more` text', () => {
    // given
    // when
    const result = render(<DetailedListingMoreInfoModal listing={listing} />, {
      wrapper,
    });
    // then
    expect(result.getByText('Show more')).toBeInTheDocument();
  });

  it('should render a description in a modal', () => {
    // given
    // when
    const result = render(<DetailedListingMoreInfoModal listing={listing} />, {
      wrapper,
    });
    fireEvent.click(result.getByText('Show more'));
    // then
    expect(result.getByText('Nice house by the lake')).toBeInTheDocument();
  });

  it('should render a security_deposit in a modal', () => {
    // given
    // when
    const result = render(<DetailedListingMoreInfoModal listing={listing} />, {
      wrapper,
    });
    fireEvent.click(result.getByText('Show more'));
    // then
    expect(result.getByText(/\$2000/i)).toBeInTheDocument();
  });

  it('should render house rules in a modal', () => {
    // given
    // when
    const result = render(<DetailedListingMoreInfoModal listing={listing} />, {
      wrapper,
    });
    fireEvent.click(result.getByText('Show more'));
    // then
    expect(result.getByText('Stay quiet')).toBeInTheDocument();
  });
});
