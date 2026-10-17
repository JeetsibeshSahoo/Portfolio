import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/common/SmoothScroll";
import CustomCursor from "@/components/common/CustomCursor";
import NeuralCanvas from "@/components/common/NeuralCanvas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jeet Sibesh Sahoo | AI Full Stack Developer",
  description:
    "Portfolio of Jeet Sibesh Sahoo — AI Full Stack Developer specializing in Next.js, FastAPI, LangChain, ChromaDB, and real-time interactive systems.",
  keywords: [
    "Jeet Sibesh Sahoo",
    "AI Full Stack Developer",
    "FastAPI",
    "Next.js",
    "LangChain",
    "ChromaDB",
    "GSAP Portfolio",
    "Creative Developer",
  ],
  authors: [{ name: "Jeet Sibesh Sahoo" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#060709] text-gray-100 min-h-screen relative selection:bg-[#00f5a0] selection:text-[#060709] overflow-x-hidden`}
      >
        {/* Layer 1: Custom Interactive Cursor */}
        <CustomCursor />

        {/* Layer 2: Crazy Multi-Layered Atmospheric Background */}
        <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0">
          {/* Cyber Perspective Grid */}
          <div className="absolute inset-0 cyber-grid opacity-25" />
          {/* Interactive Neural AI Particle Constellation */}
          <NeuralCanvas />
          {/* Ambient Cosmic Radial Glows */}
          <div className="absolute inset-0 ambient-glow opacity-80" />
          {/* Vignette Edge Shading */}
          <div className="absolute inset-0 bg-radial from-transparent via-[#060709]/50 to-[#060709]" />
        </div>

        {/* Layer 3: Smooth Scroll Container & App Content */}
        <SmoothScroll>
          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}