"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-black to-indigo-950/40 animate-gradient" />
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[100px] animate-float" />
        <div
          className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[80px] animate-float-reverse"
        />
        <div
          className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[60px] animate-float"
          style={{ animationDelay: "5s" }}
        />
        {/* Center glow behind profile */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-glow"
        />
        {/* Small orbiting accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 bg-blue-400/40 rounded-full blur-sm animate-orbit" />
        </div>
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-2 ring-white/10 ring-offset-4 ring-offset-black">
              <img src="/photos/profile.jpg" alt="Hyunwoo Kim" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-blue-400/80 text-sm tracking-[0.3em] uppercase mb-6 font-medium"
          >
            SENIOR DIRECTOR,<br />BUSINESS DEVELOPMENT<br />@MOLOCO
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05]"
          >
            {language === "kr" ? "김현우" : "Hyunwoo Kim"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {language === "kr"
              ? "광고, 기술, 제품의 교차점에서 20년 넘게 일해 왔습니다."
              : "20+ years driving growth at the intersection of advertising, technology, and product innovation."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <span>{language === "kr" ? "스크롤하여 탐색" : "Scroll to explore"}</span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-lg"
              >
                &darr;
              </motion.span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
