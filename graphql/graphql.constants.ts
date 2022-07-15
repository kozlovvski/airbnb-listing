import { getValidAccessToken } from 'services/realm.service';

export const endpoint = process.env.NEXT_PUBLIC_MONGO_GRAPHQL_ENDPOINT;

export const getFetchParams = async () => ({
  headers: {
    Authorization: `Bearer ${await getValidAccessToken()}`,
  },
});
