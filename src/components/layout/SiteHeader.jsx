import Link from "next/link";
import { siteNavItems, resumeLink } from "@/app/site-nav";

const linkClasses =
  "rounded-full px-3 py-2 text-sm text-foreground/90 transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const SiteHeader = () => {
  return (
    <header className="sticky top-4 z-40 w-full px-4">
      <div className="glass-header mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-5">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 font-semibold tracking-wide text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_16px_rgba(82,224,255,0.9)]"
          />
          Isoaho
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-1">
            {siteNavItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={linkClasses}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={resumeLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex rounded-full border border-white/35 px-4 py-2 text-sm font-medium text-foreground transition hover:border-cyan/60 hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Resume (opens in new tab)"
              >
                {resumeLink.label}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
