"use client";

import { useEffect, useRef } from "react";

const posts = [
  {
    title: "Why civic tech needs better design — not just better intentions",
    excerpt:
      "The gap between what government services promise and what people actually experience isn't a policy problem. It's a design problem.",
    category: "Civic Tech",
    date: "Coming soon",
    readTime: "6 min read",
    icon: "⬡",
  },
  {
    title: "Designing for trust: lessons from working with vulnerable communities",
    excerpt:
      "When your users are in crisis, every design decision carries weight. Here's what I've learned about designing with care.",
    category: "UX Research",
    date: "Coming soon",
    readTime: "8 min read",
    icon: "◉",
  },
  {
    title: "The design system paradox: when more consistency creates more confusion",
    excerpt:
      "Design systems are supposed to make products simpler. But done wrong, they can calcify bad patterns at scale.",
    category: "Design Systems",
    date: "Coming soon",
    readTime: "5 min read",
    icon: "◈",
  },
];

export default function Blog() {
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
      id="blog"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="glow-divider mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label reveal mb-4">Thinking out loud</p>
            <h2
              className="section-heading text-4xl md:text-5xl reveal"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Writing
            </h2>
          </div>
          <p
            className="text-white/40 max-w-xs text-sm leading-relaxed reveal"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Essays on design, civic tech, and the systems that shape our lives.
            Coming soon.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.title} className="glass-card p-7 reveal group flex flex-col">
              {/* Category + read time */}
              <div className="flex items-center justify-between mb-5">
                <span className="tag-pill">{post.category}</span>
                <span
                  className="text-white/30 text-xs"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {post.readTime}
                </span>
              </div>

              {/* Icon */}
              <div
                className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 w-fit"
                style={{ color: "#F5C518" }}
              >
                {post.icon}
              </div>

              {/* Title */}
              <h3
                className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-lilac transition-colors duration-300 flex-1"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p
                className="text-white/40 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <span
                  className="text-white/25 text-xs"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {post.date}
                </span>
                <span
                  className="text-lilac/50 text-sm font-medium flex items-center gap-2"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Subscribe for updates
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div
          className="glass-card mt-10 p-7 reveal text-center"
          style={{
            background: "linear-gradient(135deg, rgba(107,33,232,0.15) 0%, rgba(192,132,252,0.06) 100%)",
          }}
        >
          <p
            className="text-white/70 mb-1 font-medium"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Writing is coming soon.
          </p>
          <p
            className="text-white/35 text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Follow along on{" "}
            <a href="https://linkedin.com" className="text-lilac hover:underline" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
            for updates when new pieces drop.
          </p>
        </div>
      </div>

      <div className="glow-divider mt-20" />
    </section>
  );
}
