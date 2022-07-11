export * from 'next/router';

export const useRouter = jest.fn(() => ({
  locale: 'pl',
}));
