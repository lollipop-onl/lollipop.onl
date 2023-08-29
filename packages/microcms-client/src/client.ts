import { createClient } from 'microcms-js-sdk';
import { BlogEntity } from './types';

const { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } = process.env;

if (!MICROCMS_SERVICE_DOMAIN || !MICROCMS_API_KEY) {
  throw new TypeError(
    'Please set environment variables: MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY',
  );
}

const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});

export const getBlogEntities = async () => {
  const { contents, totalCount } = await client.getList<BlogEntity>({
    endpoint: 'blog',
  });

  return {
    contents,
    totalCount,
  };
};
