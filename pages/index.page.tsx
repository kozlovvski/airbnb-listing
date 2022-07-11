import { useInfiniteGetListingsQuery } from 'components/listings/ListingList/ListingList.hooks';
import { useGetListingsQuery } from 'generated/graphql-codegen';
import { ListingListLayout } from 'layouts/ListingListLayout';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { dehydrate, QueryClient } from 'react-query';
import { NextPageWithLayout } from 'typings/NextPageWithLayout';

const Home: NextPageWithLayout = () => {
  return <div>home page</div>;
};

Home.getLayout = (page) => <ListingListLayout>{page}</ListingListLayout>;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(useInfiniteGetListingsQuery.getKey(), () =>
    useGetListingsQuery.fetcher()()
  );

  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'listings'])),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
