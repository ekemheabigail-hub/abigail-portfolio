"use client";

import { useEffect, useRef } from "react";

const experience = [
  {
    role: "UX Designer",
    org: "NeedsBridge",
    period: "2023 — Present",
    type: "Civic Tech",
    highlights: [
      "Led end-to-end design for community services platform",
      "Conducted 30+ user interviews with at-risk populations",
      "Delivered accessible design system from scratch",
    ],
  },
  {
    role: "Product Designer",
    org: "HotSpot (Contract)",
    period: "2024",
    type: "Startup",
    highlights: [
      "Redesigned core parking app flows for 3 municipalities",
      "Ran usability tests with 40+ participants",
      "Reduced task completion time by 28%",
    ],
  },
  {
    role: "UX/UI Designer",
    org: "Freelance",
    period: "2021 — Present",
    type: "Self-employed",
    highlights: [
      "Brand identity for Cornerstone Chapel",
      "SpecGen Figma plugin design",
      "Multiple SaaS and nonprofit clients",
    ],
  },
];

const tools = [
  "Figma", "FigJam", "Protopie", "Maze", "Notion",
  "Miro", "Webflow", "Framer", "VS Code", "GitHub",
];

export default function Resume() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(107,33,232,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label reveal mb-4">My background</p>
          <h2
            className="section-heading text-4xl md:text-5xl reveal"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Resume
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience timeline */}
          <div className="lg:col-span-2 space-y-5">
            <p
              className="text-xs text-white/30 uppercase tracking-widest mb-6 reveal"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Experience
            </p>
            {experience.map((exp, i) => (
              <div key={exp.org} className="glass-card p-6 reveal group">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3
                      className="text-white font-bold text-lg group-hover:text-lilac transition-colors duration-300"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-white/50 text-sm"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {exp.org}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="tag-pill">{exp.type}</span>
                    <p
                      className="text-white/30 text-xs mt-1.5"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {exp.period}
                    </p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-white/40 text-sm flex items-start gap-2"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <span className="text-lilac mt-0.5 text-xs">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Tools */}
            <div className="glass-card p-6 reveal">
              <p
                className="text-xs text-white/30 uppercase tracking-widest mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Tools & Software
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-white/5 border border-white/8 text-white/50 text-xs rounded-full px-3 py-1.5 hover:border-lilac/40 hover:text-white/70 transition-all duration-200"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="glass-card p-6 reveal">
              <p
                className="text-xs text-white/30 uppercase tracking-widest mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Core Skills
              </p>
              {[
                { label: "UX Research", level: 95 },
                { label: "Product Design", level: 92 },
                { label: "Design Systems", level: 88 },
                { label: "Accessibility", level: 85 },
                { label: "Brand Identity", level: 80 },
              ].map((skill) => (
                <div key={skill.label} className="mb-4">
                  <div className="flex justify-between mb-1.5">
                    <span
                      className="text-white/60 text-sm"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {skill.label}
                    </span>
                    <span
                      className="text-white/25 text-xs"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        background: "linear-gradient(90deg, #F5C518, #FFE94E)",
                        boxShadow: "0 0 8px rgba(245,197,24,0.5)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Download CTA */}
            <div
              className="glass-card p-6 reveal text-center"
              style={{
                background: "linear-gradient(135deg, rgba(107,33,232,0.2) 0%, rgba(192,132,252,0.08) 100%)",
                borderColor: "rgba(192,132,252,0.25)",
              }}
            >
              <p
                className="text-white font-bold mb-2"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Want the full picture?
              </p>
              <p
                className="text-white/40 text-xs mb-5"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Download my resume for the complete timeline.
              </p>
              <a
                href="/abigail-ekemhe-resume.pdf"
                download
                className="glow-btn block w-full text-center"
              >
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
