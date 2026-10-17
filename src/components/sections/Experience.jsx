"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceData, achievementsData, educationData } from "@/content/portfolio-data";
import { Terminal, Briefcase, Award, GraduationCap, CheckCircle2, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Reveal header
      gsap.from(".exp-header", {
        scrollTrigger: {
          trigger: ".exp-header",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      // 2. Animate experience items
      const items = gsap.utils.toArray(".timeline-item");
      items.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          x: -30,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      // 3. Reveal education & awards
      gsap.from(".credential-card", {
        scrollTrigger: {
          trigger: ".credentials-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full"
    >
      {/* 1. Section Header */}
      <div className="exp-header flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00f5a0] mb-3">
          <Terminal className="h-3.5 w-3.5" />
          <span>04 // CAREER & MILESTONES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Professional Experience & Honors
        </h2>
        <p className="mt-4 text-base text-gray-400 max-w-xl">
          Track record of shipping production features, collaborating across distributed teams, and engineering AI solutions.
        </p>
      </div>

      {/* 2. Work Experience Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l border-white/10 ml-3 sm:ml-4 flex flex-col gap-12 mb-20">
        {experienceData.map((exp, index) => (
          <div key={index} className="timeline-item relative">
            {/* Illuminated Marker Node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#060709] border-2 border-[#00f5a0] shadow-[0_0_12px_rgba(0,245,160,0.5)]">
              <div className="h-2 w-2 rounded-full bg-[#00f5a0]" />
            </div>

            {/* Experience Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 hover:border-[#00f5a0]/30 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00f5a0] bg-[#00f5a0]/10 px-2.5 py-1 rounded-md border border-[#00f5a0]/20">
                  <Briefcase className="h-3.5 w-3.5" />
                  <span>{exp.company}</span>
                </span>
                <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {exp.role}
              </h3>

              <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-300">
                {exp.achievements.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-[#00f5a0] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Honors, Hackathons & Education Credentials */}
      <div className="credentials-grid grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hackathon Awards Card */}
        <div className="credential-card glass-panel rounded-2xl p-7">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00f5a0]/10 border border-[#00f5a0]/20 text-[#00f5a0]">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Honors & Competitions</h3>
              <p className="text-xs text-gray-400">Recognized engineering excellence</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {achievementsData.map((item, idx) => (
              <div key={idx} className="pb-3 border-b border-white/5 last:border-0 last:pb-0">
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className="font-semibold text-white">{item.title}</span>
                  <span className="text-[#00f5a0]">{item.year}</span>
                </div>
                <p className="text-xs text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Degree Card */}
        <div className="credential-card glass-panel rounded-2xl p-7">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[#8b5cf6]">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Education & Academics</h3>
              <p className="text-xs text-gray-400">Formal computer science foundation</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-base font-semibold text-white">
              {educationData.degree}
            </h4>
            <p className="text-xs font-mono text-[#00f5a0]">
              {educationData.institution} • {educationData.location}
            </p>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5 text-xs font-mono">
              <span className="text-gray-400">Duration: {educationData.period}</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 text-white font-bold border border-white/10">
                CGPA: {educationData.cgpa}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}