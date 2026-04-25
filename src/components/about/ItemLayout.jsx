"use client";
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";

const ItemLayout = ({ children, className }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { scale: 0.95, opacity: 0 }}
      whileInView={shouldReduceMotion ? {} : { scale: 1, opacity: 1 }}
      transition={
        shouldReduceMotion ? { duration: 0 } : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
      }
      viewport={{ once: true }}
      className={clsx(
        "custom-bg p-8 sm:p-10 md:p-12 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
