import { sanityFetch } from "@/sanity/lib/live";

export async function GET(request) {
  try {
    const projects = await sanityFetch(
      `*[_type == "project" && !(_id in path("drafts.**"))]`
    );
    console.log("projects", projects);
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch projects" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
