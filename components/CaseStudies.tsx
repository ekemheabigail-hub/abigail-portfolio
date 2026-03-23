"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "NeedsBridge",
    subtitle: "Civic Tech · Social Impact",
    year: "2024",
    description:
      "A platform connecting vulnerable community members with essential services across Atlantic Canada. Led end-to-end UX research, service design, and a full design system to reduce barriers to access for newcomers and low-income households.",
    tags: ["UX Research", "Service Design", "Design System", "Accessibility"],
    outcome: "3× reduction in service discovery time",
    color: "#F5C518",
    accent: "#FFE94E",
    icon: "⬡",
    href: "#",
  },
  {
    id: 2,
    title: "HotSpot",
    subtitle: "Mobility App · Smart City",
    year: "2024",
    description:
      "A parking app reimagined for Atlantic Canadian municipalities — real-time spot availability, dynamic pricing, and an accessible interface. Conducted usability testing with 40+ participants across 3 cities.",
    tags: ["Mobile UX", "Usability Testing", "Information Architecture", "Prototyping"],
    outcome: "28% reduction in parking search time",
    color: "#D4A017",
    accent: "#F5C518",
    icon: "◉",
    href: "#",
  },
  {
    id: 3,
    title: "SpecGen",
    subtitle: "Developer Tool · Figma Plugin",
    year: "2023",
    description:
      "A Figma plugin that auto-generates developer-ready specifications from design files — reducing handoff friction and eliminating manual documentation. Built for teams working in cross-functional agile environments.",
    tags: ["Plugin Design", "Developer Tools", "Figma API", "Design-Dev Handoff"],
    outcome: "60% faster design-to-dev handoff",
    color: "#FFE94E",
    accent: "#FFF9C4",
    icon: "◈",
    href: "#",
  },
  {
    id: 4,
    title: "Cornerstone Chapel",
    subtitle: "Brand Identity · Visual System",
    year: "2023",
    description:
      "Complete brand redesign for a growing faith community in Moncton — including logo, colour system, typography, print collateral, and digital templates. Rooted in the community's values of warmth, rootedness, and welcome.",
    tags: ["Brand Identity", "Visual Design", "Typography", "Print + Digital"],
    outcome: "Full identity rollout across 8 touchpoints",
    color: "#F5C518",
    accent: "#FFE94E",
    icon: "◇",
    href: "#",
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

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
      id="case-studies"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Top divider */}
      <div className="glow-divider mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label reveal mb-4">Selected work</p>
            <h2
              className="section-heading text-4xl md:text-5xl reveal"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Case studies
            </h2>
          </div>
          <p
            className="text-white/40 max-w-xs text-sm leading-relaxed reveal"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A selection of projects spanning civic tech, mobility, tooling, and brand.
          </p>
        </div>

        {/* Projects list */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <a
              key={project.id}
              href={project.href}
              className="reveal group block"
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="glass-card p-8 lg:p-10 transition-all duration-500"
                style={{
                  background:
                    hovered === project.id
                      ? `linear-gradient(135deg, rgba(${project.id === 1 ? "107,33,232" : project.id === 2 ? "124,58,237" : "139,92,246"},0.2) 0%, rgba(192,132,252,0.08) 100%)`
                      : "rgba(255,255,255,0.04)",
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Number + icon */}
                  <div className="flex items-center gap-4 lg:w-16">
                    <span
                      className="text-4xl transition-transform duration-300 group-hover:scale-110"
                      style={{ color: project.accent }}
                    >
                      {project.icon}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3
                        className="text-white text-2xl font-bold group-hover:text-lilac transition-colors duration-300"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {project.title}
                      </h3>
                      <span className="tag-pill">{project.subtitle}</span>
                      <span
                        className="text-white/30 text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {project.year}
                      </span>
                    </div>

                    <p
                      className="text-white/50 leading-relaxed mb-5 max-w-2xl"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem" }}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — outcome + arrow */}
                  <div className="flex flex-col items-start lg:items-end gap-4 lg:w-56">
                    <div
                      className="glass-card p-4 text-center lg:text-right"
                      style={{
                        background: `linear-gradient(135deg, rgba(107,33,232,0.2), rgba(192,132,252,0.1))`,
                        borderColor: `rgba(192,132,252,0.3)`,
                      }}
                    >
                      <p
                        className="text-xs text-white/40 mb-1 uppercase tracking-wider"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Outcome
                      </p>
                      <p
                        className="text-sm text-lilac font-semibold leading-snug"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {project.outcome}
                      </p>
                    </div>

                    <div
                      className="flex items-center gap-2 text-sm font-medium text-lilac group-hover:gap-4 transition-all duration-300"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      View case study
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="glow-divider mt-20" />
    </section>
  );
}
