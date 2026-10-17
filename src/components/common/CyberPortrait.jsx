"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/content/portfolio-data";

export default function CyberPortrait() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex justify-center items-center py-12 select-none group cursor-pointer"
    >
      {/* 1. Deep Core Energy Glow */}
      <div className="absolute w-72 h-72 sm:w-84 sm:h-84 rounded-full bg-gradient-to-tr from-[#00f5a0]/30 via-[#8b5cf6]/20 to-transparent blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

      {/* 2. Outer Gyroscope Ring 1 (Dashed Clockwise Rotation) */}
      <div className="absolute w-72 h-72 sm:w-84 sm:h-84 rounded-full border border-dashed border-[#00f5a0]/40 animate-[spin_24s_linear_infinite] pointer-events-none" />

      {/* 3. Outer Gyroscope Ring 2 (Counter-Clockwise Thin Neon Trace) */}
      <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-[#8b5cf6]/20 animate-[spin_32s_linear_infinite_reverse] pointer-events-none">
        {/* Orbital Satellite Node */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#00f5a0] shadow-[0_0_10px_#00f5a0]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full bg-[#8b5cf6] shadow-[0_0_10px_#8b5cf6]" />
      </div>

      {/* 4. The Core Portal (Floating Photo Sphere with 3D Tilt) */}
      <div
        style={{
          transform: `perspective(800px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
          transition: "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1.5 bg-gradient-to-b from-[#00f5a0] via-white/10 to-[#8b5cf6] shadow-[0_0_50px_rgba(0,245,160,0.25)]"
      >
        {/* Inner Dark Mask */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-[#060709] border-2 border-[#060709]">
          <Image
            src="/jeet.jpg"
            alt={personalInfo.name}
            fill
            sizes="(max-width: 640px) 224px, 256px"
            priority
            style={{ objectPosition: "center 15%" }}
            className="object-cover scale-110 group-hover:scale-120 transition-transform duration-700 ease-out"
          />

          {/* Holographic Lens Flare Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#00f5a0]/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}