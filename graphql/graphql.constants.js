export const endpoint =
  (process.env.NODE_ENV === 'development' ? 'http://' : 'https://') +
  process.env.NEXT_PUBLIC_VERCEL_URL +
  '/api';
