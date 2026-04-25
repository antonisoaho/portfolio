import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { socialLinks } from "@/app/site-nav";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

const SiteFooter = () => {
  return (
    <footer className="w-full px-4 pb-5 pt-2">
      <div className="glass-header mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-5">
        <p className="text-xs text-foreground/70">
          © {new Date().getFullYear()} Isoaho. All rights reserved.
        </p>
        <ul className="flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.label];
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-foreground/75 transition hover:border-cyan/60 hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={`${link.label} (opens in new tab)`}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default SiteFooter;
