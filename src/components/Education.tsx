"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();

  return (
    <section id="education" ref={ref} className="relative py-32 sm:py-40 bg-black">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-blue-400/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            {language === "kr" ? "학력" : "Education"}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            {language === "kr" ? (
              <>
                리더십 위에
                <br />
                <span className="text-white/40">세운 기반.</span>
              </>
            ) : (
              <>
                Foundation
                <br />
                <span className="text-white/40">built on leadership.</span>
              </>
            )}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <div className="rounded-2xl p-8 sm:p-10 bg-white/[0.03] border border-white/[0.06]">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-center gap-5">
                <div className="h-14 w-14 flex items-center justify-center flex-shrink-0 bg-white rounded-xl p-2">
                  <img src="/logos/skku.svg" alt="SKKU" className="h-full w-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {language === "kr" ? "성균관대학교" : "Sungkyunkwan University"}
                  </h3>
                  <p className="text-lg text-white/50 mt-1">SKKU</p>
                  <p className="text-white/60 font-medium mt-3">
                    {language === "kr" ? "경영학 학사" : "BBA, Business Administration"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-center">
                <div className="w-16 h-12 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img src="/logos/sone.jpg" alt="S-ONE" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-white font-medium">
                    {language === "kr" ? "S-ONE 경영전략학회 설립" : "Founded S-ONE"}
                  </p>
                  <p className="text-sm text-white/40 mt-1">
                    {language === "kr" ? "경영 전략 학술 동아리" : "Academic club for business strategy"}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-16 h-12 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img src="/logos/aiesec.jpg" alt="AIESEC" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-white font-medium">
                    {language === "kr" ? "AIESEC SKKU 회장" : "President of AIESEC SKKU"}
                  </p>
                  <p className="text-sm text-white/40 mt-1">
                    {language === "kr" ? "국제 리더십 기구" : "International leadership organization"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
