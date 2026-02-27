"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

type Language = "en" | "kr";

interface DescSection {
  heading: Record<Language, string>;
  items: Record<Language, string>[];
}

interface Role {
  title: Record<Language, string>;
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
        title: { en: "Senior Director, Business Development", kr: "비즈니스 개발 시니어 디렉터" },
        period: "Jul 2020 — Present",
        description: [
          { heading: { en: "", kr: "" }, items: [
            { en: "Founding member of Moloco Commerce Media — built the business from the ground up, revolutionizing e-commerce advertising with an LLM-based personalization engine", kr: "Moloco Commerce Media 창립 멤버로서 비즈니스를 처음부터 함께 만들어 왔으며, LLM 기반 개인화 엔진을 활용한 이커머스 광고 사업을 구축" },
            { en: "Closed 15 commerce media deals in Korea — accounting for over 50% of the total client portfolio — establishing MOLOCO as the dominant player in the Korean retail media market", kr: "한국에서 15건의 Commerce Media 딜을 클로즈하며 전체 클라이언트 포트폴리오의 50% 이상을 확보, 한국 리테일 미디어 시장에서 MOLOCO의 성장에 기여" },
            { en: "Delivered thought leadership at major conferences including DMS (Digital Marketing Summit) and Max Summit, leading multiple sessions on the future of retail media", kr: "DMS(Digital Marketing Summit), Max Summit 등 주요 컨퍼런스에서 리테일 미디어에 대한 세션 다수 진행" },
          ]},
        ],
      },
      {
        title: { en: "Senior Director, Product Management", kr: "프로덕트 매니지먼트 시니어 디렉터" },
        period: "Nov 2016 — Jun 2021",
        description: [
          { heading: { en: "", kr: "" }, items: [
            { en: "Joined as MOLOCO's first Product Manager, scaling the business through ad product development, publisher network expansion, partnership management, advertiser sales, and PR/Marketing", kr: "MOLOCO의 첫 번째 Product Manager로 합류, 광고 제품 개발·퍼블리셔 네트워크 확대·파트너십 관리·광고주 영업·PR/마케팅을 통해 비즈니스 확장" },
            { en: "Led product feature planning and UX/UI design for the official launch of Moloco Cloud (predecessor of Moloco Ads), a self-serve AI-powered DSP", kr: "셀프서브 AI 기반 DSP인 Moloco Cloud(Moloco Ads의 전신) 정식 런칭을 위한 제품 기능 기획 및 UX/UI 디자인 담당" },
            { en: "Planned and launched the Wemakeprice AMP ad platform — Commerce Media's first pilot project", kr: "위메프 AMP 광고 플랫폼 기획 및 런칭 — Commerce Media 최초의 파일럿 프로젝트" },
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
        title: { en: "Head of Ad Business", kr: "광고 사업 총괄" },
        period: "May 2015 — Nov 2016",
        description: [
          { heading: { en: "Monetization Strategy Planning", kr: "수익화 전략 기획" }, items: [
            { en: "Lead formulating and executing monetization strategy, focused on advertising for mobile contents platform 'Pikicast'", kr: "모바일 콘텐츠 플랫폼 'Pikicast'의 광고 중심 수익화 전략 수립 및 실행" },
            { en: "Building and developing ad platform, serving mobile/native advertising product", kr: "모바일/네이티브 광고 제품을 제공하는 광고 플랫폼 구축 및 개발" },
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
        title: { en: "Product Manager", kr: "프로덕트 매니저" },
        period: "Aug 2011 — May 2015",
        description: [
          { heading: { en: "DA(Display Ad) Product Planning", kr: "DA(Display Ad) 제품 기획" }, items: [
            { en: "Planned and implemented the development of new products, such as mobile, video and display ad", kr: "모바일, 동영상, 디스플레이 광고 등 신규 제품 개발 기획 및 실행" },
            { en: "Planned and drived enhancement for display ad platform of 'naver.com'", kr: "'naver.com' 디스플레이 광고 플랫폼 개선 기획 및 추진" },
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
        title: { en: "Account Executive", kr: "어카운트 이그제큐티브" },
        period: "Mar 2009 — Aug 2011",
        description: [
          { heading: { en: "Account Service Division", kr: "어카운트 서비스팀" }, items: [
            { en: "Responsible for planning and managing ₩8+ billion advertising budget in accounts", kr: "80억원 이상 규모의 광고 예산 기획 및 관리 담당" },
            { en: "Collaborated with clients to design effective marketing campaigns, throughout on/offline media", kr: "온·오프라인 미디어 전반에 걸쳐 클라이언트와 협업하여 효과적인 마케팅 캠페인 설계" },
            { en: "Consulted with clients to determine communication goals and objectives and provided innovative solutions that met or exceeded client's expectations", kr: "클라이언트와 협의하여 커뮤니케이션 목표를 수립하고, 기대에 부응하는 솔루션 제공" },
            { en: "Developed marketing campaigns with top clients including Daum Communications, CJ Cheil-jedang, CJ Entertainment and CJ Media", kr: "Daum Communications, CJ제일제당, CJ Entertainment, CJ Media 등 주요 클라이언트의 마케팅 캠페인 개발" },
          ]},
        ],
      },
      {
        title: { en: "Brand Marketing Consultant", kr: "브랜드 마케팅 컨설턴트" },
        period: "Jan 2008 — Mar 2009",
        description: [
          { heading: { en: "Brand Marketing Consulting Division", kr: "브랜드 마케팅 컨설팅팀" }, items: [
            { en: "Planned brand comm. strategy for several clients, including SK Telecom, ADIDAS, SK Broadband, and KT&G", kr: "SK Telecom, ADIDAS, SK Broadband, KT&G 등 다수의 클라이언트를 위한 브랜드 커뮤니케이션 전략 기획" },
            { en: "Designed and executed various kind of research for analyzing brand performance", kr: "브랜드 성과 분석을 위한 다양한 리서치 설계 및 실행" },
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
        title: { en: "Intern", kr: "인턴" },
        period: "Mar 2007 — Apr 2007",
        description: [
          { heading: { en: "Marketing Team", kr: "마케팅팀" }, items: [
            { en: "Supported organizing '2007 Google Korea CMO Summit'", kr: "'2007 Google Korea CMO Summit' 개최 지원" },
            { en: "Analyzed each product of Google and produced marketing materials", kr: "Google 제품 분석 및 마케팅 자료 제작" },
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
        title: { en: "Research Assistant", kr: "리서치 어시스턴트" },
        period: "Apr 2005 — Sep 2005",
        description: [
          { heading: { en: "", kr: "" }, items: [
            { en: "Researched and analyzed quantitative data for consulting projects", kr: "컨설팅 프로젝트를 위한 정량 데이터 리서치 및 분석" },
            { en: "Produced slides on consulting reports", kr: "컨설팅 보고서 슬라이드 제작" },
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
        title: { en: "System Engineer", kr: "시스템 엔지니어" },
        period: "Nov 2001 — Mar 2004",
        description: [
          { heading: { en: "System Management Division", kr: "시스템 관리팀" }, items: [
            { en: "Managed web based internal communication portal system of Hansol group served by HPUX", kr: "HPUX 기반 한솔그룹 웹 내부 커뮤니케이션 포탈 시스템 관리" },
            { en: "Developed add-on web services for portal system using PHP", kr: "PHP를 활용한 포탈 시스템 부가 웹 서비스 개발" },
            { en: "Conducted sales of enterprise IT devices: middle server, network equipment", kr: "미들 서버, 네트워크 장비 등 기업용 IT 디바이스 영업 수행" },
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
  const { language } = useLanguage();

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
                  <p className="text-white/70 font-semibold">{role.title[language]}</p>
                  <span className="text-sm text-white/30 whitespace-nowrap font-mono">
                    {role.period}
                  </span>
                </div>

                {/* Description */}
                <div className="space-y-3">
                  {role.description.map((section, i) => (
                    <div key={i}>
                      {section.heading[language] && (
                        <p className="text-white/60 text-sm font-medium mb-1.5">
                          {section.heading[language]}
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
                            {item[language]}
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
  const { language } = useLanguage();

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
            {language === "kr" ? "경력" : "Experience"}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            {language === "kr" ? (
              <>
                산업을 넘나드는
                <br />
                <span className="text-white/40">커리어 여정.</span>
              </>
            ) : (
              <>
                Career journey
                <br />
                <span className="text-white/40">across industries.</span>
              </>
            )}
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
