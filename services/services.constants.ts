export const PUBLIC_URL = `http://${
  process.env.VERCEL_URL ?? 'localhost:3000'
}`;

export const NEXT_API_URL = `${PUBLIC_URL}/api`;
