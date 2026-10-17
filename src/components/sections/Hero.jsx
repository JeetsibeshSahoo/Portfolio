"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { personalInfo } from "@/content/portfolio-data";
import { ArrowDown, Sparkles, Terminal } from "lucide-react";
import CyberPortrait from "@/components/common/CyberPortrait";

export default function Hero() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Reveal terminal badge
      tl.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
      });

      // 2. Cinematic clip-path typography reveal for the headline lines
      tl.from(
        ".hero-line-inner",
        {
          yPercent: 120,
          rotateZ: 2,
          duration: 1.1,
          stagger: 0.12,
        },
        "-=0.4"
      );

      // 3. Reveal role & tagline
      tl.from(
        ".hero-desc",
        {
          opacity: 0,
          y: 25,
          duration: 0.9,
        },
        "-=0.6"
      );

      // 4. Reveal 3D portrait
      tl.from(
        ".hero-portrait-wrapper",
        {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "back.out(1.2)",
        },
        "-=0.7"
      );

      // 5. Stagger in action buttons and social links
      tl.from(
        ".hero-cta",
        {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.8,
        },
        "-=0.6"
      );

      // 6. Tech stack marquee tags
      tl.from(
        ".hero-chip",
        {
          opacity: 0,
          scale: 0.9,
          stagger: 0.05,
          duration: 0.6,
        },
        "-=0.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const coreFocus = ["Next.js", "Python (FastAPI)", "LangChain", "ChromaDB", "WebRTC", "Socket.io"];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] flex flex-col justify-center items-center px-4 pt-28 pb-16 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column: Typography & CTAs (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* 1. Terminal / Status Chip */}
          <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-6 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#00f5a0]" />
            <span>Architecting Next-Gen AI & Web Systems</span>
            <span className="text-[#00f5a0] font-bold">/</span>
            <span className="text-gray-400">{personalInfo.location.split(",")[0]}</span>
          </div>

          {/* 2. Kinetic Headline with Clipping Masks */}
          <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            <span className="block overflow-hidden py-0.5">
              <span className="hero-line-inner block">
                Crafting Intelligent
              </span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <span className="hero-line-inner block bg-gradient-to-r from-white via-gray-200 to-white/40 bg-clip-text text-transparent">
                AI-Driven Systems
              </span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <span className="hero-line-inner block text-[#00f5a0]">
                & High-Speed Web.
              </span>
            </span>
          </h1>

          {/* 3. Role & Bio Statement */}
          <p className="hero-desc mt-6 max-w-xl text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
            I am <span className="text-white font-medium">{personalInfo.name}</span>, an{" "}
            <span className="text-[#00f5a0] font-mono">{personalInfo.role}</span>. I bridge
            generative AI pipelines, LangChain RAG architectures, and real-time backend systems with polished, responsive client applications.
          </p>

          {/* 4. Action CTA Buttons & Social Icons */}
          <div className="hero-cta mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-[#00f5a0] text-[#060709] font-semibold text-sm hover:shadow-[0_0_25px_rgba(0,245,160,0.4)] transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Explore Architecture</span>
              <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </a>

            <div className="flex items-center gap-2 ml-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#00f5a0] hover:border-[#00f5a0]/40 transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#00f5a0] hover:border-[#00f5a0]/40 transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 5. Core Technology Pills */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-2 max-w-xl">
            <span className="text-xs font-mono text-gray-400 mr-1 flex items-center gap-1">
              <Terminal className="h-3.5 w-3.5 text-[#00f5a0]" /> Primary Stack:
            </span>
            {coreFocus.map((tech) => (
              <span
                key={tech}
                className="hero-chip px-3 py-1 rounded-md bg-[#0d0f14]/80 border border-white/5 text-xs font-mono text-gray-300 hover:border-[#00f5a0]/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Holographic Cyber Portrait (5 cols on desktop) */}
        <div className="hero-portrait-wrapper lg:col-span-5 flex justify-center items-center w-full">
          <CyberPortrait />
        </div>
      </div>
    </section>
  );
}