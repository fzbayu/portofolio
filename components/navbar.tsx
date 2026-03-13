"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menus = [
    { name: "About Me", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Xperience", id: "pengalaman" },
    { name: "Certificate", id: "sertifikat" },
    { name: "Tech Stack", id: "tech" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Tutup menu mobile jika terbuka

    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 100; // Offset agar tidak tertutup navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[var(--cream)]/90 backdrop-blur-md z-[40] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between md:justify-center items-center">
        
        {/* LOGO (Muncul di Mobile saja untuk keseimbangan visual) */}
        <div className="md:hidden text-xl font-black tracking-tighter">FZBAYU</div>

        {/* DESKTOP MENU: Style Pill Button */}
        <div className="hidden md:flex gap-4">
          {menus.map((menu, i) => (
            <a
              key={i}
              href={`#${menu.id}`}
              onClick={(e) => handleScroll(e, menu.id)}
              className="px-6 py-2 rounded-full border border-black text-sm tracking-tight hover:bg-black hover:text-white transition-all duration-300"
            >
              {menu.name}
            </a>
          ))}
        </div>

        {/* HAMBURGER TOGGLE (Mobile Only) */}
        <button 
          className="md:hidden p-2 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="right-0 fixed bg-black text-white flex flex-col items-end justify-center gap-6 z-[1000] px-9 md:px-10 py-10"
          >
            {/* <button 
              className="absolute top-6 right-6 text-3xl" 
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button> */}
            {menus.map((menu, i) => (
              <a
                key={i}
                href={`#${menu.id}`}
                onClick={(e) => handleScroll(e, menu.id)}
                className="text-3xl font-light tracking-tighter hover:text-orange-500 transition-colors"
              >
                {menu.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}