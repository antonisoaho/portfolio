import Image from "next/image";
import bg from "../../../../public/background/contact-background.jpg";
import Form from "@/components/contact/Form";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

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
    url: "https://nextjs-portfolio-ecru-two.vercel.app/contact",
    image: "/background/contact-background.jpg",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@handle",
    title: "Contact | Anton Isoaho",
    description: "Get in touch with Anton Isoaho",
    image: "/background/contact-background.jpg",
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
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Get in Touch
          </h1>
          <p className="text-center font-light">
            Are you looking for a developer to bring your ideas to life?
            <br />
            I&apos;m here to help you create beautiful and functional websites.
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
