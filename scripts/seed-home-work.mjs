/**
 * Idempotent seed: creates or replaces five `homeWork` documents by stable _id.
 * Requires: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET,
 * and SANITY_API_TOKEN (Editor or deploy token with write access).
 *
 * Usage: node --env-file=.env.local scripts/seed-home-work.mjs
 */
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";
const token =
  process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN || "";

if (!projectId || !dataset) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET.",
  );
  process.exit(1);
}
if (!token) {
  console.error(
    "Missing SANITY_API_TOKEN (or SANITY_WRITE_TOKEN). Add a token with write access to .env.local.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const seeds = [
  {
    _id: "homeWork.lokkedin",
    _type: "homeWork",
    title: "LokkedIn",
    subtitle: "Focus app that blocks distractions with native controls",
    status: "live",
    href: "https://lokkedin.com/",
    layout: "col-span-2 row-span-2",
    tone: "from-cyan/45 via-violet/15 to-transparent",
    orderRank: 10,
  },
  {
    _id: "homeWork.plan",
    _type: "homeWork",
    title: "Plan Dashboard",
    subtitle: "Financial planning tool with scenario visualization",
    status: "live",
    href: "https://plan.golife.se/",
    layout: "col-span-1 row-span-1",
    tone: "from-violet/45 via-violet/10 to-transparent",
    orderRank: 20,
  },
  {
    _id: "homeWork.staff",
    _type: "homeWork",
    title: "Staff",
    subtitle: "Presence, absence, and workplace status management",
    status: "live",
    href: "https://staff.golife.se/",
    layout: "col-span-1 row-span-1",
    tone: "from-cyan/35 via-cyan/10 to-transparent",
    orderRank: 30,
  },
  {
    _id: "homeWork.golife",
    _type: "homeWork",
    title: "GoLife",
    subtitle: "Cloud products and consulting for practical workflows",
    status: "live",
    href: "https://golife.se/",
    layout: "col-span-1 row-span-1",
    tone: "from-violet/35 via-cyan/20 to-transparent",
    orderRank: 40,
  },
  {
    _id: "homeWork.zendy",
    _type: "homeWork",
    title: "Zendy",
    subtitle: "Upcoming application - currently in development",
    status: "upcoming",
    layout: "col-span-2 row-span-1",
    tone: "from-cyan/25 via-violet/25 to-transparent",
    orderRank: 50,
  },
];

async function main() {
  for (const doc of seeds) {
    const { _id, ...payload } = doc;
    await client.createOrReplace({ _id, ...payload });
    console.log("OK", _id);
  }
  console.log("Done. Open Studio → Home Work Card to edit or add images.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
