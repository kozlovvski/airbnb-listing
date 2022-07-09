import { NextApiRequest, NextApiResponse } from 'next';
import httpProxyMiddleware from 'next-http-proxy-middleware';

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  httpProxyMiddleware(req, res, {
    target: process.env.NEXT_APP_MONGO_GRAPHQL_ENDPOINT,
    changeOrigin: true,
    secure: false,
    pathRewrite: [
      {
        patternStr: '^/api',
        replaceStr: '',
      },
    ],
    headers: {
      apiKey: process.env.NEXT_APP_MONGO_ATLAS_API_KEY || '',
    },
  });
}
