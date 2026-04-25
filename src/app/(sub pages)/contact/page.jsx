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
  description:
    "Contact Anton Isoaho for web app, SaaS, and cloud development focused on practical outcomes and clear user experience.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Contact | Anton Isoaho",
    description:
      "Get in touch with Anton Isoaho about practical web app, SaaS, and cloud software projects.",
    type: "website",
    url: "https://www.isoaho.se/contact",
    images: [{ url: "/preview/contact-page.png" }],
  },
};

export default function Contact() {
  return (
    <>
      <div
        className="page-gradient-soft"
        aria-hidden="true"
      />

      <section
        aria-labelledby="contact-heading"
        className="relative w-full flex flex-col items-center justify-center space-y-12 md:space-y-16 max-w-2xl mx-auto px-4"
      >
        <div className="flex flex-col items-center justify-center space-y-8 w-full text-center">
          <h1
            id="contact-heading"
            className="text-accent font-semibold text-4xl sm:text-5xl capitalize tracking-wide"
          >
            Get in Touch
          </h1>
          <p className="font-light text-base sm:text-lg leading-relaxed tracking-wide max-w-prose">
            Looking for a developer to turn ideas into practical digital
            products?
            <br />
            <br />
            I help teams build clear, reliable web apps and cloud solutions that
            work in real day-to-day use.
            <br />
            <br />
            Reach out and let&apos;s build something meaningful together.
          </p>
        </div>
        <Form />
      </section>

      <div className="w-full sm:h-screen h-full lg:w-72 absolute top-28 lg:top-1/3 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <GlobeHologram />
        </RenderModel>
      </div>
    </>
  );
}
