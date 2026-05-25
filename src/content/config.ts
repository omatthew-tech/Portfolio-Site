import { defineCollection, z } from "astro:content";

const coverSchema = z.object({
  id: z.string(),
  alt: z.string(),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    company: z.string().optional(),
    year: z.number(),
    tags: z.array(z.string()).default([]),
    cover: coverSchema,
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
    nda: z.boolean().default(false),
  }),
});

export const collections = { work };
