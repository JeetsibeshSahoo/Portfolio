"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillsData } from "@/content/portfolio-data";
import { Cpu, Terminal, Sparkles, Layers, Database } from "lucide-react";

export default function Skills() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Reveal header
      gsap.from(".skills-header", {
        scrollTrigger: {
          trigger: ".skills-header",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      // 2. Stagger category panels
      gsap.from(".skill-category-panel", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const categoryIcons = {
    "AI & LLM Architecture": Sparkles,
    "Frontend & Creative UI": Layers,
    "Backend & Distributed Systems": Cpu,
    "Databases & Engineering Tools": Database,
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full"
    >
      {/* 1. Section Header */}
      <div className="skills-header flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00f5a0] mb-3">
          <Terminal className="h-3.5 w-3.5" />
          <span>02 // TECHNICAL ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Architectural Toolkit & Technologies
        </h2>
        <p className="mt-4 text-base text-gray-400 max-w-xl">
          From cutting-edge generative AI retrieval pipelines to resilient real-time backend systems and modern animated frontends.
        </p>
      </div>

      {/* 2. Skills Categories Matrix */}
      <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((category, index) => {
          const Icon = categoryIcons[category.category] || Terminal;

          return (
            <div
              key={index}
              className="skill-category-panel glass-panel rounded-2xl p-7 relative overflow-hidden group hover:border-[#00f5a0]/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#00f5a0] group-hover:bg-[#00f5a0]/10 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.category}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Clean Skill Chips */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-[#00f5a0]/40 hover:bg-[#00f5a0]/5 transition-all duration-200 group/chip"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00f5a0]/70 group-hover/chip:bg-[#00f5a0]" />
                    <span className="text-xs font-mono text-gray-300 group-hover/chip:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}