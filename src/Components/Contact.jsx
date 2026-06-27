import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with EmailJS or your backend
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white pt-24 md:px-6 sm:px-6 px-0">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase font-inter mb-4">
            Let's Work Together
          </p>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-black">
            Get in Touch
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-gray-400 font-inter text-base leading-relaxed mb-10">
              Have a project in mind? Whether it's a wedding film, birthday video, or a social
              media reel — I'd love to hear about it. Send me a message and I'll get back
              to you within 24 hours.
            </p>

            {/* Contact info */}
            <div className="space-y-6 mb-10">
              {[
                { icon: "📱", label: "WhatsApp", value: "+92 300 1234567", href: "https://wa.me/923001234567" },
                { icon: "✉️", label: "Email", value: "hassan@framecraft.pk", href: "mailto:hassan@framecraft.pk" },
                { icon: "📍", label: "Location", value: "Rawalpindi, Pakistan", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-[#C9A84C] text-xs tracking-widest uppercase font-inter mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-300 font-inter text-sm hover:text-[#C9A84C] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 font-inter text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-600 text-xs tracking-widest uppercase font-inter mb-4">Follow My Work</p>
              <div className="flex gap-4">
                {[
                  { label: "Instagram", href: "#" },
                  { label: "TikTok", href: "#" },
                  { label: "YouTube", href: "#" },
                  { label: "Facebook", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-xs text-gray-500 border border-black/30 px-3 py-2 font-inter tracking-wide hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all duration-300"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-2">
                <div>
                  <label className="text-gray-500 text-xs tracking-widest uppercase font-inter block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Ahmed Khan"
                    className="w-full bg-white border border-black/10 text-white font-inter text-sm px-4 py-3 focus:outline-none focus:border-[#C9A84C]/60 placeholder-gray-700 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-xs tracking-widest uppercase font-inter block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-white border border-black/10 text-black font-inter text-sm px-4 py-3 focus:outline-none focus:border-[#C9A84C]/60 placeholder-gray-700 transition-colors"
                  />
                </div>
              </div>

              <div className="mb-2">
                <label className="text-gray-500 text-xs tracking-widest uppercase font-inter block mb-2">
                  Service Needed
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-black/10 text-black font-inter text-sm px-4 py-3 focus:outline-none focus:border-[#C9A84C]/60 transition-colors appearance-none"
                >
                  <option value="" disabled>Select a service</option>
                  <option>Wedding Film</option>
                  <option>Birthday Video</option>
                  <option>Social Media Reel</option>
                  <option>Event Coverage</option>
                  <option>Color Grading</option>
                  <option>Raw Footage Editing</option>
                </select>
              </div>

              <div>
                <label className="text-gray-500 text-xs tracking-widest uppercase font-inter block mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me a bit about your project..."
                  className="w-full bg-white border border-black/10 text-black font-inter text-sm px-4 py-3 focus:outline-none focus:border-[#C9A84C]/60 placeholder-gray-700 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C9A84C] text-black font-inter font-semibold text-sm tracking-widest uppercase py-4 hover:bg-[#e0bb60] transition-all duration-300"
              >
                {sent ? "Message Sent ✓" : "Send Message"}
              </button>
            </form>

            {/* WhatsApp quick button */}
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 w-full border border-black/30 text-gray-400 font-inter text-sm tracking-widest uppercase py-4 mt-2 hover:border-green-500/40 hover:text-green-400 transition-all duration-300"
            >
              <span className="text-lg">💬</span> Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Film strip bottom decoration ── */}
      <div className="mt-35 w-full bottom-0 left-0 right-0 h-2 bg-[#C9A84C]/40 z-10" />
    </section>
  );
}
