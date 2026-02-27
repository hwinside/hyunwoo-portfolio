"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();

  const stats = language === "kr"
    ? [
        { number: "20+", label: "경력연수" },
        { number: "4", label: "커리어 트랙:\nENG · AE · PM · BizDev" },
        { number: "#8", label: "MOLOCO 근속연수 기준\n8번째 장기 근속 (800명 이상 중)" },
        { number: "APAC", label: "글로벌 활동 범위" },
      ]
    : [
        { number: "20+", label: "Years of Experience" },
        { number: "4", label: "Career Tracks:\nENG · AE · PM · BizDev" },
        { number: "#8", label: "Longest Tenure at MOLOCO\n(out of 800+ employees)" },
        { number: "APAC", label: "Global Reach" },
      ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 sm:py-40 bg-black"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-blue-400/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            {language === "kr" ? "소개" : "About"}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            {language === "kr" ? (
              <>
                광고와 기술, 제품의 교차점에서
                <br />
                <span className="text-white/40">다양한 고객을 만나오며.</span>
              </>
            ) : (
              <>
                A seasoned leader
                <br />
                <span className="text-white/40">in AdTech.</span>
              </>
            )}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-6">
            <p className="text-lg text-white/50 leading-relaxed font-light">
              {language === "kr"
                ? "비즈니스 개발, 프로덕트 매니지먼트, 디지털 광고 분야에서 경험을 쌓아 왔습니다. NAVER에서 디스플레이 광고 제품을 만들고 Pikicast에서 수익화 엔진을 구축하는 등, 다양한 도전을 거쳐 지금에 이르렀습니다."
                : "A seasoned AdTech leader with deep expertise in business development, product management, and digital advertising. From shaping display ad products at NAVER to building monetization engines at Pikicast — a journey defined by innovation and impact."}
            </p>
            <p className="text-lg text-white/50 leading-relaxed font-light">
              {language === "kr"
                ? "AI 기업 MOLOCO에 첫 번째 Product Manager로 합류해 회사의 첫 제품인 Moloco Ads 런칭에 참여했습니다. 이후 Moloco Commerce Media 사업의 창립 멤버로서, 연간 총 광고비 $154M 규모의 사업으로 성장시키는 과정에 함께했습니다."
                : <>Joined MOLOCO — a world-class AI company powering machine learning-based advertising solutions — as its first Product Manager, successfully launching Moloco Ads, the company&apos;s inaugural product. Then became a founding member of the Moloco Commerce Media business, helping grow it into a $154M annual gross ad spend operation.</>}
            </p>
            <p className="text-lg text-white/50 leading-relaxed font-light">
              {language === "kr"
                ? "현재 Moloco Commerce Media의 비즈니스 개발을 담당하며, 한국의 주요 이커머스 및 리테일 플랫폼들과 함께 AI 기반 리테일 미디어의 가능성을 넓혀가고 있습니다."
                : <>Now leading business development for Moloco Commerce Media, driving AI-powered retail media innovation by partnering with Korea&apos;s top-tier e-commerce and retail platforms to transform the retail media landscape.</>}
            </p>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/photos/about.jpg"
                alt="Hyunwoo Kim speaking at conference"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white/40 whitespace-pre-line">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <span className="text-3xl sm:text-4xl font-bold text-white">10+</span>
            <p className="text-sm text-white/40 mt-2">
              {language === "kr" ? "Commerce Media 딜 클로즈" : "Commerce Media Deals Closed"}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
            {[
              { name: "GS Shop", logo: "/logos/partners/gsshop.png", h: 30 },
              { name: "오늘의집", logo: "/logos/partners/ohouse.jpg", h: 48 },
              { name: "요기요", logo: "/logos/partners/yogiyo.jpg", h: 40 },
              { name: "SSG.com", logo: "/logos/partners/ssg.jpg", h: 64 },
              { name: "CJ올리브영", logo: "/logos/partners/oliveyoung.jpg", h: 32 },
              { name: "컬리", logo: "/logos/partners/kurly.jpg", h: 28 },
              { name: "CJ온스타일", logo: "/logos/partners/cjonstyle.jpg", h: 20 },
              { name: "배달의민족", logo: "/logos/partners/woowa.png", h: 18 },
              { name: "W Concept", logo: "/logos/partners/wconcept.png", h: 64 },
              { name: "29CM", logo: "/logos/partners/29cm.png", h: 18 },
              { name: "Trenbe", logo: "/logos/partners/trenbe.png", h: 18 },
            ].map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-xl px-4 py-3 flex items-center justify-center h-14 sm:h-18 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{ height: `${partner.h}px` }}
                  className="w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const span = document.createElement('span');
                    span.className = 'text-gray-700 text-sm font-semibold';
                    span.textContent = partner.name;
                    target.parentElement?.appendChild(span);
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
