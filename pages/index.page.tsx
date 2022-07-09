import { useGetListingsQuery } from 'generated/graphql-codegen';
import { ListingListLayout } from 'layouts/ListingListLayout';
import type { GetStaticProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { NextPageWithLayout } from 'typings/NextPageWithLayout';

const Home: NextPageWithLayout = () => {
  return <div>home page</div>;
};

Home.getLayout = (page) => <ListingListLayout>{page}</ListingListLayout>;

export const getStaticProps: GetStaticProps = async () => {
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

export default Home;
