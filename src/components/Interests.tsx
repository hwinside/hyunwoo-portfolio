"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Interest {
  title: string;
  emoji: string;
  image: string; // /interests/xxx.jpg
  video?: string; // optional video
}

const INTERESTS: Interest[] = [
  { title: "Vibe Coding", emoji: "💻", image: "/interests/vibe-coding.jpg" },
  { title: "Bowling", emoji: "🎳", image: "/interests/bowling.jpg", video: "/interests/bowling.mp4" },
  { title: "Golf", emoji: "⛳", image: "/interests/golf.jpg", video: "/interests/golf.mp4" },
  { title: "LG Twins", emoji: "⚾", image: "/interests/lgtwins.jpg", video: "/interests/lgtwins.mp4" },
  { title: "Golden State Warriors", emoji: "🏀", image: "/interests/warriors.jpg", video: "/interests/warriors.mp4" },
  { title: "Fred again..", emoji: "🎵", image: "/interests/fredagain.jpg", video: "/interests/fredagain.mp4" },
  { title: "Dining", emoji: "🍽️", image: "/interests/dining.jpg", video: "/interests/dining.mp4" },
  { title: "Playing with my daughter", emoji: "👶", image: "/interests/harin.jpg", video: "/interests/harin.mp4" },
];

export default function Interests() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % INTERESTS.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    startTimer();
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const interest = INTERESTS[current];

  return (
    <section id="interests" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Interests
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Things that keep me inspired outside of work.
          </p>
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100 shadow-lg">
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
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={interest.image}
                    alt={interest.title}
                    fill
                    className="object-cover"
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
                      {interest.title}
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
                className={`group relative flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300 ${
                  i === current
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                }`}
              >
                <span className="text-sm">{item.emoji}</span>
                <span className={`text-xs font-medium transition-all duration-300 ${
                  i === current ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0 overflow-hidden"
                }`}>
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
