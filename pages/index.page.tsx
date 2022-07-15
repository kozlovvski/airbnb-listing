import ListingList from 'components/listings/ListingList/ListingList.component';
import {
  useGetListingsQuery,
  useInfiniteGetListingsQuery,
} from 'generated/graphql-codegen';
import type { GetStaticProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { NextPageWithLayout } from 'typings/NextPageWithLayout';

const Home: NextPageWithLayout = () => {
  const { data, fetchNextPage } = useInfiniteGetListingsQuery(
    'pageParam',
    { pageParam: 0 },
    {
      getNextPageParam: (_lastpage, pages) => {
        return pages.length;
      },
    }
  );

  return <ListingList pages={data?.pages} onSkeletonInView={fetchNextPage} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery(useInfiniteGetListingsQuery.getKey(), () =>
    useGetListingsQuery.fetcher()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
