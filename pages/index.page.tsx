import { ListingListLayout } from 'layouts/ListingListLayout';
import { NextPageWithLayout } from 'typings/NextPageWithLayout';

const Home: NextPageWithLayout = () => {
  return <div>home page</div>;
};

Home.getLayout = (page) => <ListingListLayout>{page}</ListingListLayout>;

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(
//     useInfiniteGetListingsQuery.getKey(),
//     async () => {
//       if (!process.env.NEXT_APP_MONGO_GRAPHQL_ENDPOINT) {
//         throw Error('NEXT_APP_MONGO_GRAPHQL_ENDPOINT is not defined');
//       }

//       const res = await fetch(process.env.NEXT_APP_MONGO_GRAPHQL_ENDPOINT, {
//         method: 'POST',
//         body: JSON.stringify({
//           query: GetListingsDocument,
//           variables: {
//             pageParam: 0,
//           },
//         }),
//         headers: {
//           apiKey: process.env.NEXT_APP_MONGO_ATLAS_API_KEY || '',
//         },
//       });

//       const json = await res.json();

//       return json.data;
//     }
//   );

//   return {
//     props: {
//       ...(await serverSideTranslations(locale!, ['common', 'listings'])),
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };

export default Home;
