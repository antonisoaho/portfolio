import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import AboutDetails from "@/components/about/About";

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <div className="max-w-7xl">
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-8xl  text-accent">Anton Isoaho</h1>
          <p className="font-light text-foreground text-lg">
            Meet the wizard behind this portfolio
          </p>
        </div>
      </div>

      {/* Here I will put aboutdetails in component */}

      <AboutDetails />
    </div>
  );
}
