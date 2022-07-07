export const getListingThumbnail = ({ images }: Listing) => {
  const { thumbnail_url, medium_url, picture_url, xl_picture_url } = images;
  return thumbnail_url || medium_url || picture_url || xl_picture_url;
};
