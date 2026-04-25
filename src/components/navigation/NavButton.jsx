import ResponsiveComponent from "@/components/ResponsiveComponent";
import clsx from "clsx";
import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return (
        <Home
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      );
    case "about":
      return (
        <User
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      );
    case "contact":
      return (
        <Phone
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      );
    case "github":
      return (
        <Github
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      );
    case "linkedin":
      return (
        <Linkedin
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      );

    case "resume":
      return (
        <NotebookText
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      );

    default:
      return (
        <Home
          className="w-full h-auto"
          strokeWidth={1.5}
        />
      );
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const NavLink = motion(Link);

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}) => {
  const shouldReduceMotion = useReducedMotion();
  const linkLabel = newTab ? `${label} (opens in new tab)` : label;

  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <motion.li
            variants={item}
            className="absolute w-fit cursor-pointer z-50"
            style={{ transform: `translate(${x}, ${y})` }}
          >
            <NavLink
              href={link}
              target={newTab ? "_blank" : "_self"}
              rel={newTab ? "noopener noreferrer" : undefined}
              className="group text-foreground rounded-full flex items-center justify-center custom-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={linkLabel}
            >
              <span
                className={clsx(
                  "relative w-14 h-14 p-4 hover:text-accent",
                  shouldReduceMotion ? "" : "animate-spin-slow-reverse group-hover:pause"
                )}
              >
                {getIcon(icon)}
                <span className="sr-only">{linkLabel}</span>
                <span className="absolute hidden group-hover:block group-focus-within:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
            </NavLink>
          </motion.li>
        ) : (
          <motion.li
            variants={item}
            className="w-fit cursor-pointer z-50"
          >
            <NavLink
              href={link}
              target={newTab ? "_blank" : "_self"}
              rel={newTab ? "noopener noreferrer" : undefined}
              className="group text-foreground rounded-full flex items-center justify-center custom-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={linkLabel}
            >
              <span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
                {getIcon(icon)}
                <span className="sr-only">{linkLabel}</span>
                <span
                  className={clsx(
                    "absolute hidden group-hover:block group-focus-within:block px-2 py-1 mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left"
                      ? "right-full left-auto"
                      : "left-full right-auto"
                  )}
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </motion.li>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
