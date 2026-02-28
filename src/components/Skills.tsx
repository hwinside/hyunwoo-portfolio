"use client";

import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useInView } from "framer-motion";

const SKILLS = [
  {
    category: "Sales & GTM",
    icon: "🎯",
    items: ["Enterprise Sales", "Consultative Selling", "ABM", "Pipeline Management", "Contract Negotiation", "C-Level Engagement", "Public Speaking"],
  },
  {
    category: "Industry",
    icon: "🚀",
    items: ["AI/ML Go-to-Market", "Retail Media / Commerce Media", "Digital Advertising", "Programmatic & DSP", "E-commerce Strategy"],
  },
  {
    category: "Technical",
    icon: "⚡",
    items: ["SQL", "LLM / Machine Learning", "Product Management", "Agile & PRD", "UX/UI"],
  },
  {
    category: "Tools",
    icon: "🛠",
    items: ["Salesforce / CRM", "Google Analytics", "JIRA / Confluence", "Claude / LLM Tools"],
  },
];

export default function Skills() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 bg-black" ref={ref}>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Skills
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            {language === "kr" ? (<><span className="text-white">제가 가져오는</span><br /><span className="text-neutral-400">가치와 역량</span></>) : (<><span className="text-white">What I bring</span><br /><span className="text-neutral-400">to the table</span></>)}
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.06]"
            >
              {/* Glow effect on hover */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-500/0 blur-3xl transition-all duration-500 group-hover:bg-blue-500/10" />
              
              {/* Icon + Category */}
              <div className="relative flex items-center gap-3 mb-5">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-lg font-bold text-white">{skill.category}</h3>
              </div>

              {/* Skill pills */}
              <div className="relative flex flex-wrap gap-2">
                {skill.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 * i + 0.05 * j }}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm text-neutral-300 transition-all duration-300 hover:border-blue-400/40 hover:text-white hover:bg-blue-500/10"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
