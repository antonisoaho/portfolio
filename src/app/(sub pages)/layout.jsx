import HomeBtn from "@/components/HomeButton";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-10 xs:px-20 lg:px-40 xl:px-48 py-24 md:py-32">
      <nav aria-label="Secondary">
        <HomeBtn />
      </nav>
      {children}
    </main>
  );
}
