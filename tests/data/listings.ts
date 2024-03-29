import { GetListingsQuery } from 'generated/graphql-codegen';
import { DefinedListing } from 'typings/listings/Listing';

export const mockedListingList: DefinedListing[] = [
  {
    _id: '1',
    name: 'Listing 1',
    price: 50,
    images: {
      thumbnail_url: 'https://via.placeholder.com/150',
      medium_url: 'https://via.placeholder.com/250',
      picture_url: 'https://via.placeholder.com/350',
      xl_picture_url: 'https://via.placeholder.com/450',
    },
    summary: 'Lorem ipsum',
    bathrooms: '2',
    beds: 3,
  },
  {
    _id: '2',
    name: 'Listing 2',
    price: 50,
    images: {
      thumbnail_url: 'https://via.placeholder.com/150',
      medium_url: 'https://via.placeholder.com/250',
      picture_url: 'https://via.placeholder.com/350',
      xl_picture_url: 'https://via.placeholder.com/450',
    },
    summary: 'Lorem ipsum',
    bathrooms: '1',
    beds: 5,
  },
];

export const mockedListing: DefinedListing = mockedListingList[0];

export const mockedListingListPagesWithOne: GetListingsQuery[] = [
  {
    listings: mockedListingList,
  },
];

export const mockedListingListPagesWithMultiple: GetListingsQuery[] = [
  {
    listings: mockedListingList,
  },
  {
    listings: mockedListingList,
  },
];
