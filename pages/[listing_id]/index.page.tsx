import { motion } from 'framer-motion';
import { useGetDetailedListingQuery } from 'generated/graphql-codegen';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const DetailedListingPage: NextPage = (props) => {
  const { listing_id } = useRouter().query;

  if (Array.isArray(listing_id)) {
    throw Error('listing_id is an array');
  }

  const { data } = useGetDetailedListingQuery({ id: listing_id });
  return (
    <motion.div
      transition={{ type: 'tween', duration: 0.2 }}
      exit={{ y: 60 }}
      initial={{ y: 60 }}
      animate={{
        y: 0,
      }}
      {...props}
    >
      {JSON.stringify(data)}
    </motion.div>
  );
};

export default DetailedListingPage;
