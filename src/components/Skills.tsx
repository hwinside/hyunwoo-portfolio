"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Mobile Advertising",
  "Online Advertising",
  "AdTech",
  "Product Management",
  "Business Development",
  "Commerce Media",
  "Programmatic Advertising",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-32 sm:py-40 bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-blue-400/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Core
            <br />
            <span className="text-white/40">competencies.</span>
          </h2>
        </motion.div>

        <div className="mt-16 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <div className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 cursor-default">
                <span className="text-sm sm:text-base text-white/70 group-hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
