import { sanityFetch } from "@/sanity/lib/live";

export async function GET(request) {
  try {
    const projects = await sanityFetch(
      `*[_type == "project" && !(_id in path("drafts.**"))]`
    );
    console.log("Fetched projects:", projects.data);

    const response = new Response(JSON.stringify(projects.data ?? []), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response", response);
    return response;

    // return new Response(JSON.stringify(projects ?? []), {
    //   status: 200,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
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
