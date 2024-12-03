import { createClient } from "next-sanity";

console.log(
  "process.env.NEXT_PUBLIC_SANITY_PROJECT_ID",
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
);

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
});
