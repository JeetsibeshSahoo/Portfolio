"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Guard against touch devices & reduced motion
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    document.body.classList.add("custom-cursor-active");

    const cursor = cursorRef.current;
    if (!cursor) return;

    // High performance spring physics
    const setX = gsap.quickTo(cursor, "x", { duration: 0.18, ease: "power3.out" });
    const setY = gsap.quickTo(cursor, "y", { duration: 0.18, ease: "power3.out" });

    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });

    let isVisible = false;

    const onMouseMove = (e) => {
      if (!isVisible) {
        gsap.to(cursor, { opacity: 1, duration: 0.2 });
        isVisible = true;
      }
      setX(e.clientX);
      setY(e.clientY);
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.2 });
      isVisible = false;
    };

    // Smooth hover expansion
    const handleMouseOver = (e) => {
      const isInteractive =
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.closest(".project-card") ||
        e.target.closest(".glass-panel");

      if (isInteractive) {
        gsap.to(cursor, {
          scale: 2.2,
          backgroundColor: "rgba(0, 245, 160, 0.2)",
          borderColor: "#00f5a0",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "#00f5a0",
          borderColor: "transparent",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.7, duration: 0.15 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2, ease: "back.out(2)" });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-5 w-5 rounded-full bg-[#00f5a0] shadow-[0_0_16px_rgba(0,245,160,0.6)] border border-transparent transition-colors"
    />
  );
}