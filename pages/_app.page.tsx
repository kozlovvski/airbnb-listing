import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRef } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient.current()}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
