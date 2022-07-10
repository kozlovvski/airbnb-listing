import { GetListingsQuery } from 'generated/graphql-codegen';

export type Listing = NonNullable<GetListingsQuery['listings']>[number];
export type DefinedListing = NonNullable<Listing>;
