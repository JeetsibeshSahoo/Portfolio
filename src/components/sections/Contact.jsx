"use client";

import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo } from "@/content/portfolio-data";
import { Terminal, Mail, Check, Copy, ArrowUpRight, ArrowUp, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-card", {
        scrollTrigger: {
          trigger: ".contact-card",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full"
    >
      {/* 1. Main Interactive Contact Card */}
      <div className="contact-card glass-panel rounded-3xl p-8 sm:p-14 relative overflow-hidden border border-white/10 hover:border-[#00f5a0]/40 transition-all duration-300 mb-16">
        {/* Glow orb */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00f5a0]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00f5a0] mb-4">
            <Terminal className="h-3.5 w-3.5" />
            <span>05 // INITIATE TRANSMISSION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Let&apos;s Build Something <span className="text-[#00f5a0]">Extraordinary</span> Together.
          </h2>

          <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed">
            Whether you need a robust production RAG pipeline, high-throughput FastAPI microservices, or a sleek Next.js client application—I&apos;m ready to architect and ship.
          </p>

          {/* Interactive Email Copy Pill & Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            {/* Primary mailto link */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3.5 rounded-full bg-[#00f5a0] text-[#060709] font-semibold text-sm hover:shadow-[0_0_25px_rgba(0,245,160,0.4)] transition-all flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              <span>Send Direct Email</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs hover:bg-white/10 hover:border-[#00f5a0]/40 transition-colors flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#00f5a0]" />
                  <span className="text-[#00f5a0]">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-gray-400" />
                  <span>{personalInfo.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Details Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 text-xs font-mono text-gray-400">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#00f5a0]" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#00f5a0]" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 text-[#00f5a0]">
              <span className="h-2 w-2 rounded-full bg-[#00f5a0] animate-pulse" />
              <span>{personalInfo.status}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Footer Bar */}
      <footer className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-xs font-mono text-gray-500">
        <div>
          <span>© 2026 {personalInfo.name}. All rights reserved.</span>
          <span className="hidden sm:inline-block ml-2 text-gray-600">
            • Built with Next.js, Tailwind & GSAP
          </span>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00f5a0] transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00f5a0] transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:text-white hover:border-[#00f5a0]/40 transition-colors text-[11px]"
          >
            <span>Top</span>
            <ArrowUp className="h-3 w-3 text-[#00f5a0]" />
          </button>
        </div>
      </footer>
    </section>
  );
}