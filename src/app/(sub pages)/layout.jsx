import SiteShell from "@/components/layout/SiteShell";

export default function SubPagesLayout({ children }) {
  return <SiteShell contentClassName="pt-10 sm:pt-14">{children}</SiteShell>;
}
