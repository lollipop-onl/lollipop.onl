import type { MicroCMSListContent } from 'microcms-js-sdk';

export type BlogEntity = {
  thumbnail: string;
  title: string;
  lead: string;
  body?: string;
};

export { MicroCMSListContent };
