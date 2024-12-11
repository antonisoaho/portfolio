import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Sound from "@/components/Sound";
import StarsBackground from "@/components/StarsBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "Anton Isoaho",
    default: "Anton Isoaho | Next.js Portfolio",
  },
  description: "My first portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </head>
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <StarsBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
