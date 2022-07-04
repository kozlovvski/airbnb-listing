type Listing = {
  _id: string;
  name: string;
  summary: string;
  price: number;
  images: Record<
    'thumbnail_url' | 'medium_url' | 'picture_url' | 'xl_picture_url',
    string
  >;
};
