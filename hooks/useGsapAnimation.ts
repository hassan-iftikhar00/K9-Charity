import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimation = <T extends Element = Element>(
  animationFunction: (element: T | null) => void
) => {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      animationFunction(elementRef.current);
    }
  }, [animationFunction]);

  return elementRef;
};
