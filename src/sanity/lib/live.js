// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: "2024-12-03",
    token: process.env.SANITY_SERVER_TOKEN,
  }),
  browserToken: process.env.NEXT_PUBLIC_SANITY_BROWSER_TOKEN,
});
