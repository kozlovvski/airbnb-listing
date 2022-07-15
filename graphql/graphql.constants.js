export const endpoint = process.env.NEXT_APP_MONGO_GRAPHQL_ENDPOINT;

const apiKey = process.env.NEXT_APP_MONGO_ATLAS_API_KEY;
if (!apiKey) {
  throw new Error('Missing NEXT_APP_MONGO_ATLAS_API_KEY environment variable');
}

export const fetchParams = {
  headers: {
    apiKey,
  },
};
