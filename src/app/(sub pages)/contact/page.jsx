import Image from "next/image";
import bg from "../../../../public/background/contact-background.jpg";
import Form from "@/components/contact/Form";
import dynamic from "next/dynamic";

const RenderModel = dynamic(() => import("@/components/RenderModel"), {
  ssr: false,
});
const GlobeHologram = dynamic(
  () => import("@/components/models/GlobeHologram"),
  {
    ssr: false,
  }
);
export const metadata = {
  title: {
    template: "Anton Isoaho",
    default: "Anton Isoaho | Contact",
  },
  description: "My first portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Contact | Anton Isoaho",
    description: "Get in touch with Anton Isoaho",
    type: "website",
    url: "https://www.isoaho.se/contact",
    images: [{ url: "/preview/contact-page.png" }],
  },
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        placeholder="blur"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center space-y-12 md:space-y-16 max-w-2xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8 w-full text-center">
          <h1 className="text-accent font-semibold text-4xl sm:text-5xl capitalize tracking-wide">
            Get in Touch
          </h1>
          <p className="font-light text-base sm:text-lg leading-relaxed tracking-wide max-w-prose">
            Are you looking for a developer to bring your ideas to life?
            <br />
            <br />
            I&apos;m here to help you create beautiful and functional websites.
            <br />
            <br />
            Feel free to reach out and let&apos;s make something great together!
          </p>
        </div>
        <Form />
      </article>

      <div className="w-full sm:h-screen h-full lg:w-72 absolute top-28 lg:top-1/3 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <GlobeHologram />
        </RenderModel>
      </div>
    </>
  );
}
