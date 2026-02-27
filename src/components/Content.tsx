"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const contents = [
  {
    title: "쇼핑몰은 어떻게 미디어가 되어가고 있나? (김현우 몰로코 이사)",
    type: "Video",
    thumbnail: "/content/yt1.jpg",
    url: "https://youtu.be/cTROwf8btsw?si=sd_KSIsYq1S6puOJ",
    isVideo: true,
  },
  {
    title: "아마존 입점도 안 한 회사가 왜 아마존에 광고할까? (김현우 몰로코 이사)",
    type: "Video",
    thumbnail: "/content/yt2.jpg",
    url: "https://youtu.be/Wvdrw7nzCR8?si=hQeBgBKdg11v96dU",
    isVideo: true,
  },
  {
    title: "[SK TECH SUMMIT 2023] The Future is Now: 모바일 광고에서의 머신러닝",
    type: "Video",
    thumbnail: "/content/yt3.jpg",
    url: "https://youtu.be/rI8OXKAlKvA?si=4yBTAq6J9-bwf_aG",
    isVideo: true,
  },
  {
    title: "커머스 빅데이터와 애드테크의 만남 '위메프 AMP' — 몰로코 김현우 이사 인터뷰",
    type: "Article",
    thumbnail: "/content/article1.png",
    url: "https://www.mobiinside.co.kr/2019/02/27/moloco-amp/",
    isVideo: false,
  },
  {
    title: "잘 나가던 피키캐스트 나가고 6년 동안 AI 플랫폼 회사에 다닌 이유",
    type: "Article",
    thumbnail: "/content/article2.jpg",
    url: "https://www.mk.co.kr/news/fastview/10617689",
    isVideo: false,
  },
];

function ContentCard({
  item,
  index,
}: {
  item: (typeof contents)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.a
      ref={ref}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex-shrink-0 w-[320px] sm:w-[380px] cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-video bg-white/5">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {item.isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm text-white/80 border border-white/10">
            {item.type}
          </span>
        </div>
      </div>
      <div className="mt-4 px-1">
        <h3 className="text-white font-medium text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
          {item.title}
        </h3>
      </div>
    </motion.a>
  );
}

export default function Content() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 400;
      scrollRef.current.scrollBy({
        left: direction === "right" ? amount : -amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="content" className="relative py-32 sm:py-40 bg-black">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 60 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="px-6 mb-16 flex items-end justify-between"
        >
          <div>
            <p className="text-blue-400/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              {language === "kr" ? "콘텐츠" : "Content"}
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              {language === "kr" ? (
                <>
                  강연, 인터뷰
                  <br />
                  <span className="text-white/40">& 기고.</span>
                </>
              ) : (
                <>
                  Talks, interviews
                  <br />
                  <span className="text-white/40">& publications.</span>
                </>
              )}
            </h2>
          </div>
          {/* Navigation arrows */}
          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Horizontal scroll carousel */}
        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto px-6 pb-6 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
            {contents.map((item, index) => (
              <ContentCard key={item.url} item={item} index={index} />
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute top-0 right-0 bottom-6 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
