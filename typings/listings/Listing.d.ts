import { GetListingsQuery } from 'generated/graphql-codegen';

export type Listing = GetListingsQuery['listingsAndReviews'][number];
export type DefinedListing = NonNullable<Listing>;
