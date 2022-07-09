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
  },
];

export const mockedListing: DefinedListing = {
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
};
