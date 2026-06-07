import Link from "next/link";
import { getHomeWork } from "@/sanity/lib/homeWork";
import { portfolioProjectClass } from "@/lib/portfolioGrid";

function linkButtonLabel(linkKind) {
  return linkKind === "repository" ? "Repository" : "Visit Website";
}

export default async function RecentWork() {
  const projects = await getHomeWork();

  if (!projects?.length) {
    return (
      <section
        id="work"
        aria-labelledby="work-heading"
        className="anchor-section mx-auto mt-16 w-full"
      >
        <h2
          id="work-heading"
          className="mb-5 text-3xl font-bold uppercase tracking-tight text-foreground"
        >
          Recent Work
        </h2>
        <p className="text-sm text-foreground/60">
          No projects yet — add &ldquo;Home Work Card&rdquo; documents in Sanity Studio.
        </p>
      </section>
    );
  }

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="anchor-section mx-auto mt-16 w-full"
    >
      <h2
        id="work-heading"
        className="mb-5 text-3xl font-bold uppercase tracking-tight text-foreground"
      >
        Recent Work
      </h2>

      <div className="portfolio-grid grid grid-cols-1 grid-flow-dense gap-4 auto-rows-[minmax(148px,auto)] sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 lg:auto-rows-[minmax(200px,min(28vh,280px))]">
        {projects.map((project, index) => {
          const cta = linkButtonLabel(project.linkKind);
          return (
            <article
              key={project._id}
              className={`glass-panel group relative min-h-0 overflow-hidden p-5 col-span-1 ${portfolioProjectClass(index)}`}
            >
              {project.wip ? (
                <div
                  className="absolute inset-x-0 top-0 z-30 border-b border-amber-200/35 bg-gradient-to-r from-amber-500/90 via-amber-400/85 to-amber-500/90 px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-background shadow-[0_6px_28px_rgba(245,158,11,0.28)]"
                  role="status"
                >
                  Work in progress
                </div>
              ) : null}
              <div
                aria-hidden="true"
                className={`absolute inset-0 bg-gradient-to-br ${project.tone}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/25 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/80">{project.subtitle}</p>
                {project.href ? (
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-fit rounded-full border border-foreground/20 bg-panel/60 px-3 py-1.5 text-xs font-medium text-foreground transition group-hover:border-cyan/70 group-hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={`${project.title}: ${cta} (opens in new tab)`}
                  >
                    {cta}
                  </Link>
                ) : (
                  <span className="mt-4 inline-flex w-fit rounded-full border border-violet/40 bg-violet/10 px-3 py-1.5 text-xs font-medium text-violet">
                    Upcoming
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
