import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import StarsBackground from "@/components/StarsBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://www.isoaho.se"),
  title: {
    template: "Anton Isoaho",
    default: "Anton Isoaho | Next.js Portfolio",
  },
  description:
    "Portfolio of Anton Isoaho, a Swedish system developer building practical web apps, SaaS, and cloud software.",
  icons: {
    icon: "/favicon.svg",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.svg"
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
      </body>
    </html>
  );
}
