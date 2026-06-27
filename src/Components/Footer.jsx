export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080808] border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <span className="text-[#C9A84C]">✦</span>
              <span className="font-cinzel text-white text-lg font-bold tracking-widest">
                FRAME<span className="text-[#C9A84C]">CRAFT</span>
              </span>
            </div>
            <p className="text-gray-600 text-xs font-inter">
              Professional Video Editing · Pakistan
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {["Services", "Portfolio", "About", "Testimonials", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-gray-600 hover:text-[#C9A84C] text-xs tracking-widest uppercase font-inter transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {["IG", "TT", "YT", "FB"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 border border-white/10 flex items-center justify-center text-gray-600 hover:border-[#C9A84C]/40 hover:text-[#C9A84C] text-xs font-cinzel transition-all duration-300"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-700 text-xs font-inter tracking-wide">
            © {new Date().getFullYear()} FrameCraft. All rights reserved. · Built with ❤️ for storytellers.
          </p>
        </div>
      </div>
    </footer>
  );
}
