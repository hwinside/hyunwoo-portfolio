"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface DescSection {
  heading: string;
  items: string[];
}

interface Role {
  title: string;
  period: string;
  description: DescSection[];
}

interface ExperienceItem {
  company: string;
  logo: string;
  logoClass?: string;
  accent: string;
  roles: Role[];
}

const experiences: ExperienceItem[] = [
  {
    company: "MOLOCO",
    logo: "/logos/moloco.webp",
    accent: "from-blue-500 to-cyan-400",
    roles: [
      {
        title: "Senior Director, Business Development",
        period: "Jul 2020 — Present",
        description: [
          { heading: "", items: [
            "Founding member of Moloco Commerce Media — built the business from the ground up, revolutionizing e-commerce advertising with an LLM-based personalization engine",
            "Closed 15 commerce media deals in Korea — accounting for over 50% of the total client portfolio — establishing MOLOCO as the dominant player in the Korean retail media market",
            "Delivered thought leadership at major conferences including DMS (Digital Marketing Summit) and Max Summit, leading multiple sessions on the future of retail media",
          ]},
        ],
      },
      {
        title: "Senior Director, Product Management",
        period: "Nov 2016 — Jun 2021",
        description: [
          { heading: "", items: [
            "Joined as MOLOCO's first Product Manager, scaling the business through ad product development, publisher network expansion, partnership management, advertiser sales, and PR/Marketing",
            "Led product feature planning and UX/UI design for the official launch of Moloco Cloud (predecessor of Moloco Ads), a self-serve AI-powered DSP",
            "Planned and launched the Wemakeprice AMP ad platform — Commerce Media's first pilot project",
          ]},
        ],
      },
    ],
  },
  {
    company: "Pikicast",
    logo: "/logos/pikicast.png",
    logoClass: "scale-[1.8]",
    accent: "from-orange-500 to-pink-400",
    roles: [
      {
        title: "Head of Ad Business",
        period: "May 2015 — Nov 2016",
        description: [
          { heading: "Monetization Strategy Planning", items: [
            "Lead formulating and executing monetization strategy, focused on advertising for mobile contents platform 'Pikicast'",
            "Building and developing ad platform, serving mobile/native advertising product",
          ]},
        ],
      },
    ],
  },
  {
    company: "NAVER",
    logo: "/logos/naver.svg",
    accent: "from-green-500 to-emerald-400",
    roles: [
      {
        title: "Product Manager",
        period: "Aug 2011 — May 2015",
        description: [
          { heading: "DA(Display Ad) Product Planning", items: [
            "Planned and implemented the development of new products, such as mobile, video and display ad",
            "Planned and drived enhancement for display ad platform of 'naver.com'",
          ]},
        ],
      },
    ],
  },
  {
    company: "TBWA Korea",
    logo: "/logos/tbwa.png",
    accent: "from-yellow-500 to-orange-400",
    roles: [
      {
        title: "Account Executive",
        period: "Mar 2009 — Aug 2011",
        description: [
          { heading: "Account Service Division", items: [
            "Responsible for planning and managing ₩8+ billion advertising budget in accounts",
            "Collaborated with clients to design effective marketing campaigns, throughout on/offline media",
            "Consulted with clients to determine communication goals and objectives and provided innovative solutions that met or exceeded client's expectations",
            "Developed marketing campaigns with top clients including Daum Communications, CJ Cheil-jedang, CJ Entertainment and CJ Media",
          ]},
        ],
      },
      {
        title: "Brand Marketing Consultant",
        period: "Jan 2008 — Mar 2009",
        description: [
          { heading: "Brand Marketing Consulting Division", items: [
            "Planned brand comm. strategy for several clients, including SK Telecom, ADIDAS, SK Broadband, and KT&G",
            "Designed and executed various kind of research for analyzing brand performance",
          ]},
        ],
      },
    ],
  },
  {
    company: "Google",
    logo: "/logos/google.svg",
    accent: "from-red-500 to-yellow-400",
    roles: [
      {
        title: "Intern",
        period: "Mar 2007 — Apr 2007",
        description: [
          { heading: "Marketing Team", items: [
            "Supported organizing '2007 Google Korea CMO Summit'",
            "Analyzed each product of Google and produced marketing materials",
          ]},
        ],
      },
    ],
  },
  {
    company: "McKinsey & Company",
    logo: "/logos/mckinsey2.jpg",
    accent: "from-blue-400 to-indigo-400",
    roles: [
      {
        title: "Research Assistant",
        period: "Apr 2005 — Sep 2005",
        description: [
          { heading: "", items: [
            "Researched and analyzed quantitative data for consulting projects",
            "Produced slides on consulting reports",
          ]},
        ],
      },
    ],
  },
  {
    company: "Hansol Telecom",
    logo: "/logos/hansol.jpg",
    accent: "from-teal-500 to-cyan-400",
    roles: [
      {
        title: "System Engineer",
        period: "Nov 2001 — Mar 2004",
        description: [
          { heading: "System Management Division", items: [
            "Managed web based internal communication portal system of Hansol group served by HPUX",
            "Developed add-on web services for portal system using PHP",
            "Conducted sales of enterprise IT devices: middle server, network equipment",
          ]},
        ],
      },
    ],
  },
];

function ExperienceCard({
  exp,
  index,
}: {
  exp: ExperienceItem;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative group"
    >
      {/* Timeline connector */}
      {index < experiences.length - 1 && (
        <div className="absolute left-6 top-16 bottom-0 w-px bg-white/10 hidden md:block" />
      )}

      <div className="relative flex gap-6 md:gap-12">
        {/* Timeline dot */}
        <div className="hidden md:flex flex-col items-center pt-2">
          <div
            className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.accent} ring-4 ring-black`}
          />
        </div>

        {/* Card */}
        <div className="flex-1 group/card rounded-2xl p-6 sm:p-8 bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-500">
          {/* Company header */}
          <div className="flex items-center gap-4 mb-5">
            {exp.logo && (
              <div className="h-10 w-20 flex items-center justify-center flex-shrink-0 bg-white rounded-lg p-1.5">
                <img src={exp.logo} alt={exp.company} className={`h-full w-full object-contain ${exp.logoClass || ''}`} />
              </div>
            )}
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {exp.company}
            </h3>
          </div>

          {/* Roles */}
          <div className="space-y-6">
            {exp.roles.map((role, ri) => (
              <div key={ri}>
                {/* Role header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <p className="text-white/70 font-semibold">{role.title}</p>
                  <span className="text-sm text-white/30 whitespace-nowrap font-mono">
                    {role.period}
                  </span>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  {role.description.map((section, i) => (
                    <div key={i}>
                      {section.heading && (
                        <p className="text-white/60 text-sm font-medium mb-1.5">
                          {section.heading}
                        </p>
                      )}
                      <ul className="space-y-1.5">
                        {section.items.map((item, j) => (
                          <li
                            key={j}
                            className="text-white/40 text-sm leading-relaxed flex gap-3 pl-2"
                          >
                            <span
                              className={`mt-2 w-1 h-1 rounded-full bg-gradient-to-r ${exp.accent} flex-shrink-0`}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Divider between roles */}
                {ri < exp.roles.length - 1 && (
                  <div className="mt-5 border-t border-white/[0.06]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="relative py-32 sm:py-40 bg-[#0a0a0a]"
    >
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 60 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-blue-400/80 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Experience
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Career journey
            <br />
            <span className="text-white/40">across industries.</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
