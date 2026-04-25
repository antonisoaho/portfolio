"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";

const NavLink = motion.create(Link);

const HomeBtn = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <NavLink
      initial={shouldReduceMotion ? false : { scale: 0 }}
      animate={shouldReduceMotion ? {} : { scale: 1 }}
      transition={{ delay: 1 }}
      href={"/"}
      target={"_self"}
      className="group text-foreground rounded-full flex items-center justify-center
        custom-bg fixed top-4 left-4 w-fit self-start z-50
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={"Home"}
    >
      <span className="relative w-14 h-14 p-4 hover:text-accent">
        <Home
          className="w-full h-auto"
          strokeWidth={1.5}
        />

        <span className="absolute hidden group-hover:block group-focus-within:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
          Home
        </span>
      </span>
      <span className="sr-only">Go to Home Page</span>
    </NavLink>
  );
};

export default HomeBtn;
