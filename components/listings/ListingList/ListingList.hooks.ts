import {
  GetListingsQuery,
  GetListingsQueryVariables,
  useGetListingsQuery,
} from 'generated/graphql-codegen';
import { useInfiniteQuery, UseInfiniteQueryOptions } from 'react-query';

export const useInfiniteGetListingsQuery = <
  TData = GetListingsQuery,
  TError = unknown
>(
  variables?: GetListingsQueryVariables,
  options?: UseInfiniteQueryOptions<GetListingsQuery, TError, TData>
) => {
  return useInfiniteQuery<GetListingsQuery, TError, TData>(
    variables === undefined
      ? ['getListings.infinite']
      : ['getListings.infinite', variables],
    ({ pageParam }) => {
      return useGetListingsQuery.fetcher({
        ...variables,
        pageParam,
      })();
    },
    options
  );
};

useInfiniteGetListingsQuery.getKey = (variables?: GetListingsQueryVariables) =>
  variables === undefined
    ? ['getListings.infinite']
    : ['getListings.infinite', variables];
