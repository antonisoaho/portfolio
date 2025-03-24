"use client";

import useScreenSize from "@/hooks/useScreenSize";
import React from "react";

const ResponsiveComponent = ({ children }) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
