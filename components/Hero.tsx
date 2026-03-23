"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      opacity: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = ["#6B21E8", "#C084FC", "#8B5CF6", "#E879F9"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      // Draw connections
      ctx.globalAlpha = 1;
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(107,33,232,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    }
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.7 }}
      />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(107,33,232,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Availability badge */}
        <div className="flex justify-center mb-8 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
          <span className="avail-badge">
            <span className="avail-dot" />
            Open to work — Moncton, NB
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-up"
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <span className="text-white">Abigail</span>
          <br />
          <span className="section-heading" style={{ fontSize: "inherit", lineHeight: "inherit" }}>
            Ekemhe
          </span>
          <span className="text-white"> (Oches)</span>
        </h1>

        {/* Title line */}
        <p
          className="text-xl md:text-2xl text-white/60 mb-4 animate-fade-up"
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 500,
            letterSpacing: "0.04em",
            animationDelay: "0.35s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          UX Designer{" "}
          <span className="text-lilac">·</span>{" "}
          Civic Tech{" "}
          <span className="text-lilac">·</span>{" "}
          Atlantic Canada
        </p>

        {/* Tagline */}
        <p
          className="text-base md:text-lg text-white/40 max-w-xl mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{
            fontFamily: "Inter, sans-serif",
            animationDelay: "0.5s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Designing systems that serve real people — where strategy meets
          empathy, and research drives every decision.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.65s", opacity: 0, animationFillMode: "forwards" }}
        >
          <a href="#case-studies" className="glow-btn">
            <span>View my work</span>
          </a>
          <a href="#contact" className="outline-btn">
            Start a conversation
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up"
          style={{ animationDelay: "1s", opacity: 0, animationFillMode: "forwards" }}
        >
          <span className="text-white/30 text-xs tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
            scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-electric-purple to-transparent" />
        </div>
      </div>

      {/* Decorative floating orbs */}
      <div
        className="absolute top-1/4 -left-24 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(107,33,232,0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(192,132,252,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />
    </section>
  );
}
