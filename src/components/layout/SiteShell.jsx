import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const SiteShell = ({ children, contentClassName = "" }) => {
  return (
    <div className="relative min-h-screen">
      <div className="page-gradient" aria-hidden="true" />
      <div className="mesh-overlay" aria-hidden="true" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main className={`mx-auto w-full max-w-6xl flex-1 px-4 pb-8 pt-8 sm:px-6 ${contentClassName}`}>
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
};

export default SiteShell;
