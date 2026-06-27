import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = ["All", "Wedding", "Birthday", "Reels", "Events"];

const portfolioItems = [
  {
    id: 1,
    title: "Sara & Ahmed's Wedding",
    category: "Wedding",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "4:32",
    year: "2024",
  },
  {
    id: 2,
    title: "Fatima's Birthday Surprise",
    category: "Birthday",
    thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "2:15",
    year: "2024",
  },
  {
    id: 3,
    title: "Brand Reel — Café Bloom",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "0:45",
    year: "2024",
  },
  {
    id: 4,
    title: "Zara & Bilal's Nikah",
    category: "Wedding",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "6:10",
    year: "2023",
  },
  {
    id: 5,
    title: "Annual School Event",
    category: "Events",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "5:00",
    year: "2023",
  },
  {
    id: 6,
    title: "Ali's 1st Birthday",
    category: "Birthday",
    thumbnail: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "1:50",
    year: "2024",
  },
  {
    id: 7,
    title: "TikTok Reel — Clothing Brand",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "0:30",
    year: "2024",
  },
  {
    id: 8,
    title: "Corporate Dinner 2023",
    category: "Events",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "3:20",
    year: "2023",
  },
  {
    id: 9,
    title: "Hina & Omar — Highlight",
    category: "Wedding",
    thumbnail: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "3:48",
    year: "2024",
  },
];

function VideoModal({ item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-inter">{item.category}</p>
            <h3 className="font-cinzel text-white text-xl">{item.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl leading-none"
          >
            ✕
          </button>
        </div>
        <div className="aspect-video bg-black">
          <iframe
            src={item.videoUrl}
            title={item.title}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="bg-white pt-24 md:px-6 sm:px-6 px-0">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-inter mb-4">
            My Work
          </p>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-black">
            Portfolio
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-6" />
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs tracking-widest uppercase font-inter transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#C9A84C] text-black"
                  : "border border-black/20 text-gray-400 hover:border-[#C9A84C]/50 hover:text-[#C9A84C]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={i}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <VideoModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>

      {/* ── Film strip bottom decoration ── */}
      <div className="mt-35 w-full bottom-0 left-0 right-0 h-2 bg-[#C9A84C]/40 z-10" />
    </section>
  );
}

function PortfolioCard({ item, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden cursor-pointer bg-[#111]"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="aspect-video overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-400 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          className="w-14 h-14 rounded-full border-2 border-[#C9A84C] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="text-[#C9A84C] text-xl ml-1">▶</span>
        </motion.div>
      </div>

      {/* Info bar */}
      <div className="p-4 bg-[#111111] border-t border-white/5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-cinzel text-white text-sm font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-xs font-inter mt-1">{item.category} · {item.year}</p>
          </div>
          <span className="text-[#C9A84C] text-xs font-inter border border-[#C9A84C]/30 px-2 py-0.5">
            {item.duration}
          </span>
        </div>
      </div>

    </motion.div>
  );
}
