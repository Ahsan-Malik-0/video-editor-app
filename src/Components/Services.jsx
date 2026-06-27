import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "💍",
    title: "Wedding Films",
    description:
      "Every wedding has a story. I capture the emotions, vows, and celebrations and shape them into a cinematic film you'll watch for years.",
    tags: ["Highlight Reel", "Full Ceremony", "Same-Day Edit"],
  },
  {
    icon: "🎂",
    title: "Birthday & Events",
    description:
      "From a kid's first birthday to a surprise party — I turn your event footage into a short, fun video everyone in the family will love.",
    tags: ["Birthday Parties", "Family Events", "Surprise Reveals"],
  },
  {
    icon: "📱",
    title: "Social Media Reels",
    description:
      "Short, punchy, scroll-stopping edits for Instagram, TikTok, and Facebook. Perfect for personal brands and small businesses.",
    tags: ["Instagram Reels", "TikTok Videos", "Facebook Clips"],
  },
  {
    icon: "🎓",
    title: "Graduation & Ceremonies",
    description:
      "Milestone moments deserve a video that holds up over time. Graduation walks, convocations, and award ceremonies done right.",
    tags: ["Graduation Day", "Convocation", "Award Ceremonies"],
  },
  {
    icon: "🎨",
    title: "Color Grading",
    description:
      "Raw footage can look flat. I apply professional color grading to give your video a consistent, cinematic look and feel.",
    tags: ["Cinematic Look", "Color Correction", "Mood Grading"],
  },
  {
    icon: "✂️",
    title: "Raw Footage Editing",
    description:
      "Already have recorded video but don't know where to start? Send me the raw files and I'll shape it into a clean, watchable edit.",
    tags: ["Cuts & Transitions", "Music Sync", "Text Overlays"],
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-[#fafafa] border border-black/5 p-8 hover:border-[#C9A84C]/40 transition-all duration-400 hover:bg-[#141414]"
    >
      <span className="text-4xl mb-5 block">{service.icon}</span>
      <h3 className="font-cinzel text-black text-lg font-semibold mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-gray-500 font-inter text-sm leading-relaxed mb-5">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-[#C9A84C]/70 border border-[#C9A84C]/20 px-3 py-1 font-inter tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id="services" className="bg-[#ffffff] pt-24 md:px-6 sm:px-6 px-0">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-inter mb-4">
            What I Do
          </p>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-black">
            Services
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-6" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-white/5 rounded">
          {services.map((service, i) => (
            <div key={service.title} className="bg-[#fafafa]/5 rounded">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Film strip bottom decoration ── */}
      <div className="mt-35 w-full bottom-0 left-0 right-0 h-2 bg-[#C9A84C]/40 z-10" />
    </section>
  );
}
