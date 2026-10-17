"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // 1. Register ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // 2. Initialize Lenis Smooth Scroll with custom easing curve
    const lenis = new Lenis({
      duration: 1.2, // Smooth duration in seconds
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // 3. Link Lenis scroll event to GSAP ScrollTrigger updates
    lenis.on("scroll", ScrollTrigger.update);

    // 4. Bind Lenis animation frame to GSAP's unified ticker
    // This synchronizes GSAP animations and scroll inertia on the same CPU/GPU tick
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);

    // Turn off GSAP's lag smoothing to keep scrolling instant and responsive
    gsap.ticker.lagSmoothing(0);

    // 5. Cleanup on component unmount (prevents ghost instances)
    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <div className="smooth-scroll-wrapper w-full">{children}</div>;
}