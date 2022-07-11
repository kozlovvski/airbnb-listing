import { useRouter } from '__mocks__/next/router';
import { theme } from '@chakra-ui/react';
import { render, renderHook } from '@testing-library/react';
import { mockedListing } from 'tests/data/listings';
import { i18nForTests, wrapper } from 'tests/testUtils';
import { DefinedListing } from 'typings/listings/Listing';

import ListingListItem from './ListingListItem.component';
import { getListingThumbnail, stringToColor } from './ListingListItem.helpers';
import { useJSXForLocalizedCountable } from './ListingListItem.hooks';

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

describe('useJSXForLocalizedCountable', () => {
  it('should throw when locale is undefined', () => {
    // given
    useRouter.mockReturnValue({} as any);
    const name = 'bed';
    const countable = 1;
    const namespace = 'listings';
    // when
    // then
    expect(() =>
      renderHook(() => useJSXForLocalizedCountable(name, countable, namespace))
    ).toThrow();
  });
});

describe('getLocalizedCountable', () => {
  const { getLocalizedCountable } = useJSXForLocalizedCountable;

  describe('pl locale', () => {
    beforeAll(() => {
      i18nForTests.changeLanguage('pl');
    });

    afterAll(() => {
      i18nForTests.changeLanguage('cimode');
    });

    it('should return a correct string for a singular countable', () => {
      // given
      const name = 'bed';
      const countable = 1;
      const namespace = 'listings';
      const locale = 'pl';
      // when
      const result = getLocalizedCountable(
        name,
        countable,
        namespace,
        locale,
        i18nForTests.t
      );
      // then
      expect(result).toBe('łóżko');
    });

    it('should return a correct string for a countable with last digit in 2-4 range', () => {
      // given
      const name = 'bathroom';
      const countable = 23;
      const namespace = 'listings';
      const locale = 'pl';
      // when
      const result = getLocalizedCountable(
        name,
        countable,
        namespace,
        locale,
        i18nForTests.t
      );
      // then
      expect(result).toBe('łazienki');
    });

    it('should return a correct string for a plural countable', () => {
      // given
      const name = 'bathroom';
      const countable = 5;
      const namespace = 'listings';
      const locale = 'pl';
      // when
      const result = getLocalizedCountable(
        name,
        countable,
        namespace,
        locale,
        i18nForTests.t
      );
      // then
      expect(result).toBe('łazienek');
    });
  });

  describe('en locale', () => {
    beforeAll(() => {
      i18nForTests.changeLanguage('en');
    });

    afterAll(() => {
      i18nForTests.changeLanguage('cimode');
    });

    it('should return a correct string for a singular countable', () => {
      // given
      const name = 'bathroom';
      const countable = 1;
      const namespace = 'listings';
      const locale = 'en';
      // when
      const result = getLocalizedCountable(
        name,
        countable,
        namespace,
        locale,
        i18nForTests.t
      );
      // then
      expect(result).toBe('bathroom');
    });

    it('should return a correct string for a plural countable', () => {
      // given
      const name = 'bed';
      const countable = 27;
      const namespace = 'listings';
      const locale = 'en';
      // when
      const result = getLocalizedCountable(
        name,
        countable,
        namespace,
        locale,
        i18nForTests.t
      );
      // then
      expect(result).toBe('beds');
    });
  });
});
