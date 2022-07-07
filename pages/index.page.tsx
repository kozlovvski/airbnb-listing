import type { GetStaticProps, NextPage } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { HOUR_IN_SECONDS } from 'helpers/helpers.constants';
import { getListingsFromAPIRoute } from 'services/listings/listings.api.service';
import { getListingsFromMongo } from 'services/listings/listings.mongodb.service';

const Home: NextPage = () => {
  const { data } = useQuery('listings', getListingsFromAPIRoute);

  return (
    <div>
      {data &&
        data.length > 0 &&
        data.map((listing) => <p key={listing._id}>{listing.name}</p>)}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('listings', getListingsFromMongo);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: HOUR_IN_SECONDS,
  };
};

export default Home;
