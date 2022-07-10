import { useQuery, UseQueryOptions } from 'react-query';

import { endpoint } from '../graphql/graphql.constants';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint as string, {
      method: 'POST',
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Decimal: any;
  ObjectId: any;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type GetListingsFuncInput = {
  limit?: InputMaybe<Scalars['Float']>;
  offset?: InputMaybe<Scalars['Float']>;
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type ListingsAndReview = {
  __typename?: 'ListingsAndReview';
  _id?: Maybe<Scalars['String']>;
  access?: Maybe<Scalars['String']>;
  accommodates?: Maybe<Scalars['Int']>;
  address?: Maybe<ListingsAndReviewAddress>;
  amenities?: Maybe<Array<Maybe<Scalars['String']>>>;
  availability?: Maybe<ListingsAndReviewAvailability>;
  bathrooms?: Maybe<Scalars['Decimal']>;
  bed_type?: Maybe<Scalars['String']>;
  bedrooms?: Maybe<Scalars['Int']>;
  beds?: Maybe<Scalars['Int']>;
  calendar_last_scraped?: Maybe<Scalars['DateTime']>;
  cancellation_policy?: Maybe<Scalars['String']>;
  cleaning_fee?: Maybe<Scalars['Decimal']>;
  description?: Maybe<Scalars['String']>;
  extra_people?: Maybe<Scalars['Decimal']>;
  first_review?: Maybe<Scalars['DateTime']>;
  guests_included?: Maybe<Scalars['Decimal']>;
  host?: Maybe<ListingsAndReviewHost>;
  house_rules?: Maybe<Scalars['String']>;
  images?: Maybe<ListingsAndReviewImage>;
  interaction?: Maybe<Scalars['String']>;
  last_review?: Maybe<Scalars['DateTime']>;
  last_scraped?: Maybe<Scalars['DateTime']>;
  listing_url?: Maybe<Scalars['String']>;
  maximum_nights?: Maybe<Scalars['String']>;
  minimum_nights?: Maybe<Scalars['String']>;
  monthly_price?: Maybe<Scalars['Decimal']>;
  name?: Maybe<Scalars['String']>;
  neighborhood_overview?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  number_of_reviews?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Decimal']>;
  property_type?: Maybe<Scalars['String']>;
  review_scores?: Maybe<ListingsAndReviewReview_Score>;
  reviews?: Maybe<Array<Maybe<ListingsAndReviewReview>>>;
  room_type?: Maybe<Scalars['String']>;
  security_deposit?: Maybe<Scalars['Decimal']>;
  space?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  transit?: Maybe<Scalars['String']>;
  weekly_price?: Maybe<Scalars['Decimal']>;
};

export type ListingsAndReviewAddress = {
  __typename?: 'ListingsAndReviewAddress';
  country?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  government_area?: Maybe<Scalars['String']>;
  location?: Maybe<ListingsAndReviewAddressLocation>;
  market?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  suburb?: Maybe<Scalars['String']>;
};

export type ListingsAndReviewAddressInsertInput = {
  country?: InputMaybe<Scalars['String']>;
  country_code?: InputMaybe<Scalars['String']>;
  government_area?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<ListingsAndReviewAddressLocationInsertInput>;
  market?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  suburb?: InputMaybe<Scalars['String']>;
};

export type ListingsAndReviewAddressLocation = {
  __typename?: 'ListingsAndReviewAddressLocation';
  coordinates?: Maybe<Array<Maybe<Scalars['Float']>>>;
  is_location_exact?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
};

export type ListingsAndReviewAddressLocationInsertInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  is_location_exact?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ListingsAndReviewAddressLocationQueryInput = {
  AND?: InputMaybe<Array<ListingsAndReviewAddressLocationQueryInput>>;
  OR?: InputMaybe<Array<ListingsAndReviewAddressLocationQueryInput>>;
  coordinates?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  coordinates_exists?: InputMaybe<Scalars['Boolean']>;
  coordinates_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  coordinates_nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  is_location_exact?: InputMaybe<Scalars['Boolean']>;
  is_location_exact_exists?: InputMaybe<Scalars['Boolean']>;
  is_location_exact_ne?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_ne?: InputMaybe<Scalars['String']>;
  type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ListingsAndReviewAddressLocationUpdateInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  coordinates_unset?: InputMaybe<Scalars['Boolean']>;
  is_location_exact?: InputMaybe<Scalars['Boolean']>;
  is_location_exact_unset?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  type_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ListingsAndReviewAddressQueryInput = {
  AND?: InputMaybe<Array<ListingsAndReviewAddressQueryInput>>;
  OR?: InputMaybe<Array<ListingsAndReviewAddressQueryInput>>;
  country?: InputMaybe<Scalars['String']>;
  country_code?: InputMaybe<Scalars['String']>;
  country_code_exists?: InputMaybe<Scalars['Boolean']>;
  country_code_gt?: InputMaybe<Scalars['String']>;
  country_code_gte?: InputMaybe<Scalars['String']>;
  country_code_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country_code_lt?: InputMaybe<Scalars['String']>;
  country_code_lte?: InputMaybe<Scalars['String']>;
  country_code_ne?: InputMaybe<Scalars['String']>;
  country_code_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country_exists?: InputMaybe<Scalars['Boolean']>;
  country_gt?: InputMaybe<Scalars['String']>;
  country_gte?: InputMaybe<Scalars['String']>;
  country_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  country_lt?: InputMaybe<Scalars['String']>;
  country_lte?: InputMaybe<Scalars['String']>;
  country_ne?: InputMaybe<Scalars['String']>;
  country_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  government_area?: InputMaybe<Scalars['String']>;
  government_area_exists?: InputMaybe<Scalars['Boolean']>;
  government_area_gt?: InputMaybe<Scalars['String']>;
  government_area_gte?: InputMaybe<Scalars['String']>;
  government_area_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  government_area_lt?: InputMaybe<Scalars['String']>;
  government_area_lte?: InputMaybe<Scalars['String']>;
  government_area_ne?: InputMaybe<Scalars['String']>;
  government_area_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<ListingsAndReviewAddressLocationQueryInput>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  market?: InputMaybe<Scalars['String']>;
  market_exists?: InputMaybe<Scalars['Boolean']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_ne?: InputMaybe<Scalars['String']>;
  market_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  street?: InputMaybe<Scalars['String']>;
  street_exists?: InputMaybe<Scalars['Boolean']>;
  street_gt?: InputMaybe<Scalars['String']>;
  street_gte?: InputMaybe<Scalars['String']>;
  street_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  street_lt?: InputMaybe<Scalars['String']>;
  street_lte?: InputMaybe<Scalars['String']>;
  street_ne?: InputMaybe<Scalars['String']>;
  street_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  suburb?: InputMaybe<Scalars['String']>;
  suburb_exists?: InputMaybe<Scalars['Boolean']>;
  suburb_gt?: InputMaybe<Scalars['String']>;
  suburb_gte?: InputMaybe<Scalars['String']>;
  suburb_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  suburb_lt?: InputMaybe<Scalars['String']>;
  suburb_lte?: InputMaybe<Scalars['String']>;
  suburb_ne?: InputMaybe<Scalars['String']>;
  suburb_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ListingsAndReviewAddressUpdateInput = {
  country?: InputMaybe<Scalars['String']>;
  country_code?: InputMaybe<Scalars['String']>;
  country_code_unset?: InputMaybe<Scalars['Boolean']>;
  country_unset?: InputMaybe<Scalars['Boolean']>;
  government_area?: InputMaybe<Scalars['String']>;
  government_area_unset?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<ListingsAndReviewAddressLocationUpdateInput>;
  location_unset?: InputMaybe<Scalars['Boolean']>;
  market?: InputMaybe<Scalars['String']>;
  market_unset?: InputMaybe<Scalars['Boolean']>;
  street?: InputMaybe<Scalars['String']>;
  street_unset?: InputMaybe<Scalars['Boolean']>;
  suburb?: InputMaybe<Scalars['String']>;
  suburb_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ListingsAndReviewAvailability = {
  __typename?: 'ListingsAndReviewAvailability';
  availability_30?: Maybe<Scalars['Int']>;
  availability_60?: Maybe<Scalars['Int']>;
  availability_90?: Maybe<Scalars['Int']>;
  availability_365?: Maybe<Scalars['Int']>;
};

export type ListingsAndReviewAvailabilityInsertInput = {
  availability_30?: InputMaybe<Scalars['Int']>;
  availability_60?: InputMaybe<Scalars['Int']>;
  availability_90?: InputMaybe<Scalars['Int']>;
  availability_365?: InputMaybe<Scalars['Int']>;
};

export type ListingsAndReviewAvailabilityQueryInput = {
  AND?: InputMaybe<Array<ListingsAndReviewAvailabilityQueryInput>>;
  OR?: InputMaybe<Array<ListingsAndReviewAvailabilityQueryInput>>;
  availability_30?: InputMaybe<Scalars['Int']>;
  availability_30_exists?: InputMaybe<Scalars['Boolean']>;
  availability_30_gt?: InputMaybe<Scalars['Int']>;
  availability_30_gte?: InputMaybe<Scalars['Int']>;
  availability_30_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  availability_30_lt?: InputMaybe<Scalars['Int']>;
  availability_30_lte?: InputMaybe<Scalars['Int']>;
  availability_30_ne?: InputMaybe<Scalars['Int']>;
  availability_30_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  availability_60?: InputMaybe<Scalars['Int']>;
  availability_60_exists?: InputMaybe<Scalars['Boolean']>;
  availability_60_gt?: InputMaybe<Scalars['Int']>;
  availability_60_gte?: InputMaybe<Scalars['Int']>;
  availability_60_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  availability_60_lt?: InputMaybe<Scalars['Int']>;
  availability_60_lte?: InputMaybe<Scalars['Int']>;
  availability_60_ne?: InputMaybe<Scalars['Int']>;
  availability_60_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  availability_90?: InputMaybe<Scalars['Int']>;
  availability_90_exists?: InputMaybe<Scalars['Boolean']>;
  availability_90_gt?: InputMaybe<Scalars['Int']>;
  availability_90_gte?: InputMaybe<Scalars['Int']>;
  availability_90_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  availability_90_lt?: InputMaybe<Scalars['Int']>;
  availability_90_lte?: InputMaybe<Scalars['Int']>;
  availability_90_ne?: InputMaybe<Scalars['Int']>;
  availability_90_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  availability_365?: InputMaybe<Scalars['Int']>;
  availability_365_exists?: InputMaybe<Scalars['Boolean']>;
  availability_365_gt?: InputMaybe<Scalars['Int']>;
  availability_365_gte?: InputMaybe<Scalars['Int']>;
  availability_365_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  availability_365_lt?: InputMaybe<Scalars['Int']>;
  availability_365_lte?: InputMaybe<Scalars['Int']>;
  availability_365_ne?: InputMaybe<Scalars['Int']>;
  availability_365_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ListingsAndReviewAvailabilityUpdateInput = {
  availability_30?: InputMaybe<Scalars['Int']>;
  availability_30_inc?: InputMaybe<Scalars['Int']>;
  availability_30_unset?: InputMaybe<Scalars['Boolean']>;
  availability_60?: InputMaybe<Scalars['Int']>;
  availability_60_inc?: InputMaybe<Scalars['Int']>;
  availability_60_unset?: InputMaybe<Scalars['Boolean']>;
  availability_90?: InputMaybe<Scalars['Int']>;
  availability_90_inc?: InputMaybe<Scalars['Int']>;
  availability_90_unset?: InputMaybe<Scalars['Boolean']>;
  availability_365?: InputMaybe<Scalars['Int']>;
  availability_365_inc?: InputMaybe<Scalars['Int']>;
  availability_365_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ListingsAndReviewHost = {
  __typename?: 'ListingsAndReviewHost';
  host_about?: Maybe<Scalars['String']>;
  host_has_profile_pic?: Maybe<Scalars['Boolean']>;
  host_id?: Maybe<Scalars['String']>;
  host_identity_verified?: Maybe<Scalars['Boolean']>;
  host_is_superhost?: Maybe<Scalars['Boolean']>;
  host_listings_count?: Maybe<Scalars['Int']>;
  host_location?: Maybe<Scalars['String']>;
  host_name?: Maybe<Scalars['String']>;
  host_neighbourhood?: Maybe<Scalars['String']>;
  host_picture_url?: Maybe<Scalars['String']>;
  host_response_rate?: Maybe<Scalars['Int']>;
  host_response_time?: Maybe<Scalars['String']>;
  host_thumbnail_url?: Maybe<Scalars['String']>;
  host_total_listings_count?: Maybe<Scalars['Int']>;
  host_url?: Maybe<Scalars['String']>;
  host_verifications?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ListingsAndReviewHostInsertInput = {
  host_about?: InputMaybe<Scalars['String']>;
  host_has_profile_pic?: InputMaybe<Scalars['Boolean']>;
  host_id?: InputMaybe<Scalars['String']>;
  host_identity_verified?: InputMaybe<Scalars['Boolean']>;
  host_is_superhost?: InputMaybe<Scalars['Boolean']>;
  host_listings_count?: InputMaybe<Scalars['Int']>;
  host_location?: InputMaybe<Scalars['String']>;
  host_name?: InputMaybe<Scalars['String']>;
  host_neighbourhood?: InputMaybe<Scalars['String']>;
  host_picture_url?: InputMaybe<Scalars['String']>;
  host_response_rate?: InputMaybe<Scalars['Int']>;
  host_response_time?: InputMaybe<Scalars['String']>;
  host_thumbnail_url?: InputMaybe<Scalars['String']>;
  host_total_listings_count?: InputMaybe<Scalars['Int']>;
  host_url?: InputMaybe<Scalars['String']>;
  host_verifications?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ListingsAndReviewHostQueryInput = {
  AND?: InputMaybe<Array<ListingsAndReviewHostQueryInput>>;
  OR?: InputMaybe<Array<ListingsAndReviewHostQueryInput>>;
  host_about?: InputMaybe<Scalars['String']>;
  host_about_exists?: InputMaybe<Scalars['Boolean']>;
  host_about_gt?: InputMaybe<Scalars['String']>;
  host_about_gte?: InputMaybe<Scalars['String']>;
  host_about_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_about_lt?: InputMaybe<Scalars['String']>;
  host_about_lte?: InputMaybe<Scalars['String']>;
  host_about_ne?: InputMaybe<Scalars['String']>;
  host_about_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_has_profile_pic?: InputMaybe<Scalars['Boolean']>;
  host_has_profile_pic_exists?: InputMaybe<Scalars['Boolean']>;
  host_has_profile_pic_ne?: InputMaybe<Scalars['Boolean']>;
  host_id?: InputMaybe<Scalars['String']>;
  host_id_exists?: InputMaybe<Scalars['Boolean']>;
  host_id_gt?: InputMaybe<Scalars['String']>;
  host_id_gte?: InputMaybe<Scalars['String']>;
  host_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_id_lt?: InputMaybe<Scalars['String']>;
  host_id_lte?: InputMaybe<Scalars['String']>;
  host_id_ne?: InputMaybe<Scalars['String']>;
  host_id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_identity_verified?: InputMaybe<Scalars['Boolean']>;
  host_identity_verified_exists?: InputMaybe<Scalars['Boolean']>;
  host_identity_verified_ne?: InputMaybe<Scalars['Boolean']>;
  host_is_superhost?: InputMaybe<Scalars['Boolean']>;
  host_is_superhost_exists?: InputMaybe<Scalars['Boolean']>;
  host_is_superhost_ne?: InputMaybe<Scalars['Boolean']>;
  host_listings_count?: InputMaybe<Scalars['Int']>;
  host_listings_count_exists?: InputMaybe<Scalars['Boolean']>;
  host_listings_count_gt?: InputMaybe<Scalars['Int']>;
  host_listings_count_gte?: InputMaybe<Scalars['Int']>;
  host_listings_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  host_listings_count_lt?: InputMaybe<Scalars['Int']>;
  host_listings_count_lte?: InputMaybe<Scalars['Int']>;
  host_listings_count_ne?: InputMaybe<Scalars['Int']>;
  host_listings_count_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  host_location?: InputMaybe<Scalars['String']>;
  host_location_exists?: InputMaybe<Scalars['Boolean']>;
  host_location_gt?: InputMaybe<Scalars['String']>;
  host_location_gte?: InputMaybe<Scalars['String']>;
  host_location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_location_lt?: InputMaybe<Scalars['String']>;
  host_location_lte?: InputMaybe<Scalars['String']>;
  host_location_ne?: InputMaybe<Scalars['String']>;
  host_location_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_name?: InputMaybe<Scalars['String']>;
  host_name_exists?: InputMaybe<Scalars['Boolean']>;
  host_name_gt?: InputMaybe<Scalars['String']>;
  host_name_gte?: InputMaybe<Scalars['String']>;
  host_name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_name_lt?: InputMaybe<Scalars['String']>;
  host_name_lte?: InputMaybe<Scalars['String']>;
  host_name_ne?: InputMaybe<Scalars['String']>;
  host_name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_neighbourhood?: InputMaybe<Scalars['String']>;
  host_neighbourhood_exists?: InputMaybe<Scalars['Boolean']>;
  host_neighbourhood_gt?: InputMaybe<Scalars['String']>;
  host_neighbourhood_gte?: InputMaybe<Scalars['String']>;
  host_neighbourhood_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_neighbourhood_lt?: InputMaybe<Scalars['String']>;
  host_neighbourhood_lte?: InputMaybe<Scalars['String']>;
  host_neighbourhood_ne?: InputMaybe<Scalars['String']>;
  host_neighbourhood_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_picture_url?: InputMaybe<Scalars['String']>;
  host_picture_url_exists?: InputMaybe<Scalars['Boolean']>;
  host_picture_url_gt?: InputMaybe<Scalars['String']>;
  host_picture_url_gte?: InputMaybe<Scalars['String']>;
  host_picture_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_picture_url_lt?: InputMaybe<Scalars['String']>;
  host_picture_url_lte?: InputMaybe<Scalars['String']>;
  host_picture_url_ne?: InputMaybe<Scalars['String']>;
  host_picture_url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_response_rate?: InputMaybe<Scalars['Int']>;
  host_response_rate_exists?: InputMaybe<Scalars['Boolean']>;
  host_response_rate_gt?: InputMaybe<Scalars['Int']>;
  host_response_rate_gte?: InputMaybe<Scalars['Int']>;
  host_response_rate_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  host_response_rate_lt?: InputMaybe<Scalars['Int']>;
  host_response_rate_lte?: InputMaybe<Scalars['Int']>;
  host_response_rate_ne?: InputMaybe<Scalars['Int']>;
  host_response_rate_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  host_response_time?: InputMaybe<Scalars['String']>;
  host_response_time_exists?: InputMaybe<Scalars['Boolean']>;
  host_response_time_gt?: InputMaybe<Scalars['String']>;
  host_response_time_gte?: InputMaybe<Scalars['String']>;
  host_response_time_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_response_time_lt?: InputMaybe<Scalars['String']>;
  host_response_time_lte?: InputMaybe<Scalars['String']>;
  host_response_time_ne?: InputMaybe<Scalars['String']>;
  host_response_time_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_thumbnail_url?: InputMaybe<Scalars['String']>;
  host_thumbnail_url_exists?: InputMaybe<Scalars['Boolean']>;
  host_thumbnail_url_gt?: InputMaybe<Scalars['String']>;
  host_thumbnail_url_gte?: InputMaybe<Scalars['String']>;
  host_thumbnail_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_thumbnail_url_lt?: InputMaybe<Scalars['String']>;
  host_thumbnail_url_lte?: InputMaybe<Scalars['String']>;
  host_thumbnail_url_ne?: InputMaybe<Scalars['String']>;
  host_thumbnail_url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_total_listings_count?: InputMaybe<Scalars['Int']>;
  host_total_listings_count_exists?: InputMaybe<Scalars['Boolean']>;
  host_total_listings_count_gt?: InputMaybe<Scalars['Int']>;
  host_total_listings_count_gte?: InputMaybe<Scalars['Int']>;
  host_total_listings_count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  host_total_listings_count_lt?: InputMaybe<Scalars['Int']>;
  host_total_listings_count_lte?: InputMaybe<Scalars['Int']>;
  host_total_listings_count_ne?: InputMaybe<Scalars['Int']>;
  host_total_listings_count_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  host_url?: InputMaybe<Scalars['String']>;
  host_url_exists?: InputMaybe<Scalars['Boolean']>;
  host_url_gt?: InputMaybe<Scalars['String']>;
  host_url_gte?: InputMaybe<Scalars['String']>;
  host_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_url_lt?: InputMaybe<Scalars['String']>;
  host_url_lte?: InputMaybe<Scalars['String']>;
  host_url_ne?: InputMaybe<Scalars['String']>;
  host_url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_verifications?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_verifications_exists?: InputMaybe<Scalars['Boolean']>;
  host_verifications_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_verifications_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ListingsAndReviewHostUpdateInput = {
  host_about?: InputMaybe<Scalars['String']>;
  host_about_unset?: InputMaybe<Scalars['Boolean']>;
  host_has_profile_pic?: InputMaybe<Scalars['Boolean']>;
  host_has_profile_pic_unset?: InputMaybe<Scalars['Boolean']>;
  host_id?: InputMaybe<Scalars['String']>;
  host_id_unset?: InputMaybe<Scalars['Boolean']>;
  host_identity_verified?: InputMaybe<Scalars['Boolean']>;
  host_identity_verified_unset?: InputMaybe<Scalars['Boolean']>;
  host_is_superhost?: InputMaybe<Scalars['Boolean']>;
  host_is_superhost_unset?: InputMaybe<Scalars['Boolean']>;
  host_listings_count?: InputMaybe<Scalars['Int']>;
  host_listings_count_inc?: InputMaybe<Scalars['Int']>;
  host_listings_count_unset?: InputMaybe<Scalars['Boolean']>;
  host_location?: InputMaybe<Scalars['String']>;
  host_location_unset?: InputMaybe<Scalars['Boolean']>;
  host_name?: InputMaybe<Scalars['String']>;
  host_name_unset?: InputMaybe<Scalars['Boolean']>;
  host_neighbourhood?: InputMaybe<Scalars['String']>;
  host_neighbourhood_unset?: InputMaybe<Scalars['Boolean']>;
  host_picture_url?: InputMaybe<Scalars['String']>;
  host_picture_url_unset?: InputMaybe<Scalars['Boolean']>;
  host_response_rate?: InputMaybe<Scalars['Int']>;
  host_response_rate_inc?: InputMaybe<Scalars['Int']>;
  host_response_rate_unset?: InputMaybe<Scalars['Boolean']>;
  host_response_time?: InputMaybe<Scalars['String']>;
  host_response_time_unset?: InputMaybe<Scalars['Boolean']>;
  host_thumbnail_url?: InputMaybe<Scalars['String']>;
  host_thumbnail_url_unset?: InputMaybe<Scalars['Boolean']>;
  host_total_listings_count?: InputMaybe<Scalars['Int']>;
  host_total_listings_count_inc?: InputMaybe<Scalars['Int']>;
  host_total_listings_count_unset?: InputMaybe<Scalars['Boolean']>;
  host_url?: InputMaybe<Scalars['String']>;
  host_url_unset?: InputMaybe<Scalars['Boolean']>;
  host_verifications?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  host_verifications_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ListingsAndReviewImage = {
  __typename?: 'ListingsAndReviewImage';
  medium_url?: Maybe<Scalars['String']>;
  picture_url?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  xl_picture_url?: Maybe<Scalars['String']>;
};

export type ListingsAndReviewImageInsertInput = {
  medium_url?: InputMaybe<Scalars['String']>;
  picture_url?: InputMaybe<Scalars['String']>;
  thumbnail_url?: InputMaybe<Scalars['String']>;
  xl_picture_url?: InputMaybe<Scalars['String']>;
};

export type ListingsAndReviewImageQueryInput = {
  AND?: InputMaybe<Array<ListingsAndReviewImageQueryInput>>;
  OR?: InputMaybe<Array<ListingsAndReviewImageQueryInput>>;
  medium_url?: InputMaybe<Scalars['String']>;
  medium_url_exists?: InputMaybe<Scalars['Boolean']>;
  medium_url_gt?: InputMaybe<Scalars['String']>;
  medium_url_gte?: InputMaybe<Scalars['String']>;
  medium_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  medium_url_lt?: InputMaybe<Scalars['String']>;
  medium_url_lte?: InputMaybe<Scalars['String']>;
  medium_url_ne?: InputMaybe<Scalars['String']>;
  medium_url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  picture_url?: InputMaybe<Scalars['String']>;
  picture_url_exists?: InputMaybe<Scalars['Boolean']>;
  picture_url_gt?: InputMaybe<Scalars['String']>;
  picture_url_gte?: InputMaybe<Scalars['String']>;
  picture_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  picture_url_lt?: InputMaybe<Scalars['String']>;
  picture_url_lte?: InputMaybe<Scalars['String']>;
  picture_url_ne?: InputMaybe<Scalars['String']>;
  picture_url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  thumbnail_url?: InputMaybe<Scalars['String']>;
  thumbnail_url_exists?: InputMaybe<Scalars['Boolean']>;
  thumbnail_url_gt?: InputMaybe<Scalars['String']>;
  thumbnail_url_gte?: InputMaybe<Scalars['String']>;
  thumbnail_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  thumbnail_url_lt?: InputMaybe<Scalars['String']>;
  thumbnail_url_lte?: InputMaybe<Scalars['String']>;
  thumbnail_url_ne?: InputMaybe<Scalars['String']>;
  thumbnail_url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xl_picture_url?: InputMaybe<Scalars['String']>;
  xl_picture_url_exists?: InputMaybe<Scalars['Boolean']>;
  xl_picture_url_gt?: InputMaybe<Scalars['String']>;
  xl_picture_url_gte?: InputMaybe<Scalars['String']>;
  xl_picture_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  xl_picture_url_lt?: InputMaybe<Scalars['String']>;
  xl_picture_url_lte?: InputMaybe<Scalars['String']>;
  xl_picture_url_ne?: InputMaybe<Scalars['String']>;
  xl_picture_url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ListingsAndReviewImageUpdateInput = {
  medium_url?: InputMaybe<Scalars['String']>;
  medium_url_unset?: InputMaybe<Scalars['Boolean']>;
  picture_url?: InputMaybe<Scalars['String']>;
  picture_url_unset?: InputMaybe<Scalars['Boolean']>;
  thumbnail_url?: InputMaybe<Scalars['String']>;
  thumbnail_url_unset?: InputMaybe<Scalars['Boolean']>;
  xl_picture_url?: InputMaybe<Scalars['String']>;
  xl_picture_url_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ListingsAndReviewInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  access?: InputMaybe<Scalars['String']>;
  accommodates?: InputMaybe<Scalars['Int']>;
  address?: InputMaybe<ListingsAndReviewAddressInsertInput>;
  amenities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  availability?: InputMaybe<ListingsAndReviewAvailabilityInsertInput>;
  bathrooms?: InputMaybe<Scalars['Decimal']>;
  bed_type?: InputMaybe<Scalars['String']>;
  bedrooms?: InputMaybe<Scalars['Int']>;
  beds?: InputMaybe<Scalars['Int']>;
  calendar_last_scraped?: InputMaybe<Scalars['DateTime']>;
  cancellation_policy?: InputMaybe<Scalars['String']>;
  cleaning_fee?: InputMaybe<Scalars['Decimal']>;
  description?: InputMaybe<Scalars['String']>;
  extra_people?: InputMaybe<Scalars['Decimal']>;
  first_review?: InputMaybe<Scalars['DateTime']>;
  guests_included?: InputMaybe<Scalars['Decimal']>;
  host?: InputMaybe<ListingsAndReviewHostInsertInput>;
  house_rules?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<ListingsAndReviewImageInsertInput>;
  interaction?: InputMaybe<Scalars['String']>;
  last_review?: InputMaybe<Scalars['DateTime']>;
  last_scraped?: InputMaybe<Scalars['DateTime']>;
  listing_url?: InputMaybe<Scalars['String']>;
  maximum_nights?: InputMaybe<Scalars['String']>;
  minimum_nights?: InputMaybe<Scalars['String']>;
  monthly_price?: InputMaybe<Scalars['Decimal']>;
  name?: InputMaybe<Scalars['String']>;
  neighborhood_overview?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  number_of_reviews?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Decimal']>;
  property_type?: InputMaybe<Scalars['String']>;
  review_scores?: InputMaybe<ListingsAndReviewReview_ScoreInsertInput>;
  reviews?: InputMaybe<Array<InputMaybe<ListingsAndReviewReviewInsertInput>>>;
  room_type?: InputMaybe<Scalars['String']>;
  security_deposit?: InputMaybe<Scalars['Decimal']>;
  space?: InputMaybe<Scalars['String']>;
  summary?: InputMaybe<Scalars['String']>;
  transit?: InputMaybe<Scalars['String']>;
  weekly_price?: InputMaybe<Scalars['Decimal']>;
};

export type ListingsAndReviewQueryInput = {
  AND?: InputMaybe<Array<ListingsAndReviewQueryInput>>;
  OR?: InputMaybe<Array<ListingsAndReviewQueryInput>>;
  _id?: InputMaybe<Scalars['String']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['String']>;
  _id_gte?: InputMaybe<Scalars['String']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _id_lt?: InputMaybe<Scalars['String']>;
  _id_lte?: InputMaybe<Scalars['String']>;
  _id_ne?: InputMaybe<Scalars['String']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  access?: InputMaybe<Scalars['String']>;
  access_exists?: InputMaybe<Scalars['Boolean']>;
  access_gt?: InputMaybe<Scalars['String']>;
  access_gte?: InputMaybe<Scalars['String']>;
  access_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  access_lt?: InputMaybe<Scalars['String']>;
  access_lte?: InputMaybe<Scalars['String']>;
  access_ne?: InputMaybe<Scalars['String']>;
  access_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  accommodates?: InputMaybe<Scalars['Int']>;
  accommodates_exists?: InputMaybe<Scalars['Boolean']>;
  accommodates_gt?: InputMaybe<Scalars['Int']>;
  accommodates_gte?: InputMaybe<Scalars['Int']>;
  accommodates_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  accommodates_lt?: InputMaybe<Scalars['Int']>;
  accommodates_lte?: InputMaybe<Scalars['Int']>;
  accommodates_ne?: InputMaybe<Scalars['Int']>;
  accommodates_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  address?: InputMaybe<ListingsAndReviewAddressQueryInput>;
  address_exists?: InputMaybe<Scalars['Boolean']>;
  amenities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amenities_exists?: InputMaybe<Scalars['Boolean']>;
  amenities_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amenities_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  availability?: InputMaybe<ListingsAndReviewAvailabilityQueryInput>;
  availability_exists?: InputMaybe<Scalars['Boolean']>;
  bathrooms?: InputMaybe<Scalars['Decimal']>;
  bathrooms_exists?: InputMaybe<Scalars['Boolean']>;
  bathrooms_gt?: InputMaybe<Scalars['Decimal']>;
  bathrooms_gte?: InputMaybe<Scalars['Decimal']>;
  bathrooms_in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  bathrooms_lt?: InputMaybe<Scalars['Decimal']>;
  bathrooms_lte?: InputMaybe<Scalars['Decimal']>;
  bathrooms_ne?: InputMaybe<Scalars['Decimal']>;
  bathrooms_nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  bed_type?: InputMaybe<Scalars['String']>;
  bed_type_exists?: InputMaybe<Scalars['Boolean']>;
  bed_type_gt?: InputMaybe<Scalars['String']>;
  bed_type_gte?: InputMaybe<Scalars['String']>;
  bed_type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bed_type_lt?: InputMaybe<Scalars['String']>;
  bed_type_lte?: InputMaybe<Scalars['String']>;
  bed_type_ne?: InputMaybe<Scalars['String']>;
  bed_type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bedrooms?: InputMaybe<Scalars['Int']>;
  bedrooms_exists?: InputMaybe<Scalars['Boolean']>;
  bedrooms_gt?: InputMaybe<Scalars['Int']>;
  bedrooms_gte?: InputMaybe<Scalars['Int']>;
  bedrooms_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  bedrooms_lt?: InputMaybe<Scalars['Int']>;
  bedrooms_lte?: InputMaybe<Scalars['Int']>;
  bedrooms_ne?: InputMaybe<Scalars['Int']>;
  bedrooms_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  beds?: InputMaybe<Scalars['Int']>;
  beds_exists?: InputMaybe<Scalars['Boolean']>;
  beds_gt?: InputMaybe<Scalars['Int']>;
  beds_gte?: InputMaybe<Scalars['Int']>;
  beds_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  beds_lt?: InputMaybe<Scalars['Int']>;
  beds_lte?: InputMaybe<Scalars['Int']>;
  beds_ne?: InputMaybe<Scalars['Int']>;
  beds_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  calendar_last_scraped?: InputMaybe<Scalars['DateTime']>;
  calendar_last_scraped_exists?: InputMaybe<Scalars['Boolean']>;
  calendar_last_scraped_gt?: InputMaybe<Scalars['DateTime']>;
  calendar_last_scraped_gte?: InputMaybe<Scalars['DateTime']>;
  calendar_last_scraped_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  calendar_last_scraped_lt?: InputMaybe<Scalars['DateTime']>;
  calendar_last_scraped_lte?: InputMaybe<Scalars['DateTime']>;
  calendar_last_scraped_ne?: InputMaybe<Scalars['DateTime']>;
  calendar_last_scraped_nin?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']>>
  >;
  cancellation_policy?: InputMaybe<Scalars['String']>;
  cancellation_policy_exists?: InputMaybe<Scalars['Boolean']>;
  cancellation_policy_gt?: InputMaybe<Scalars['String']>;
  cancellation_policy_gte?: InputMaybe<Scalars['String']>;
  cancellation_policy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cancellation_policy_lt?: InputMaybe<Scalars['String']>;
  cancellation_policy_lte?: InputMaybe<Scalars['String']>;
  cancellation_policy_ne?: InputMaybe<Scalars['String']>;
  cancellation_policy_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  cleaning_fee?: InputMaybe<Scalars['Decimal']>;
  cleaning_fee_exists?: InputMaybe<Scalars['Boolean']>;
  cleaning_fee_gt?: InputMaybe<Scalars['Decimal']>;
  cleaning_fee_gte?: InputMaybe<Scalars['Decimal']>;
  cleaning_fee_in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  cleaning_fee_lt?: InputMaybe<Scalars['Decimal']>;
  cleaning_fee_lte?: InputMaybe<Scalars['Decimal']>;
  cleaning_fee_ne?: InputMaybe<Scalars['Decimal']>;
  cleaning_fee_nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_ne?: InputMaybe<Scalars['String']>;
  description_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  extra_people?: InputMaybe<Scalars['Decimal']>;
  extra_people_exists?: InputMaybe<Scalars['Boolean']>;
  extra_people_gt?: InputMaybe<Scalars['Decimal']>;
  extra_people_gte?: InputMaybe<Scalars['Decimal']>;
  extra_people_in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  extra_people_lt?: InputMaybe<Scalars['Decimal']>;
  extra_people_lte?: InputMaybe<Scalars['Decimal']>;
  extra_people_ne?: InputMaybe<Scalars['Decimal']>;
  extra_people_nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  first_review?: InputMaybe<Scalars['DateTime']>;
  first_review_exists?: InputMaybe<Scalars['Boolean']>;
  first_review_gt?: InputMaybe<Scalars['DateTime']>;
  first_review_gte?: InputMaybe<Scalars['DateTime']>;
  first_review_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  first_review_lt?: InputMaybe<Scalars['DateTime']>;
  first_review_lte?: InputMaybe<Scalars['DateTime']>;
  first_review_ne?: InputMaybe<Scalars['DateTime']>;
  first_review_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  guests_included?: InputMaybe<Scalars['Decimal']>;
  guests_included_exists?: InputMaybe<Scalars['Boolean']>;
  guests_included_gt?: InputMaybe<Scalars['Decimal']>;
  guests_included_gte?: InputMaybe<Scalars['Decimal']>;
  guests_included_in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  guests_included_lt?: InputMaybe<Scalars['Decimal']>;
  guests_included_lte?: InputMaybe<Scalars['Decimal']>;
  guests_included_ne?: InputMaybe<Scalars['Decimal']>;
  guests_included_nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  host?: InputMaybe<ListingsAndReviewHostQueryInput>;
  host_exists?: InputMaybe<Scalars['Boolean']>;
  house_rules?: InputMaybe<Scalars['String']>;
  house_rules_exists?: InputMaybe<Scalars['Boolean']>;
  house_rules_gt?: InputMaybe<Scalars['String']>;
  house_rules_gte?: InputMaybe<Scalars['String']>;
  house_rules_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  house_rules_lt?: InputMaybe<Scalars['String']>;
  house_rules_lte?: InputMaybe<Scalars['String']>;
  house_rules_ne?: InputMaybe<Scalars['String']>;
  house_rules_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  images?: InputMaybe<ListingsAndReviewImageQueryInput>;
  images_exists?: InputMaybe<Scalars['Boolean']>;
  interaction?: InputMaybe<Scalars['String']>;
  interaction_exists?: InputMaybe<Scalars['Boolean']>;
  interaction_gt?: InputMaybe<Scalars['String']>;
  interaction_gte?: InputMaybe<Scalars['String']>;
  interaction_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  interaction_lt?: InputMaybe<Scalars['String']>;
  interaction_lte?: InputMaybe<Scalars['String']>;
  interaction_ne?: InputMaybe<Scalars['String']>;
  interaction_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  last_review?: InputMaybe<Scalars['DateTime']>;
  last_review_exists?: InputMaybe<Scalars['Boolean']>;
  last_review_gt?: InputMaybe<Scalars['DateTime']>;
  last_review_gte?: InputMaybe<Scalars['DateTime']>;
  last_review_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  last_review_lt?: InputMaybe<Scalars['DateTime']>;
  last_review_lte?: InputMaybe<Scalars['DateTime']>;
  last_review_ne?: InputMaybe<Scalars['DateTime']>;
  last_review_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  last_scraped?: InputMaybe<Scalars['DateTime']>;
  last_scraped_exists?: InputMaybe<Scalars['Boolean']>;
  last_scraped_gt?: InputMaybe<Scalars['DateTime']>;
  last_scraped_gte?: InputMaybe<Scalars['DateTime']>;
  last_scraped_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  last_scraped_lt?: InputMaybe<Scalars['DateTime']>;
  last_scraped_lte?: InputMaybe<Scalars['DateTime']>;
  last_scraped_ne?: InputMaybe<Scalars['DateTime']>;
  last_scraped_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  listing_url?: InputMaybe<Scalars['String']>;
  listing_url_exists?: InputMaybe<Scalars['Boolean']>;
  listing_url_gt?: InputMaybe<Scalars['String']>;
  listing_url_gte?: InputMaybe<Scalars['String']>;
  listing_url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  listing_url_lt?: InputMaybe<Scalars['String']>;
  listing_url_lte?: InputMaybe<Scalars['String']>;
  listing_url_ne?: InputMaybe<Scalars['String']>;
  listing_url_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maximum_nights?: InputMaybe<Scalars['String']>;
  maximum_nights_exists?: InputMaybe<Scalars['Boolean']>;
  maximum_nights_gt?: InputMaybe<Scalars['String']>;
  maximum_nights_gte?: InputMaybe<Scalars['String']>;
  maximum_nights_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  maximum_nights_lt?: InputMaybe<Scalars['String']>;
  maximum_nights_lte?: InputMaybe<Scalars['String']>;
  maximum_nights_ne?: InputMaybe<Scalars['String']>;
  maximum_nights_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  minimum_nights?: InputMaybe<Scalars['String']>;
  minimum_nights_exists?: InputMaybe<Scalars['Boolean']>;
  minimum_nights_gt?: InputMaybe<Scalars['String']>;
  minimum_nights_gte?: InputMaybe<Scalars['String']>;
  minimum_nights_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  minimum_nights_lt?: InputMaybe<Scalars['String']>;
  minimum_nights_lte?: InputMaybe<Scalars['String']>;
  minimum_nights_ne?: InputMaybe<Scalars['String']>;
  minimum_nights_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  monthly_price?: InputMaybe<Scalars['Decimal']>;
  monthly_price_exists?: InputMaybe<Scalars['Boolean']>;
  monthly_price_gt?: InputMaybe<Scalars['Decimal']>;
  monthly_price_gte?: InputMaybe<Scalars['Decimal']>;
  monthly_price_in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  monthly_price_lt?: InputMaybe<Scalars['Decimal']>;
  monthly_price_lte?: InputMaybe<Scalars['Decimal']>;
  monthly_price_ne?: InputMaybe<Scalars['Decimal']>;
  monthly_price_nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_ne?: InputMaybe<Scalars['String']>;
  name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  neighborhood_overview?: InputMaybe<Scalars['String']>;
  neighborhood_overview_exists?: InputMaybe<Scalars['Boolean']>;
  neighborhood_overview_gt?: InputMaybe<Scalars['String']>;
  neighborhood_overview_gte?: InputMaybe<Scalars['String']>;
  neighborhood_overview_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  neighborhood_overview_lt?: InputMaybe<Scalars['String']>;
  neighborhood_overview_lte?: InputMaybe<Scalars['String']>;
  neighborhood_overview_ne?: InputMaybe<Scalars['String']>;
  neighborhood_overview_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notes?: InputMaybe<Scalars['String']>;
  notes_exists?: InputMaybe<Scalars['Boolean']>;
  notes_gt?: InputMaybe<Scalars['String']>;
  notes_gte?: InputMaybe<Scalars['String']>;
  notes_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notes_lt?: InputMaybe<Scalars['String']>;
  notes_lte?: InputMaybe<Scalars['String']>;
  notes_ne?: InputMaybe<Scalars['String']>;
  notes_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  number_of_reviews?: InputMaybe<Scalars['Int']>;
  number_of_reviews_exists?: InputMaybe<Scalars['Boolean']>;
  number_of_reviews_gt?: InputMaybe<Scalars['Int']>;
  number_of_reviews_gte?: InputMaybe<Scalars['Int']>;
  number_of_reviews_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  number_of_reviews_lt?: InputMaybe<Scalars['Int']>;
  number_of_reviews_lte?: InputMaybe<Scalars['Int']>;
  number_of_reviews_ne?: InputMaybe<Scalars['Int']>;
  number_of_reviews_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  price?: InputMaybe<Scalars['Decimal']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_gt?: InputMaybe<Scalars['Decimal']>;
  price_gte?: InputMaybe<Scalars['Decimal']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  price_lt?: InputMaybe<Scalars['Decimal']>;
  price_lte?: InputMaybe<Scalars['Decimal']>;
  price_ne?: InputMaybe<Scalars['Decimal']>;
  price_nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  property_type?: InputMaybe<Scalars['String']>;
  property_type_exists?: InputMaybe<Scalars['Boolean']>;
  property_type_gt?: InputMaybe<Scalars['String']>;
  property_type_gte?: InputMaybe<Scalars['String']>;
  property_type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  property_type_lt?: InputMaybe<Scalars['String']>;
  property_type_lte?: InputMaybe<Scalars['String']>;
  property_type_ne?: InputMaybe<Scalars['String']>;
  property_type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  review_scores?: InputMaybe<ListingsAndReviewReview_ScoreQueryInput>;
  review_scores_exists?: InputMaybe<Scalars['Boolean']>;
  reviews?: InputMaybe<Array<InputMaybe<ListingsAndReviewReviewQueryInput>>>;
  reviews_exists?: InputMaybe<Scalars['Boolean']>;
  reviews_in?: InputMaybe<Array<InputMaybe<ListingsAndReviewReviewQueryInput>>>;
  reviews_nin?: InputMaybe<
    Array<InputMaybe<ListingsAndReviewReviewQueryInput>>
  >;
  room_type?: InputMaybe<Scalars['String']>;
  room_type_exists?: InputMaybe<Scalars['Boolean']>;
  room_type_gt?: InputMaybe<Scalars['String']>;
  room_type_gte?: InputMaybe<Scalars['String']>;
  room_type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  room_type_lt?: InputMaybe<Scalars['String']>;
  room_type_lte?: InputMaybe<Scalars['String']>;
  room_type_ne?: InputMaybe<Scalars['String']>;
  room_type_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  security_deposit?: InputMaybe<Scalars['Decimal']>;
  security_deposit_exists?: InputMaybe<Scalars['Boolean']>;
  security_deposit_gt?: InputMaybe<Scalars['Decimal']>;
  security_deposit_gte?: InputMaybe<Scalars['Decimal']>;
  security_deposit_in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  security_deposit_lt?: InputMaybe<Scalars['Decimal']>;
  security_deposit_lte?: InputMaybe<Scalars['Decimal']>;
  security_deposit_ne?: InputMaybe<Scalars['Decimal']>;
  security_deposit_nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  space?: InputMaybe<Scalars['String']>;
  space_exists?: InputMaybe<Scalars['Boolean']>;
  space_gt?: InputMaybe<Scalars['String']>;
  space_gte?: InputMaybe<Scalars['String']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  space_lt?: InputMaybe<Scalars['String']>;
  space_lte?: InputMaybe<Scalars['String']>;
  space_ne?: InputMaybe<Scalars['String']>;
  space_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary?: InputMaybe<Scalars['String']>;
  summary_exists?: InputMaybe<Scalars['Boolean']>;
  summary_gt?: InputMaybe<Scalars['String']>;
  summary_gte?: InputMaybe<Scalars['String']>;
  summary_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  summary_lt?: InputMaybe<Scalars['String']>;
  summary_lte?: InputMaybe<Scalars['String']>;
  summary_ne?: InputMaybe<Scalars['String']>;
  summary_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  transit?: InputMaybe<Scalars['String']>;
  transit_exists?: InputMaybe<Scalars['Boolean']>;
  transit_gt?: InputMaybe<Scalars['String']>;
  transit_gte?: InputMaybe<Scalars['String']>;
  transit_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  transit_lt?: InputMaybe<Scalars['String']>;
  transit_lte?: InputMaybe<Scalars['String']>;
  transit_ne?: InputMaybe<Scalars['String']>;
  transit_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  weekly_price?: InputMaybe<Scalars['Decimal']>;
  weekly_price_exists?: InputMaybe<Scalars['Boolean']>;
  weekly_price_gt?: InputMaybe<Scalars['Decimal']>;
  weekly_price_gte?: InputMaybe<Scalars['Decimal']>;
  weekly_price_in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  weekly_price_lt?: InputMaybe<Scalars['Decimal']>;
  weekly_price_lte?: InputMaybe<Scalars['Decimal']>;
  weekly_price_ne?: InputMaybe<Scalars['Decimal']>;
  weekly_price_nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
};

export type ListingsAndReviewReview = {
  __typename?: 'ListingsAndReviewReview';
  _id?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  listing_id?: Maybe<Scalars['String']>;
  reviewer_id?: Maybe<Scalars['String']>;
  reviewer_name?: Maybe<Scalars['String']>;
};

export type ListingsAndReviewReviewInsertInput = {
  _id?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  listing_id?: InputMaybe<Scalars['String']>;
  reviewer_id?: InputMaybe<Scalars['String']>;
  reviewer_name?: InputMaybe<Scalars['String']>;
};

export type ListingsAndReviewReviewQueryInput = {
  AND?: InputMaybe<Array<ListingsAndReviewReviewQueryInput>>;
  OR?: InputMaybe<Array<ListingsAndReviewReviewQueryInput>>;
  _id?: InputMaybe<Scalars['String']>;
  _id_exists?: InputMaybe<Scalars['Boolean']>;
  _id_gt?: InputMaybe<Scalars['String']>;
  _id_gte?: InputMaybe<Scalars['String']>;
  _id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _id_lt?: InputMaybe<Scalars['String']>;
  _id_lte?: InputMaybe<Scalars['String']>;
  _id_ne?: InputMaybe<Scalars['String']>;
  _id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comments?: InputMaybe<Scalars['String']>;
  comments_exists?: InputMaybe<Scalars['Boolean']>;
  comments_gt?: InputMaybe<Scalars['String']>;
  comments_gte?: InputMaybe<Scalars['String']>;
  comments_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  comments_lt?: InputMaybe<Scalars['String']>;
  comments_lte?: InputMaybe<Scalars['String']>;
  comments_ne?: InputMaybe<Scalars['String']>;
  comments_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_exists?: InputMaybe<Scalars['Boolean']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_ne?: InputMaybe<Scalars['DateTime']>;
  date_nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  listing_id?: InputMaybe<Scalars['String']>;
  listing_id_exists?: InputMaybe<Scalars['Boolean']>;
  listing_id_gt?: InputMaybe<Scalars['String']>;
  listing_id_gte?: InputMaybe<Scalars['String']>;
  listing_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  listing_id_lt?: InputMaybe<Scalars['String']>;
  listing_id_lte?: InputMaybe<Scalars['String']>;
  listing_id_ne?: InputMaybe<Scalars['String']>;
  listing_id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reviewer_id?: InputMaybe<Scalars['String']>;
  reviewer_id_exists?: InputMaybe<Scalars['Boolean']>;
  reviewer_id_gt?: InputMaybe<Scalars['String']>;
  reviewer_id_gte?: InputMaybe<Scalars['String']>;
  reviewer_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reviewer_id_lt?: InputMaybe<Scalars['String']>;
  reviewer_id_lte?: InputMaybe<Scalars['String']>;
  reviewer_id_ne?: InputMaybe<Scalars['String']>;
  reviewer_id_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reviewer_name?: InputMaybe<Scalars['String']>;
  reviewer_name_exists?: InputMaybe<Scalars['Boolean']>;
  reviewer_name_gt?: InputMaybe<Scalars['String']>;
  reviewer_name_gte?: InputMaybe<Scalars['String']>;
  reviewer_name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  reviewer_name_lt?: InputMaybe<Scalars['String']>;
  reviewer_name_lte?: InputMaybe<Scalars['String']>;
  reviewer_name_ne?: InputMaybe<Scalars['String']>;
  reviewer_name_nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ListingsAndReviewReviewUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  comments?: InputMaybe<Scalars['String']>;
  comments_unset?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['DateTime']>;
  date_unset?: InputMaybe<Scalars['Boolean']>;
  listing_id?: InputMaybe<Scalars['String']>;
  listing_id_unset?: InputMaybe<Scalars['Boolean']>;
  reviewer_id?: InputMaybe<Scalars['String']>;
  reviewer_id_unset?: InputMaybe<Scalars['Boolean']>;
  reviewer_name?: InputMaybe<Scalars['String']>;
  reviewer_name_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ListingsAndReviewReview_Score = {
  __typename?: 'ListingsAndReviewReview_score';
  review_scores_accuracy?: Maybe<Scalars['Int']>;
  review_scores_checkin?: Maybe<Scalars['Int']>;
  review_scores_cleanliness?: Maybe<Scalars['Int']>;
  review_scores_communication?: Maybe<Scalars['Int']>;
  review_scores_location?: Maybe<Scalars['Int']>;
  review_scores_rating?: Maybe<Scalars['Int']>;
  review_scores_value?: Maybe<Scalars['Int']>;
};

export type ListingsAndReviewReview_ScoreInsertInput = {
  review_scores_accuracy?: InputMaybe<Scalars['Int']>;
  review_scores_checkin?: InputMaybe<Scalars['Int']>;
  review_scores_cleanliness?: InputMaybe<Scalars['Int']>;
  review_scores_communication?: InputMaybe<Scalars['Int']>;
  review_scores_location?: InputMaybe<Scalars['Int']>;
  review_scores_rating?: InputMaybe<Scalars['Int']>;
  review_scores_value?: InputMaybe<Scalars['Int']>;
};

export type ListingsAndReviewReview_ScoreQueryInput = {
  AND?: InputMaybe<Array<ListingsAndReviewReview_ScoreQueryInput>>;
  OR?: InputMaybe<Array<ListingsAndReviewReview_ScoreQueryInput>>;
  review_scores_accuracy?: InputMaybe<Scalars['Int']>;
  review_scores_accuracy_exists?: InputMaybe<Scalars['Boolean']>;
  review_scores_accuracy_gt?: InputMaybe<Scalars['Int']>;
  review_scores_accuracy_gte?: InputMaybe<Scalars['Int']>;
  review_scores_accuracy_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  review_scores_accuracy_lt?: InputMaybe<Scalars['Int']>;
  review_scores_accuracy_lte?: InputMaybe<Scalars['Int']>;
  review_scores_accuracy_ne?: InputMaybe<Scalars['Int']>;
  review_scores_accuracy_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  review_scores_checkin?: InputMaybe<Scalars['Int']>;
  review_scores_checkin_exists?: InputMaybe<Scalars['Boolean']>;
  review_scores_checkin_gt?: InputMaybe<Scalars['Int']>;
  review_scores_checkin_gte?: InputMaybe<Scalars['Int']>;
  review_scores_checkin_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  review_scores_checkin_lt?: InputMaybe<Scalars['Int']>;
  review_scores_checkin_lte?: InputMaybe<Scalars['Int']>;
  review_scores_checkin_ne?: InputMaybe<Scalars['Int']>;
  review_scores_checkin_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  review_scores_cleanliness?: InputMaybe<Scalars['Int']>;
  review_scores_cleanliness_exists?: InputMaybe<Scalars['Boolean']>;
  review_scores_cleanliness_gt?: InputMaybe<Scalars['Int']>;
  review_scores_cleanliness_gte?: InputMaybe<Scalars['Int']>;
  review_scores_cleanliness_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  review_scores_cleanliness_lt?: InputMaybe<Scalars['Int']>;
  review_scores_cleanliness_lte?: InputMaybe<Scalars['Int']>;
  review_scores_cleanliness_ne?: InputMaybe<Scalars['Int']>;
  review_scores_cleanliness_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  review_scores_communication?: InputMaybe<Scalars['Int']>;
  review_scores_communication_exists?: InputMaybe<Scalars['Boolean']>;
  review_scores_communication_gt?: InputMaybe<Scalars['Int']>;
  review_scores_communication_gte?: InputMaybe<Scalars['Int']>;
  review_scores_communication_in?: InputMaybe<
    Array<InputMaybe<Scalars['Int']>>
  >;
  review_scores_communication_lt?: InputMaybe<Scalars['Int']>;
  review_scores_communication_lte?: InputMaybe<Scalars['Int']>;
  review_scores_communication_ne?: InputMaybe<Scalars['Int']>;
  review_scores_communication_nin?: InputMaybe<
    Array<InputMaybe<Scalars['Int']>>
  >;
  review_scores_location?: InputMaybe<Scalars['Int']>;
  review_scores_location_exists?: InputMaybe<Scalars['Boolean']>;
  review_scores_location_gt?: InputMaybe<Scalars['Int']>;
  review_scores_location_gte?: InputMaybe<Scalars['Int']>;
  review_scores_location_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  review_scores_location_lt?: InputMaybe<Scalars['Int']>;
  review_scores_location_lte?: InputMaybe<Scalars['Int']>;
  review_scores_location_ne?: InputMaybe<Scalars['Int']>;
  review_scores_location_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  review_scores_rating?: InputMaybe<Scalars['Int']>;
  review_scores_rating_exists?: InputMaybe<Scalars['Boolean']>;
  review_scores_rating_gt?: InputMaybe<Scalars['Int']>;
  review_scores_rating_gte?: InputMaybe<Scalars['Int']>;
  review_scores_rating_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  review_scores_rating_lt?: InputMaybe<Scalars['Int']>;
  review_scores_rating_lte?: InputMaybe<Scalars['Int']>;
  review_scores_rating_ne?: InputMaybe<Scalars['Int']>;
  review_scores_rating_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  review_scores_value?: InputMaybe<Scalars['Int']>;
  review_scores_value_exists?: InputMaybe<Scalars['Boolean']>;
  review_scores_value_gt?: InputMaybe<Scalars['Int']>;
  review_scores_value_gte?: InputMaybe<Scalars['Int']>;
  review_scores_value_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  review_scores_value_lt?: InputMaybe<Scalars['Int']>;
  review_scores_value_lte?: InputMaybe<Scalars['Int']>;
  review_scores_value_ne?: InputMaybe<Scalars['Int']>;
  review_scores_value_nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ListingsAndReviewReview_ScoreUpdateInput = {
  review_scores_accuracy?: InputMaybe<Scalars['Int']>;
  review_scores_accuracy_inc?: InputMaybe<Scalars['Int']>;
  review_scores_accuracy_unset?: InputMaybe<Scalars['Boolean']>;
  review_scores_checkin?: InputMaybe<Scalars['Int']>;
  review_scores_checkin_inc?: InputMaybe<Scalars['Int']>;
  review_scores_checkin_unset?: InputMaybe<Scalars['Boolean']>;
  review_scores_cleanliness?: InputMaybe<Scalars['Int']>;
  review_scores_cleanliness_inc?: InputMaybe<Scalars['Int']>;
  review_scores_cleanliness_unset?: InputMaybe<Scalars['Boolean']>;
  review_scores_communication?: InputMaybe<Scalars['Int']>;
  review_scores_communication_inc?: InputMaybe<Scalars['Int']>;
  review_scores_communication_unset?: InputMaybe<Scalars['Boolean']>;
  review_scores_location?: InputMaybe<Scalars['Int']>;
  review_scores_location_inc?: InputMaybe<Scalars['Int']>;
  review_scores_location_unset?: InputMaybe<Scalars['Boolean']>;
  review_scores_rating?: InputMaybe<Scalars['Int']>;
  review_scores_rating_inc?: InputMaybe<Scalars['Int']>;
  review_scores_rating_unset?: InputMaybe<Scalars['Boolean']>;
  review_scores_value?: InputMaybe<Scalars['Int']>;
  review_scores_value_inc?: InputMaybe<Scalars['Int']>;
  review_scores_value_unset?: InputMaybe<Scalars['Boolean']>;
};

export type ListingsAndReviewUpdateInput = {
  _id?: InputMaybe<Scalars['String']>;
  _id_unset?: InputMaybe<Scalars['Boolean']>;
  access?: InputMaybe<Scalars['String']>;
  access_unset?: InputMaybe<Scalars['Boolean']>;
  accommodates?: InputMaybe<Scalars['Int']>;
  accommodates_inc?: InputMaybe<Scalars['Int']>;
  accommodates_unset?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<ListingsAndReviewAddressUpdateInput>;
  address_unset?: InputMaybe<Scalars['Boolean']>;
  amenities?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amenities_unset?: InputMaybe<Scalars['Boolean']>;
  availability?: InputMaybe<ListingsAndReviewAvailabilityUpdateInput>;
  availability_unset?: InputMaybe<Scalars['Boolean']>;
  bathrooms?: InputMaybe<Scalars['Decimal']>;
  bathrooms_unset?: InputMaybe<Scalars['Boolean']>;
  bed_type?: InputMaybe<Scalars['String']>;
  bed_type_unset?: InputMaybe<Scalars['Boolean']>;
  bedrooms?: InputMaybe<Scalars['Int']>;
  bedrooms_inc?: InputMaybe<Scalars['Int']>;
  bedrooms_unset?: InputMaybe<Scalars['Boolean']>;
  beds?: InputMaybe<Scalars['Int']>;
  beds_inc?: InputMaybe<Scalars['Int']>;
  beds_unset?: InputMaybe<Scalars['Boolean']>;
  calendar_last_scraped?: InputMaybe<Scalars['DateTime']>;
  calendar_last_scraped_unset?: InputMaybe<Scalars['Boolean']>;
  cancellation_policy?: InputMaybe<Scalars['String']>;
  cancellation_policy_unset?: InputMaybe<Scalars['Boolean']>;
  cleaning_fee?: InputMaybe<Scalars['Decimal']>;
  cleaning_fee_unset?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  description_unset?: InputMaybe<Scalars['Boolean']>;
  extra_people?: InputMaybe<Scalars['Decimal']>;
  extra_people_unset?: InputMaybe<Scalars['Boolean']>;
  first_review?: InputMaybe<Scalars['DateTime']>;
  first_review_unset?: InputMaybe<Scalars['Boolean']>;
  guests_included?: InputMaybe<Scalars['Decimal']>;
  guests_included_unset?: InputMaybe<Scalars['Boolean']>;
  host?: InputMaybe<ListingsAndReviewHostUpdateInput>;
  host_unset?: InputMaybe<Scalars['Boolean']>;
  house_rules?: InputMaybe<Scalars['String']>;
  house_rules_unset?: InputMaybe<Scalars['Boolean']>;
  images?: InputMaybe<ListingsAndReviewImageUpdateInput>;
  images_unset?: InputMaybe<Scalars['Boolean']>;
  interaction?: InputMaybe<Scalars['String']>;
  interaction_unset?: InputMaybe<Scalars['Boolean']>;
  last_review?: InputMaybe<Scalars['DateTime']>;
  last_review_unset?: InputMaybe<Scalars['Boolean']>;
  last_scraped?: InputMaybe<Scalars['DateTime']>;
  last_scraped_unset?: InputMaybe<Scalars['Boolean']>;
  listing_url?: InputMaybe<Scalars['String']>;
  listing_url_unset?: InputMaybe<Scalars['Boolean']>;
  maximum_nights?: InputMaybe<Scalars['String']>;
  maximum_nights_unset?: InputMaybe<Scalars['Boolean']>;
  minimum_nights?: InputMaybe<Scalars['String']>;
  minimum_nights_unset?: InputMaybe<Scalars['Boolean']>;
  monthly_price?: InputMaybe<Scalars['Decimal']>;
  monthly_price_unset?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_unset?: InputMaybe<Scalars['Boolean']>;
  neighborhood_overview?: InputMaybe<Scalars['String']>;
  neighborhood_overview_unset?: InputMaybe<Scalars['Boolean']>;
  notes?: InputMaybe<Scalars['String']>;
  notes_unset?: InputMaybe<Scalars['Boolean']>;
  number_of_reviews?: InputMaybe<Scalars['Int']>;
  number_of_reviews_inc?: InputMaybe<Scalars['Int']>;
  number_of_reviews_unset?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['Decimal']>;
  price_unset?: InputMaybe<Scalars['Boolean']>;
  property_type?: InputMaybe<Scalars['String']>;
  property_type_unset?: InputMaybe<Scalars['Boolean']>;
  review_scores?: InputMaybe<ListingsAndReviewReview_ScoreUpdateInput>;
  review_scores_unset?: InputMaybe<Scalars['Boolean']>;
  reviews?: InputMaybe<Array<InputMaybe<ListingsAndReviewReviewUpdateInput>>>;
  reviews_unset?: InputMaybe<Scalars['Boolean']>;
  room_type?: InputMaybe<Scalars['String']>;
  room_type_unset?: InputMaybe<Scalars['Boolean']>;
  security_deposit?: InputMaybe<Scalars['Decimal']>;
  security_deposit_unset?: InputMaybe<Scalars['Boolean']>;
  space?: InputMaybe<Scalars['String']>;
  space_unset?: InputMaybe<Scalars['Boolean']>;
  summary?: InputMaybe<Scalars['String']>;
  summary_unset?: InputMaybe<Scalars['Boolean']>;
  transit?: InputMaybe<Scalars['String']>;
  transit_unset?: InputMaybe<Scalars['Boolean']>;
  weekly_price?: InputMaybe<Scalars['Decimal']>;
  weekly_price_unset?: InputMaybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyListingsAndReviews?: Maybe<DeleteManyPayload>;
  deleteOneListingsAndReview?: Maybe<ListingsAndReview>;
  insertManyListingsAndReviews?: Maybe<InsertManyPayload>;
  insertOneListingsAndReview?: Maybe<ListingsAndReview>;
  replaceOneListingsAndReview?: Maybe<ListingsAndReview>;
  updateManyListingsAndReviews?: Maybe<UpdateManyPayload>;
  updateOneListingsAndReview?: Maybe<ListingsAndReview>;
  upsertOneListingsAndReview?: Maybe<ListingsAndReview>;
};

export type MutationDeleteManyListingsAndReviewsArgs = {
  query?: InputMaybe<ListingsAndReviewQueryInput>;
};

export type MutationDeleteOneListingsAndReviewArgs = {
  query: ListingsAndReviewQueryInput;
};

export type MutationInsertManyListingsAndReviewsArgs = {
  data: Array<ListingsAndReviewInsertInput>;
};

export type MutationInsertOneListingsAndReviewArgs = {
  data: ListingsAndReviewInsertInput;
};

export type MutationReplaceOneListingsAndReviewArgs = {
  data: ListingsAndReviewInsertInput;
  query?: InputMaybe<ListingsAndReviewQueryInput>;
};

export type MutationUpdateManyListingsAndReviewsArgs = {
  query?: InputMaybe<ListingsAndReviewQueryInput>;
  set: ListingsAndReviewUpdateInput;
};

export type MutationUpdateOneListingsAndReviewArgs = {
  query?: InputMaybe<ListingsAndReviewQueryInput>;
  set: ListingsAndReviewUpdateInput;
};

export type MutationUpsertOneListingsAndReviewArgs = {
  data: ListingsAndReviewInsertInput;
  query?: InputMaybe<ListingsAndReviewQueryInput>;
};

export type Query = {
  __typename?: 'Query';
  listingsAndReview?: Maybe<ListingsAndReview>;
  listingsAndReviews?: Maybe<Array<Maybe<ListingsAndReview>>>;
};

export type QueryListingsAndReviewArgs = {
  query?: InputMaybe<ListingsAndReviewQueryInput>;
};

export type QueryListingsAndReviewsArgs = {
  input?: InputMaybe<GetListingsFuncInput>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type GetListingsQueryVariables = Exact<{
  limitAndOffset?: InputMaybe<GetListingsFuncInput>;
}>;

export type GetListingsQuery = {
  __typename?: 'Query';
  listingsAndReviews?: Array<{
    __typename?: 'ListingsAndReview';
    _id?: string | null;
    name?: string | null;
    summary?: string | null;
    price?: any | null;
    images?: {
      __typename?: 'ListingsAndReviewImage';
      medium_url?: string | null;
      picture_url?: string | null;
      thumbnail_url?: string | null;
      xl_picture_url?: string | null;
    } | null;
  } | null> | null;
};

export const GetListingsDocument = `
    query getListings($limitAndOffset: GetListingsFuncInput) {
  listingsAndReviews(input: $limitAndOffset) {
    _id
    name
    summary
    price
    images {
      medium_url
      picture_url
      thumbnail_url
      xl_picture_url
    }
  }
}
    `;
export const useGetListingsQuery = <TData = GetListingsQuery, TError = unknown>(
  variables?: GetListingsQueryVariables,
  options?: UseQueryOptions<GetListingsQuery, TError, TData>
) =>
  useQuery<GetListingsQuery, TError, TData>(
    variables === undefined ? ['getListings'] : ['getListings', variables],
    fetcher<GetListingsQuery, GetListingsQueryVariables>(
      GetListingsDocument,
      variables
    ),
    options
  );

useGetListingsQuery.getKey = (variables?: GetListingsQueryVariables) =>
  variables === undefined ? ['getListings'] : ['getListings', variables];
useGetListingsQuery.fetcher = (variables?: GetListingsQueryVariables) =>
  fetcher<GetListingsQuery, GetListingsQueryVariables>(
    GetListingsDocument,
    variables
  );
