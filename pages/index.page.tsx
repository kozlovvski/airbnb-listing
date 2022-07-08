import { ListingListLayout } from 'layouts/ListingListLayout';
import type { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { getListingsFromMongo } from 'services/listings/listings.mongodb.service';
import { NextPageWithLayout } from 'typings/NextPageWithLayout';

const Home: NextPageWithLayout = () => {
  return <div>home page</div>;
};

Home.getLayout = (page) => <ListingListLayout>{page}</ListingListLayout>;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('listings', getListingsFromMongo);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
