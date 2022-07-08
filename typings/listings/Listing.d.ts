import { ListingsAndReview } from 'typings/vendors/graphql-codegen';

type Listing = Pick<
  ListingsAndReview,
  '_id' | 'name' | 'summary' | 'price' | 'images'
>;
