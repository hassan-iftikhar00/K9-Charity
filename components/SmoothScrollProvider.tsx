"use client";

import { useEffect } from "react";
import { initSmoothScroll } from "@/lib/smooth-scroll";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
