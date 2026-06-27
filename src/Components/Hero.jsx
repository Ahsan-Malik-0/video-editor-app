import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden bg-[#0A0A0A]">

      {/* ── Background Video ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="./assets/hero.mp4"
        autoPlay
        loop
        muted={muted}
        playsInline
      />

      {/* ── Dark cinematic overlay — heavier at bottom for text legibility ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />

      {/* ── Film grain texture overlay ── */}
      <div className="absolute inset-0 film-grain opacity-[0.03] pointer-events-none" />

      {/* ── Top bar — mute toggle + brand mark ── */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-end px-8 pt-8">
        <button
          onClick={() => setMuted((m) => !m)}
          className="flex items-center gap-2 text-white/40 hover:text-[#C9A84C] transition-colors duration-300 text-xs font-inter tracking-widest uppercase"
        >
          <span className="text-lg">{muted ? "🔇" : "🔊"}</span>
          <span className="hidden sm:inline">{muted ? "Sound Off" : "Sound On"}</span>
        </button>
      </div>

      {/* ── Film strip top decoration ── */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[#C9A84C]/60 z-10" />

      {/* ── Main content — bottom-left aligned, cinematic layout ── */}
      <div className="relative z-10 px-8 md:px-16 pb-24 md:pb-28 max-w-5xl">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-10 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs tracking-[0.5em] uppercase font-inter">
            Professional Video Editor
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-cinzel font-bold text-white leading-[1.05] mb-6"
          style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
        >
          Your Story,
          <br />
          <span className="text-[#C9A84C] text-glow">Beautifully</span>
          <br />
          <span className="text-white/90">Told.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-300/80 font-inter text-base md:text-lg leading-relaxed mb-10 max-w-xl"
        >
          Wedding films, birthday memories, event highlights — I take your raw footage
          and shape it into something you'll want to watch again and again.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => scrollTo("portfolio")}
            className="group relative bg-[#C9A84C] text-black px-8 py-4 font-inter font-semibold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-[#e0bb60]"
          >
            <span className="relative z-10">View My Work</span>
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="border border-white/30 text-white px-8 py-4 font-inter font-semibold text-sm tracking-widest uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] backdrop-blur-sm bg-black/20 transition-all duration-300"
          >
            Get a Quote
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex gap-10 mt-14 pt-8 border-t border-white/10"
        >
          {[
            { number: "150+", label: "Videos Edited" },
            { number: "80+", label: "Happy Clients" },
            { number: "3+", label: "Years" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-cinzel text-2xl md:text-3xl font-bold text-[#C9A84C]">{stat.number}</p>
              <p className="text-gray-500 text-xs tracking-widest uppercase font-inter mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator — right side ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute right-8 bottom-1/3 z-20 flex flex-col items-center gap-3"
      >
        <span
          className="text-gray-600 text-xs tracking-[0.3em] uppercase font-inter"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll Down
        </span>
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
          className="w-px h-16 bg-gradient-to-b from-[#C9A84C] to-transparent"
        />
      </motion.div>

      {/* ── Film strip bottom decoration ── */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#C9A84C]/40 z-10" />
    </section>
  );
}
