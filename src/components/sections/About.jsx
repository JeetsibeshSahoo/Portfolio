"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo } from "@/content/portfolio-data";
import { Brain, Cpu, Zap, Code2, Award, Terminal } from "lucide-react";

export default function About() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Reveal section header
      gsap.from(".about-header", {
        scrollTrigger: {
          trigger: ".about-header",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      // 2. Stagger in philosophy cards
      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: ".about-cards-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      // 3. Stagger in metrics row
      gsap.from(".metric-card", {
        scrollTrigger: {
          trigger: ".metrics-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.95,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "4+", label: "Client Projects Delivered", detail: "End-to-end full stack architecture" },
    { value: "35%", label: "Latency Reduction", detail: "Through backend request optimization" },
    { value: "~20%", label: "Faster Load Speeds", detail: "Optimized Next.js/React rendering" },
    { value: "SIH '23", label: "2nd Prize Winner", detail: "Smart India Hackathon national finalist" },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full"
    >
      {/* 1. Section Header */}
      <div className="about-header flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00f5a0] mb-3">
          <Terminal className="h-3.5 w-3.5" />
          <span>01 // BACKGROUND & PHILOSOPHY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Bridging AI Intelligence with Scalable Web Infrastructure.
        </h2>
      </div>

      {/* 2. Philosophy & Engineering Pillars */}
      <div className="about-cards-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Card 1: AI & Retrieval Focus */}
        <div className="about-card glass-panel rounded-2xl p-8 relative overflow-hidden group">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00f5a0]/10 border border-[#00f5a0]/20 text-[#00f5a0] mb-6 group-hover:scale-110 transition-transform duration-300">
            <Brain className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            Production AI & Vector Retrieval
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            I don&apos;t just make API calls; I architect production-grade AI systems. From multi-tenant RAG pipelines with strict zero-hallucination guards to ChromaDB vector stores with department-level role access control, I ensure AI operates reliably in business contexts.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-400">
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">LangChain</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">ChromaDB</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">Gemini 3.5 Flash</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">Pydantic v2</span>
          </div>
        </div>

        {/* Card 2: Full Stack & Real-Time Focus */}
        <div className="about-card glass-panel rounded-2xl p-8 relative overflow-hidden group">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#8b5cf6] mb-6 group-hover:scale-110 transition-transform duration-300">
            <Zap className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            High-Speed Web & Real-Time Systems
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Passionate about writing clean, modular code across React, Next.js, and Python (FastAPI). Experienced in low-latency bidirectional protocols (WebSockets via Socket.io and WebRTC audio/video mesh), authentication security (JWT/Bcrypt), and sub-2s API response times.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-400">
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">FastAPI</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">Next.js</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">Socket.io</span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">WebRTC</span>
          </div>
        </div>
      </div>

      {/* 3. Quantifiable Proof Grid */}
      <div className="metrics-grid grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="metric-card glass-panel rounded-xl p-5 border border-white/5 hover:border-[#00f5a0]/30 transition-all duration-300"
          >
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white mb-1 tracking-tight">
              <span className="text-[#00f5a0]">{stat.value}</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-200 mb-1">
              {stat.label}
            </div>
            <div className="text-[11px] text-gray-400 leading-tight">
              {stat.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}