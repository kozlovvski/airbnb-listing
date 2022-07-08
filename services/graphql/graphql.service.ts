import { GraphQLClient } from 'graphql-request';

import { GRAPHQL_REWRITE_PATH } from './graphql.constants';

export const graphQLClient = new GraphQLClient(GRAPHQL_REWRITE_PATH);
