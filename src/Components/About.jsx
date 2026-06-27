import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const highlights = [
  { number: "150+", label: "Videos Edited" },
  { number: "80+", label: "Happy Clients" },
  { number: "3+", label: "Years of Experience" },
  { number: "15+", label: "Wedding Films" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="bg-[#ffffff] pt-24 md:px-6 sm:px-6 px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, x: -50 }}
          animate={imgInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Gold border frame */}
          <div className="absolute -top-4 -left-4 w-full h-full border border-[#C9A84C]/30" />
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=700&q=80"
            alt="Video editor at work"
            className="w-full aspect-[4/5] object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
          />
          {/* Gold tag */}
          <div className="absolute bottom-6 right-0 z-20 bg-[#C9A84C] text-black px-5 py-3">
            <p className="font-cinzel text-sm font-bold">3+ Years</p>
            <p className="font-inter text-xs tracking-widest uppercase">Experience</p>
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-inter mb-4">
            About Me
          </p>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            I Edit Videos That
            <br />
            <span className="text-[#C9A84C]">People Actually</span>
            <br />
            Remember.
          </h2>

          <div className="w-12 h-0.5 bg-[#C9A84C] mb-8" />

          <p className="text-gray-400 font-inter text-base leading-relaxed mb-5">
            Hi, I'm <span className="text-black font-semibold">Hassan</span> — a freelance video editor
            based in Pakistan. I've been editing videos for over 3 years, working with couples,
            families, and small businesses to tell their stories through well-crafted edits.
          </p>
          <p className="text-gray-400 font-inter text-base leading-relaxed mb-8">
            I started by editing small clips for friends and family. Today, I've worked on
            wedding films, birthday videos, event highlights, and social media content for
            clients across different platforms. Every project I take on, I treat it like it's my own.
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut Pro"].map((tool) => (
              <span
                key={tool}
                className="text-xs text-gray-400 border border-white/10 px-4 py-2 font-inter tracking-wide hover:border-[#C9A84C]/40 hover:text-[#C9A84C] transition-colors duration-300"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
            {highlights.map((h) => (
              <div key={h.label}>
                <p className="font-cinzel text-3xl font-bold text-[#C9A84C]">{h.number}</p>
                <p className="text-gray-500 text-xs tracking-widest uppercase font-inter mt-1">{h.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Film strip bottom decoration ── */}
      <div className="mt-35 w-full bottom-0 left-0 right-0 h-2 bg-[#C9A84C]/40 z-10" />
    </section>
  );
}
