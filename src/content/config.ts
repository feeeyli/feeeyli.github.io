import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    stats: z.object({
      comments: z.number(),
      reposts: z.number(),
      likes: z.number(),
      views: z.number(),
    }),
    images: z.array(z.array(z.string())).optional(),
    link: z.string().optional(),
    id: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
