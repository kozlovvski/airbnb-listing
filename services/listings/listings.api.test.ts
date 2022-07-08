import { FetchMock } from 'jest-fetch-mock';
import { QueryFunctionContext } from 'react-query';
import { mockedListingList } from 'tests/data/listings';

import { getListingsFromAPIRoute } from './listings.api.service';

declare var fetch: FetchMock;

beforeEach(() => {
  fetch.resetMocks();
});

describe('getListingsFromAPIRoute', () => {
  it('should return an array of listings', async () => {
    // given
    fetch.mockResponseOnce(JSON.stringify(mockedListingList));

    // when
    const listings = await getListingsFromAPIRoute({} as QueryFunctionContext);

    // expect
    expect(listings).toEqual(mockedListingList);
  });
});
