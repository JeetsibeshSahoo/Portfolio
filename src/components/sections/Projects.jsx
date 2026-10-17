"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/content/portfolio-data";
import { Terminal, ArrowUpRight, Sparkles, Cpu, Layers } from "lucide-react";

// Modern Editorial 3D Project Card
function InteractiveProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
    );
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)");
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  // Format index as 01, 02, etc.
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className="project-card glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden group hover:border-[#00f5a0]/40 transition-colors duration-300"
    >
      {/* Specular Spotlight Glare */}
      <div
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle 400px at ${glarePos.x}% ${glarePos.y}%, rgba(0, 245, 160, 0.15), transparent 70%)`,
          opacity: glarePos.opacity,
          transition: "opacity 0.3s ease",
        }}
        className="pointer-events-none absolute inset-0 z-20 rounded-3xl"
      />

      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00f5a0]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00f5a0]/10 transition-colors" />

      {/* Top Bar: Index & Badge */}
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5 relative z-10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xl sm:text-2xl font-bold text-[#00f5a0]">
            /{formattedIndex}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
            <Sparkles className="h-3 w-3 text-[#00f5a0]" />
            {project.badge}
          </span>
        </div>
      </div>

      {/* Main Content: 2-Column Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 relative z-10">
        {/* Left Column: Title & Overview (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight group-hover:text-[#00f5a0] transition-colors">
            {project.title}
          </h3>
          <p className="mt-4 text-base text-gray-300 leading-relaxed font-sans">
            {project.summary}
          </p>

          {/* Action Links */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-[#00f5a0] hover:text-[#060709] transition-all duration-300 shadow-md"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>View Source Code</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-medium text-xs hover:bg-white/10 hover:border-[#00f5a0]/40 transition-colors"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#00f5a0]" />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Architectural Highlights Box (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-[#060709]/70 border border-white/5 p-6 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f5a0] mb-4">
            <Cpu className="h-3.5 w-3.5" />
            <span>CORE ARCHITECTURE & IMPACT</span>
          </div>

          <ul className="flex flex-col gap-3.5 text-xs sm:text-sm text-gray-300">
            {project.highlights.map((highlight, hIdx) => (
              <li key={hIdx} className="flex items-start gap-3">
                <span className="font-mono text-[10px] text-gray-500 mt-0.5">
                  0{hIdx + 1}
                </span>
                <span className="leading-relaxed text-gray-300">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar: Tech Stack Tags */}
      <div className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-2 relative z-10">
        <span className="text-xs font-mono text-gray-400 mr-2 flex items-center gap-1">
          <Layers className="h-3.5 w-3.5 text-[#00f5a0]" /> Stack:
        </span>
        {project.tech.map((t, tIdx) => (
          <span
            key={tIdx}
            className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-mono text-gray-300 hover:border-[#00f5a0]/40 hover:text-white transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Reveal header
      gsap.from(".projects-header", {
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate project cards
      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 45,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full"
    >
      {/* Section Header */}
      <div className="projects-header flex flex-col items-start mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00f5a0] mb-3">
          <Terminal className="h-3.5 w-3.5" />
          <span>03 // FEATURED ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Real-World Systems & AI Deployments
        </h2>
        <p className="mt-4 text-base text-gray-400 max-w-xl">
          Engineered for production resilience, low-latency performance, and real-world scalability.
        </p>
      </div>

      {/* Project Cards Stack */}
      <div className="flex flex-col gap-14">
        {projectsData.map((project, index) => (
          <InteractiveProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}