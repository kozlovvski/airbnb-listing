import { DefinedListing } from 'typings/listings/Listing';

export const getListingThumbnail = ({ images }: DefinedListing): string => {
  if (!images) return '';

  const { thumbnail_url, medium_url, picture_url, xl_picture_url } = images;
  return thumbnail_url || medium_url || picture_url || xl_picture_url || '';
};
