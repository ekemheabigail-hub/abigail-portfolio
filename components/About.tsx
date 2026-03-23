"use client";

import { useEffect, useRef } from "react";

const values = [
  {
    icon: "⬡",
    title: "Human-centred",
    desc: "Every design decision traces back to a real person's need, context, and goal.",
  },
  {
    icon: "◈",
    title: "Strategic",
    desc: "I connect research insights to business outcomes and policy impact.",
  },
  {
    icon: "◉",
    title: "Civic-minded",
    desc: "Technology should strengthen communities — especially underserved ones.",
  },
  {
    icon: "◇",
    title: "Technically fluent",
    desc: "I bridge design and engineering to ship products that actually work.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Subtle bg accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(107,33,232,0.12) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — bio */}
          <div>
            <p className="section-label reveal mb-4">Who I am</p>
            <h2
              className="section-heading text-4xl md:text-5xl mb-8 reveal"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Designing for people
              <br />
              who are often
              <br />
              <em style={{ fontStyle: "normal" }} className="gradient-text">left behind</em>
            </h2>

            <div className="space-y-5 text-white/60 leading-relaxed reveal" style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem" }}>
              <p>
                I&apos;m Abigail Ekemhe (Oches) — a UX designer based in Moncton,
                New Brunswick, with a background spanning civic technology,
                social impact startups, and community-led projects across
                Atlantic Canada.
              </p>
              <p>
                My work sits at the intersection of human-centred research,
                systems thinking, and design strategy. I believe good design
                is an act of civic care — and I bring that conviction to every
                project, from end-to-end product design to brand identity and
                design systems.
              </p>
              <p>
                When I&apos;m not in Figma, I&apos;m writing about design, contributing
                to open-source civic tech, and looking for ways to make the
                digital world more legible for everyone.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-10 reveal">
              {[
                { num: "5+", label: "Years designing" },
                { num: "12+", label: "Projects shipped" },
                { num: "3", label: "Civic tech orgs" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="text-3xl font-extrabold gradient-text"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {s.num}
                  </p>
                  <p className="text-white/40 text-sm mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-6 reveal">
                <div
                  className="text-2xl mb-3"
                  style={{ color: "#F5C518" }}
                >
                  {v.icon}
                </div>
                <h3
                  className="text-white font-semibold text-base mb-2"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {v.desc}
                </p>
              </div>
            ))}

            {/* Location card spanning full width */}
            <div
              className="col-span-2 glass-card p-5 reveal flex items-center gap-4"
              style={{
                background: "linear-gradient(135deg, rgba(107,33,232,0.15) 0%, rgba(192,132,252,0.08) 100%)",
              }}
            >
              <div className="text-2xl">📍</div>
              <div>
                <p className="text-white font-medium text-sm" style={{ fontFamily: "Syne, sans-serif" }}>
                  Moncton, New Brunswick
                </p>
                <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                  Available for remote & on-site work across Canada
                </p>
              </div>
              <div className="ml-auto">
                <span className="avail-badge" style={{ fontSize: "0.7rem", padding: "4px 12px" }}>
                  <span className="avail-dot" style={{ width: "6px", height: "6px" }} />
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
