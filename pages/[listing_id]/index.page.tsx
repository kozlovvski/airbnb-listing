import { useGetListingsQuery } from 'generated/graphql-codegen';
import { ListingListLayout } from 'layouts/ListingListLayout';
import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { dehydrate, QueryClient } from 'react-query';
import { NextPageWithLayout } from 'typings/NextPageWithLayout';

const DetailedListingPage: NextPageWithLayout = () => {
  return <div>listing</div>;
};

DetailedListingPage.getLayout = (page) => (
  <ListingListLayout>{page}</ListingListLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(useGetListingsQuery.getKey(), () =>
    useGetListingsQuery.fetcher()()
  );
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default DetailedListingPage;
