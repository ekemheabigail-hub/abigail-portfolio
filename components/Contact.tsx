"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — connect to real API (Resend, Formspree, etc.) when ready
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(107,33,232,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="glow-divider mb-20" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label reveal mb-4">Get in touch</p>
          <h2
            className="section-heading text-4xl md:text-6xl reveal"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Let&apos;s build something
            <br />
            <span className="gradient-text">worth using.</span>
          </h2>
          <p
            className="text-white/40 mt-6 max-w-md mx-auto text-base leading-relaxed reveal"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Whether you have a project in mind or just want to start a conversation — my inbox is open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Email */}
            <div className="glass-card p-6 reveal">
              <p
                className="text-xs text-white/30 uppercase tracking-widest mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Email
              </p>
              <a
                href="mailto:hello@abigailoches.com"
                className="text-lilac font-medium hover:text-white transition-colors duration-300"
                style={{ fontFamily: "Syne, sans-serif", fontSize: "1rem" }}
              >
                hello@abigailoches.com
              </a>
            </div>

            {/* Social */}
            <div className="glass-card p-6 reveal">
              <p
                className="text-xs text-white/30 uppercase tracking-widest mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Find me on
              </p>
              <div className="space-y-3">
                {[
                  { label: "LinkedIn", href: "https://linkedin.com/in/abigailoches" },
                  { label: "Dribbble", href: "https://dribbble.com/abigailoches" },
                  { label: "GitHub", href: "https://github.com/abigailoches" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-white/50 hover:text-lilac transition-colors duration-300 group"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}
                  >
                    {s.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 -translate-x-1"
                    >
                      <path
                        d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="glass-card p-6 reveal">
              <p
                className="text-xs text-white/30 uppercase tracking-widest mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Location
              </p>
              <p
                className="text-white/60 text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Moncton, New Brunswick
                <br />
                <span className="text-white/30 text-xs">
                  Available remote across Canada & internationally
                </span>
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 reveal">
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                    className="text-5xl mb-6"
                    style={{ color: "#F5C518" }}
                  >
                    ◉
                  </div>
                  <h3
                    className="text-white text-2xl font-bold mb-3"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    Message received!
                  </h3>
                  <p
                    className="text-white/50 text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Thank you for reaching out. I&apos;ll get back to you within 2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="text-xs text-white/40 uppercase tracking-wider block mb-2"
                        style={{ fontFamily: "Inter, sans-serif" }}
                        htmlFor="name"
                      >
                        Your name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={handleChange}
                        className="glass-input"
                      />
                    </div>
                    <div>
                      <label
                        className="text-xs text-white/40 uppercase tracking-wider block mb-2"
                        style={{ fontFamily: "Inter, sans-serif" }}
                        htmlFor="email"
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@org.ca"
                        value={form.email}
                        onChange={handleChange}
                        className="glass-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="text-xs text-white/40 uppercase tracking-wider block mb-2"
                      style={{ fontFamily: "Inter, sans-serif" }}
                      htmlFor="project"
                    >
                      Project type
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={form.project}
                      onChange={handleChange}
                      className="glass-input"
                      style={{ appearance: "none", cursor: "pointer" }}
                    >
                      <option value="" style={{ background: "#0a0a0a" }}>Select a service…</option>
                      <option value="ux-research" style={{ background: "#0a0a0a" }}>UX Research & Strategy</option>
                      <option value="product-design" style={{ background: "#0a0a0a" }}>Product Design</option>
                      <option value="design-system" style={{ background: "#0a0a0a" }}>Design System</option>
                      <option value="brand" style={{ background: "#0a0a0a" }}>Brand & Visual Identity</option>
                      <option value="accessibility" style={{ background: "#0a0a0a" }}>Accessibility Audit</option>
                      <option value="consulting" style={{ background: "#0a0a0a" }}>Design Consulting</option>
                      <option value="other" style={{ background: "#0a0a0a" }}>Other / Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="text-xs text-white/40 uppercase tracking-wider block mb-2"
                      style={{ fontFamily: "Inter, sans-serif" }}
                      htmlFor="message"
                    >
                      Tell me about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What are you building? What challenges are you facing? What would success look like?"
                      value={form.message}
                      onChange={handleChange}
                      className="glass-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="glow-btn w-full"
                    disabled={status === "sending"}
                  >
                    <span>
                      {status === "sending" ? "Sending…" : "Send message"}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-white/20 text-sm"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          © {new Date().getFullYear()} Abigail Ekemhe (Oches). All rights reserved.
        </p>
        <p
          className="text-white/20 text-xs"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          UX Designer · Civic Tech · Moncton, NB
        </p>
      </div>
    </section>
  );
}
