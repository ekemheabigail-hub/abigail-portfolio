"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: "◉",
    title: "UX Research & Strategy",
    desc: "From user interviews to service blueprints — I uncover what people actually need and translate it into actionable design direction.",
    deliverables: ["User interviews", "Journey mapping", "Usability testing", "Research synthesis"],
  },
  {
    icon: "⬡",
    title: "Product Design",
    desc: "End-to-end product design: information architecture, wireframes, interactive prototypes, and polished high-fidelity UI.",
    deliverables: ["Wireframes & flows", "Interactive prototypes", "High-fi UI", "Handoff specs"],
  },
  {
    icon: "◈",
    title: "Design Systems",
    desc: "Scalable, token-driven design systems that make your team faster and your product more consistent.",
    deliverables: ["Component libraries", "Design tokens", "Documentation", "Figma systems"],
  },
  {
    icon: "◇",
    title: "Brand & Visual Identity",
    desc: "Brand strategy, visual identity, and design systems for organisations that want to communicate with clarity and conviction.",
    deliverables: ["Logo design", "Colour & typography", "Brand guidelines", "Collateral"],
  },
  {
    icon: "△",
    title: "Accessibility Auditing",
    desc: "WCAG compliance reviews and accessible design recommendations to make your product usable by everyone.",
    deliverables: ["WCAG audit", "Remediation plan", "Component review", "Testing support"],
  },
  {
    icon: "○",
    title: "Design Consulting",
    desc: "Strategic design partnerships for teams that need senior UX thinking without the overhead of a full-time hire.",
    deliverables: ["Design critique", "Process review", "Team coaching", "Embedded sprints"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
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
      id="services"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(107,33,232,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label reveal mb-4">What I offer</p>
          <h2
            className="section-heading text-4xl md:text-5xl reveal"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Freelance services
          </h2>
          <p
            className="text-white/40 mt-4 max-w-lg mx-auto text-base leading-relaxed reveal"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Flexible engagements — from focused sprints to long-term partnerships.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card p-7 reveal group flex flex-col"
            >
              <div
                className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 w-fit"
                style={{ color: "#F5C518" }}
              >
                {service.icon}
              </div>
              <h3
                className="text-white text-lg font-bold mb-3 group-hover:text-lilac transition-colors duration-300"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {service.title}
              </h3>
              <p
                className="text-white/50 text-sm leading-relaxed mb-5 flex-1"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {service.desc}
              </p>

              {/* Deliverables */}
              <div className="border-t border-white/5 pt-4">
                <p
                  className="text-xs text-white/30 uppercase tracking-wider mb-3"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Deliverables
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.deliverables.map((d) => (
                    <span
                      key={d}
                      className="text-xs text-white/40 bg-white/5 border border-white/8 rounded-full px-3 py-1"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="glass-card mt-12 p-8 reveal flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(107,33,232,0.2) 0%, rgba(192,132,252,0.08) 100%)",
            borderColor: "rgba(192,132,252,0.25)",
          }}
        >
          <div>
            <h3
              className="text-white text-xl font-bold mb-1"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Ready to work together?
            </h3>
            <p
              className="text-white/50 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Let&apos;s discuss your project and see if we&apos;re a good fit.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a href="#contact" className="glow-btn">
              <span>Get in touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
