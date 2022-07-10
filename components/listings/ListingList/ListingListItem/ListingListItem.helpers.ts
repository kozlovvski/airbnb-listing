import { theme } from '@chakra-ui/react';
import { DefinedListing } from 'typings/listings/Listing';

export const getListingThumbnail = ({ images }: DefinedListing): string => {
  if (!images) return '';

  const { thumbnail_url, medium_url, picture_url, xl_picture_url } = images;
  return thumbnail_url || medium_url || picture_url || xl_picture_url || '';
};

/**
 * This function generates a color based on provided string.
 * Generated color is always the same for the same string.
 */
export const stringToColor = (str: string | undefined | null): string => {
  if (!str) {
    return theme.colors.gray[200];
  }

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let Color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    Color += ('00' + value.toString(16)).substr(-2);
  }
  return Color;
};
