import { useGetListingsQuery } from 'generated/graphql-codegen';
import { ListingListLayout } from 'layouts/ListingListLayout';
import type { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { NextPageWithLayout } from 'typings/NextPageWithLayout';

const DetailedListingPage: NextPageWithLayout = () => {
  return <div>listing</div>;
};

DetailedListingPage.getLayout = (page) => (
  <ListingListLayout>{page}</ListingListLayout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery(useGetListingsQuery.getKey(), () =>
    useGetListingsQuery.fetcher()
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default DetailedListingPage;
