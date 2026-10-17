"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/content/portfolio-data";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scroll to add slight elevation/shadow to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 sm:py-6 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl rounded-full px-5 py-3 transition-all duration-300 border ${
          isScrolled
            ? "bg-[#0d0f14]/85 backdrop-blur-md border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
            : "bg-[#0d0f14]/50 backdrop-blur-sm border-white/5"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-white font-medium tracking-tight text-sm sm:text-base group"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-[#00f5a0]/50 transition-colors">
            <Terminal className="h-4 w-4 text-[#00f5a0]" />
          </div>
          <span>
            <span className="font-semibold">{personalInfo.name.split(" ")[0]}</span>
            <span className="text-white/40 font-mono text-xs ml-1 hidden sm:inline-block">
              .dev
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Live Status Badge & Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f5a0]/10 border border-[#00f5a0]/20 text-[11px] font-mono text-[#00f5a0]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f5a0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f5a0]"></span>
            </span>
            <span className="truncate max-w-[140px]">{personalInfo.status}</span>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-[#00f5a0] hover:text-[#060709] transition-all duration-300"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          className="flex md:hidden h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-200 hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* Mobile Slide-down Overlay */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 z-50 rounded-2xl bg-[#0d0f14]/95 backdrop-blur-xl border border-white/10 p-5 shadow-2xl md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-mono"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="h-4 w-4 text-[#00f5a0]" />
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00f5a0]">
                <span className="h-2 w-2 rounded-full bg-[#00f5a0]"></span>
                <span>{personalInfo.status}</span>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-1.5 rounded-full bg-[#00f5a0] text-black text-xs font-semibold"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}