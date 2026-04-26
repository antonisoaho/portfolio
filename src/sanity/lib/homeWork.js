import { client } from "@/sanity/lib/client";

const HOME_WORK_QUERY = `*[_type == "homeWork"] | order(orderRank asc) {
  _id,
  title,
  subtitle,
  status,
  wip,
  href,
  layout,
  tone,
  linkKind
}`;

/**
 * Grid auto-flow depends on DOM order. Wide `col-span-2` rows (e.g. Zendy) must
 * come right after the first 1×1 cluster so they still sit under the hero card;
 * repository tiles (GitHub) are appended after that row so the bento shape matches
 * the original static layout.
 */
export function orderHomeWorkForGrid(projects) {
  if (!projects?.length) return [];
  const primary = [];
  const repositories = [];
  for (const doc of projects) {
    if (doc.linkKind === "repository") repositories.push(doc);
    else primary.push(doc);
  }
  primary.sort((a, b) => (a.orderRank ?? 0) - (b.orderRank ?? 0));
  repositories.sort((a, b) => (a.orderRank ?? 0) - (b.orderRank ?? 0));
  return [...primary, ...repositories];
}

export async function getHomeWork() {
  const rows = await client.fetch(HOME_WORK_QUERY);
  return orderHomeWorkForGrid(rows);
}
