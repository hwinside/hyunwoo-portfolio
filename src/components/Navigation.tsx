"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const navItems = [
  { label: { en: "About", kr: "소개" }, href: "#about" },
  { label: { en: "Experience", kr: "경력" }, href: "#experience" },
  { label: { en: "Content", kr: "콘텐츠" }, href: "#content" },
  { label: { en: "Education", kr: "학력" }, href: "#education" },
  { label: { en: "Contact", kr: "연락처" }, href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const { language, toggleLanguage } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300 border border-white/10"
          >
            {language === "en" ? "KR" : "EN"}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs text-white/70 hover:text-white transition-colors"
              >
                {item.label[language]}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white/80 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white/80 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white/80 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-semibold text-white/80 hover:text-white transition-colors"
          >
            {item.label[language]}
          </a>
        ))}
        <button
          onClick={toggleLanguage}
          className="px-5 py-2 rounded-full text-sm font-semibold bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all duration-300 border border-white/10"
        >
          {language === "en" ? "KR" : "EN"}
        </button>
      </motion.div>
    </>
  );
}
