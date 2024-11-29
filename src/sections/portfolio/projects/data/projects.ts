import { getCollection } from "astro:content";

export const projects = await getCollection('projects', ({ id }) => id.includes('personal'))
