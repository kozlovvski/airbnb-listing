import { useGetDetailedListingQuery } from 'generated/graphql-codegen';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';

const DetailedListingPage: NextPage = () => {
  const { listing_id } = useRouter().query;

  if (Array.isArray(listing_id)) {
    throw Error('listing_id is an array');
  }

  const { data } = useGetDetailedListingQuery({ id: listing_id });
  return <div>{JSON.stringify(data)}</div>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { listing_id } = params!;

  if (Array.isArray(listing_id)) {
    throw Error('listing_id is an array');
  }

  const queryClient = new QueryClient();
  queryClient.prefetchQuery(useGetDetailedListingQuery.getKey(), () =>
    useGetDetailedListingQuery.fetcher({
      id: listing_id,
    })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default DetailedListingPage;
