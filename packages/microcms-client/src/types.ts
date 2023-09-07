import type { MicroCMSListContent } from 'microcms-js-sdk';

export type BlogPostEntity = {
  title: string;
  category?: BlogCategoryEntity;
  body?: string;
};

export type BlogCategoryEntity = {
  name: string;
};

export { MicroCMSListContent };
