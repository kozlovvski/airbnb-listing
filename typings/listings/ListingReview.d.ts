import { DetailedListing } from './DetailedListing';

export type ListingReview = NonNullable<
  NonNullable<DetailedListing['reviews']>[number]
>;
