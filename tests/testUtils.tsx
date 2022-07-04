import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const wrapper = <T extends unknown>({
  children,
}: PropsWithChildren<T>) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
