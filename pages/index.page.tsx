import ListingList from 'components/listings/ListingList/ListingList.component';
import { motion, Variants } from 'framer-motion';
import {
  useGetListingsQuery,
  useInfiniteGetListingsQuery,
} from 'generated/graphql-codegen';
import type { GetStaticProps } from 'next';
import { dehydrate } from 'react-query';
import { createQueryClient } from 'services/queryClient.service';
import { NextPageWithLayout } from 'typings/NextPageWithLayout';

const animationVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Home: NextPageWithLayout = (props) => {
  const { data, fetchNextPage } = useInfiniteGetListingsQuery(
    'pageParam',
    { pageParam: 0 },
    {
      getNextPageParam: (_lastpage, pages) => {
        return pages.length;
      },
    }
  );

  if (!Array.isArray(data?.pages)) {
    return null;
  }

  return (
    <motion.div
      variants={animationVariants}
      transition={{ type: 'tween', duration: 0.2 }}
      exit="initial"
      initial="initial"
      animate="animate"
      {...props}
    >
      <ListingList pages={data?.pages} onSkeletonInView={fetchNextPage} />{' '}
    </motion.div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = createQueryClient();
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
