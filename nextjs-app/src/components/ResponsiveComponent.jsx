"use client";

import useScreenSize from "@/components/hooks/useScreenSize";
import React from "react";

const ResponsiveComponent = ({ children }) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
