// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { file, glob } from "astro/loaders";

console.log("content config\n\n\n");

// 3. Define your collection(s)
const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		type: z.string().optional(),
		snippet: z.string().optional(),
		coverImage: z.string().optional(),
		date: z.string().optional(),
		topics: z.string().optional(),
		readingTime: z.number().optional(),
		author: z.string().optional(),
	}),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };
