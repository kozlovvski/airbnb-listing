import { cleanup, render } from '@testing-library/react';
import { GetListingsQuery } from 'generated/graphql-codegen';
import {
  mockedListingListPagesWithMultiple,
  mockedListingListPagesWithOne,
} from 'tests/data/listings';
import { wrapper } from 'tests/testUtils';

import ListingList from './ListingList.component';

describe('ListingList', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render a list', () => {
    // given
    const pages: GetListingsQuery[] = [];

    // when
    const result = render(
      <ListingList onSkeletonInView={jest.fn} pages={pages} />,
      {
        wrapper,
      }
    );

    // then
    expect(result.queryByRole('list')).toBeInTheDocument();
  });

  it('should render correct number of elements with one page', () => {
    // given
    const pages: GetListingsQuery[] = mockedListingListPagesWithOne;

    // when
    const result = render(
      <ListingList onSkeletonInView={jest.fn} pages={pages} />,
      {
        wrapper,
      }
    );

    // then
    expect(result.queryAllByTestId('listing-list-item')).toHaveLength(2);
  });

  it('should render correct number of elements with multiple pages', () => {
    // given
    const pages: GetListingsQuery[] = mockedListingListPagesWithMultiple;

    // when
    const result = render(
      <ListingList onSkeletonInView={jest.fn} pages={pages} />,
      {
        wrapper,
      }
    );

    // then
    expect(result.queryAllByTestId('listing-list-item')).toHaveLength(4);
  });

  it('should render correct number of elements with no pages', () => {
    // given
    const pages = undefined;

    // when
    const result = render(
      <ListingList onSkeletonInView={jest.fn} pages={pages} />,
      {
        wrapper,
      }
    );

    // then
    expect(result.queryAllByTestId('listing-list-item')).toHaveLength(0);
  });

  it('should render correct number of elements for page with undefined listings', () => {
    // given
    const pages: GetListingsQuery[] = [{ listings: undefined }];

    // when
    const result = render(
      <ListingList onSkeletonInView={jest.fn} pages={pages} />,
      {
        wrapper,
      }
    );

    // then
    expect(result.queryAllByTestId('listing-list-item')).toHaveLength(0);
  });

  it('should render skeleton items', () => {
    // given
    const listings: GetListingsQuery[] = [];

    // when
    const result = render(
      <ListingList onSkeletonInView={jest.fn} pages={listings} />,
      {
        wrapper,
      }
    );

    // then
    expect(
      result.queryAllByTestId('listing-list-item-skeleton')
    ).not.toHaveLength(0);
  });
});
