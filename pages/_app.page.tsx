import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { NextPageWithLayout } from 'typings/NextPageWithLayout';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const queryClient = useRef(() => new QueryClient());
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient.current()}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider>
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
