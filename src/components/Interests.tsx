"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Interest {
  title: string;
  titleKr?: string;
  emoji: string;
  image: string; // /interests/xxx.jpg
  video?: string; // optional video
}

const INTERESTS: Interest[] = [
  { title: "Vibe Coding", emoji: "💻", image: "/interests/vibe-coding.jpg", video: "/interests/vibe-coding.mp4" },
  { title: "Bowling", emoji: "🎳", image: "/interests/bowling.jpg", video: "/interests/bowling.mp4" },
  { title: "Playing with my daughter", emoji: "👶", image: "/interests/harin.jpg", video: "/interests/harin.mp4" },
  { title: "Golf", emoji: "⛳", image: "/interests/golf.jpg", video: "/interests/golf.mp4" },
  { title: "Fred again..", emoji: "🎵", image: "/interests/fredagain.jpg", video: "/interests/fredagain.mp4" },
  { title: "LG Twins", emoji: "⚾", image: "/interests/lgtwins.jpg", video: "/interests/lgtwins.mp4" },
  { title: "Dining", emoji: "🍽️", image: "/interests/dining.jpg", video: "/interests/dining.mp4" },
  { title: "Golden State Warriors", emoji: "🏀", image: "/interests/warriors.jpg", video: "/interests/warriors.mp4" },
  { title: "A Wild Challenge", titleKr: "무모한 도전", emoji: "🔥", image: "/interests/wild-challenge.jpg", video: "/interests/wild-challenge.mp4" },
];

export default function Interests() {
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % INTERESTS.length);
  };

  const startImageTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(goNext, 5000);
  };

  useEffect(() => {
    // 사진인 경우만 타이머 (영상은 onEnded로 처리)
    const item = INTERESTS[current];
    if (!item.video) {
      startImageTimer();
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current]);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const interest = INTERESTS[current];

  return (
    <section id="interests" className="relative py-24 sm:py-32 bg-black">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Interests
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            {language === "kr" ? (<>일 밖에서 저를<br /><span className="text-neutral-400">움직이게 하는 것들</span></>) : (<>Things that keep me<br /><span className="text-neutral-400">inspired outside of work</span></>)}
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto max-w-2xl"
        >
          {/* Image container */}
          <div className="relative aspect-[9/16] sm:aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-900 shadow-lg">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {interest.video ? (
                  <video
                    src={interest.video}
                    autoPlay
                    muted
                    playsInline
                    onEnded={goNext}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <Image
                    src={interest.image}
                    alt={interest.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 672px"
                    unoptimized
                  />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-3xl sm:text-4xl mb-2 block">{interest.emoji}</span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {language === "kr" && interest.titleKr ? interest.titleKr : interest.title}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {INTERESTS.map((item, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-white ring-2 ring-blue-400 scale-110"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <span className="text-lg">{item.emoji}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
