import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sara & Ahmed Khan",
    role: "Wedding Clients",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    review:
      "Hassan turned our raw wedding footage into something we cry over every time we watch it. The transitions, the music, the way he captured the small moments — it felt like a real film. Highly recommend.",
    rating: 5,
    project: "Wedding Film",
  },
  {
    id: 2,
    name: "Usman Tariq",
    role: "Small Business Owner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    review:
      "I needed a reel for my clothing brand. Hassan delivered exactly what I asked for — clean cuts, good pacing, and it looked professional. My Instagram engagement went up noticeably after posting it.",
    rating: 5,
    project: "Brand Reel",
  },
  {
    id: 3,
    name: "Ayesha Malik",
    role: "Birthday Event",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    review:
      "We had hours of messy phone footage from my son's birthday party. Hassan sorted through all of it and made a beautiful 3-minute video. The whole family loves it. Great guy to work with too.",
    rating: 5,
    project: "Birthday Video",
  },
  {
    id: 4,
    name: "Bilal Hussain",
    role: "Corporate Client",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    review:
      "We hired Hassan for our annual dinner event coverage. He was on time, professional, and the final edit was ready faster than I expected. Will definitely work with him again.",
    rating: 5,
    project: "Corporate Event",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#C9A84C] text-sm">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section id="testimonials" className="bg-[#0D0D0D] py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-inter mb-4">
            Client Words
          </p>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white">
            Testimonials
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-6" />
        </motion.div>

        {/* Active Testimonial */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#111111] border border-white/5 p-8 md:p-12 text-center"
            >
              {/* Quote mark */}
              <span className="font-cinzel text-7xl text-[#C9A84C]/20 leading-none block mb-4">"</span>

              <p className="text-gray-300 font-inter text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                {testimonials[active].review}
              </p>

              <StarRating count={testimonials[active].rating} />

              <div className="flex items-center justify-center gap-4 mt-6">
                <img
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  className="w-12 h-12 rounded-full object-cover grayscale"
                />
                <div className="text-left">
                  <p className="font-cinzel text-white font-semibold text-sm">
                    {testimonials[active].name}
                  </p>
                  <p className="text-[#C9A84C] text-xs font-inter tracking-wide">
                    {testimonials[active].role} · {testimonials[active].project}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/20 text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 flex items-center justify-center"
            >
              ←
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 ${
                    i === active
                      ? "w-6 h-1 bg-[#C9A84C]"
                      : "w-2 h-1 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-white/20 text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300 flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
