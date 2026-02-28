"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SKILLS = [
  {
    category: "Sales & GTM",
    items: "Enterprise Sales · Consultative Selling · ABM · Pipeline Management · Contract Negotiation · C-Level Engagement · Public Speaking",
  },
  {
    category: "Industry",
    items: "AI/ML Go-to-Market · Retail Media / Commerce Media · Digital Advertising (Programmatic, DSP, Native) · E-commerce Strategy",
  },
  {
    category: "Technical",
    items: "SQL · LLM / Machine Learning Concepts · Product Management (Agile, PRD, UX/UI)",
  },
  {
    category: "Tools",
    items: "Salesforce / CRM · Google Analytics · JIRA / Confluence · Claude / LLM Tools",
  },
];

export default function Skills() {
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            What I bring<br /><span class="text-neutral-400">to the table.</span>
          </h2>
        </motion.div>

        <div className="space-y-0 divide-y divide-white/10">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-8 py-6 sm:py-8"
            >
              <div className="sm:w-48 flex-shrink-0">
                <span className="text-lg font-bold text-white">
                  {skill.category}
                </span>
              </div>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                {skill.items}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
