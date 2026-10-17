"use client";

import { useState, useRef } from "react";
import { personalInfo } from "@/content/portfolio-data";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0, left: 0, width: 0 });
  const navRef = useRef(null);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Liquid sliding spotlight pill logic
  const handleMouseEnter = (e) => {
    const target = e.currentTarget;
    const navRect = navRef.current.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    setIndicatorStyle({
      opacity: 1,
      left: targetRect.left - navRect.left,
      width: targetRect.width,
    });
  };

  const handleMouseLeave = () => {
    setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6 pointer-events-none">
      <div
        ref={navRef}
        onMouseLeave={handleMouseLeave}
        className="pointer-events-auto relative flex items-center justify-between sm:justify-start gap-1 p-1.5 rounded-full bg-[#0d0f14]/80 border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
      >
        {/* Sliding Liquid Spotlight Pill (The "Crazy" Physics) */}
        <div
          aria-hidden="true"
          style={{
            transform: `translateX(${indicatorStyle.left}px)`,
            width: `${indicatorStyle.width}px`,
            opacity: indicatorStyle.opacity,
          }}
          className="absolute top-1.5 bottom-1.5 left-0 rounded-full bg-[#00f5a0]/15 border border-[#00f5a0]/40 shadow-[0_0_20px_rgba(0,245,160,0.25)] transition-all duration-300 ease-out pointer-events-none"
        />

        {/* Brand Dot Logo */}
        <a
          href="#"
          className="relative z-10 flex items-center gap-2 pl-3 pr-2 py-1 text-white text-xs font-semibold tracking-tight group"
        >
          <span className="h-2 w-2 rounded-full bg-[#00f5a0] shadow-[0_0_10px_#00f5a0] group-hover:scale-125 transition-transform" />
          <span>{personalInfo.name.split(" ")[0]}</span>
        </a>

        {/* Separator Line */}
        <div className="h-3.5 w-px bg-white/10 hidden sm:block mx-1" />

        {/* Desktop Links with Sliding Indicator */}
        <div className="hidden sm:flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={handleMouseEnter}
              className="relative z-10 px-3.5 py-1.5 rounded-full text-xs font-mono text-gray-300 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Separator Line */}
        <div className="h-3.5 w-px bg-white/10 hidden sm:block mx-1" />

        {/* Minimal High-Contrast Action Pill */}
        <a
          href="#contact"
          className="relative z-10 hidden sm:flex items-center gap-1 pl-3 pr-2.5 py-1.5 rounded-full bg-white text-[#060709] text-xs font-bold hover:bg-[#00f5a0] transition-colors duration-300 ml-1"
        >
          <span>Talk</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="relative z-10 flex sm:hidden h-8 w-8 items-center justify-center rounded-full text-white hover:bg-white/5"
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-6 top-20 z-50 rounded-2xl bg-[#0d0f14]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl sm:hidden">
          <div className="flex flex-col gap-2 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-gray-200 hover:bg-white/5 hover:text-[#00f5a0] transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="h-4 w-4 text-[#00f5a0]" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 p-3 rounded-xl bg-[#00f5a0] text-black text-center font-bold"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}