import { ChakraProvider } from '@chakra-ui/react';
import i18n from 'i18next';
import commonEN from 'public/locales/en/common.json';
import listingsEN from 'public/locales/en/listings.json';
import commonPL from 'public/locales/pl/common.json';
import listingsPL from 'public/locales/pl/listings.json';
import { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';
import { initReactI18next } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';

export const i18nForTests = i18n;

i18nForTests.use(initReactI18next).init({
  lng: 'cimode',
  ns: ['common'],
  defaultNS: 'common',

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: {
    en: {
      common: commonEN,
      listings: listingsEN,
    },
    pl: {
      common: commonPL,
      listings: listingsPL,
    },
  },
});

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
    <I18nextProvider i18n={i18nForTests}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>{children}</ChakraProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
};
