import { z, defineCollection } from 'astro:content';

export const collections = {
  profile: defineCollection({
    type: 'content',
    schema: z.object({
      name: z.string(),
      role: z.string(),
      avatarUrl: z.string(),
    }),
  }),
  tools: defineCollection({
    type: 'content',
    schema: z.object({
      published: z.boolean().optional(),
      title: z.string(),
      description: z.string().optional(),
    }),
  }),
};
