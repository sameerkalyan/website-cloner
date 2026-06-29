"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { DISCIPLINES } from "@/components/site-data";

export function HeroSection() {
  const [, setActiveDiscipline] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveDiscipline((prev) => (prev + 1) % DISCIPLINES.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative pt-8 pb-20 md:pt-12 md:pb-28 bg-[var(--pa)] gradient-bg">
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <div
            className="flex items-center gap-2.5 text-[11px] font-mono text-[var(--ink3)] mb-6 uppercase tracking-widest opacity-0"
            style={{ animation: "fadeUp 0.5s ease-out 0.05s forwards" }}
          >
            <span className="accent-dot relative flex h-2 w-2" />
            AI Governance &amp; Infrastructure Consultancy · London
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-[4.5rem] font-display font-extrabold leading-[1.05] tracking-tight text-[var(--ink)] mb-8 opacity-0"
            style={{ animation: "fadeUp 0.55s ease-out 0.1s forwards", textWrap: "balance" }}
          >
            <span className="block text-[var(--ink2)]">EU AI Act enforcement</span>
            <span className="block text-[var(--ink)] mt-1">has begun.</span>
          </h1>

          <p
            className="text-base md:text-lg text-[var(--ink2)] leading-relaxed mb-4 opacity-0"
            style={{ animation: "fadeUp 0.55s ease-out 0.15s forwards" }}
          >
            We help regulated organisations move from obligation to evidence — governance programmes,
            cloud architecture, and forward-deployed engineers who ship.
          </p>

          <p
            className="text-sm text-[var(--ink3)] mb-10 opacity-0"
            style={{ animation: "fadeUp 0.55s ease-out 0.175s forwards" }}
          >
            For Heads of Compliance, CISOs, and AI platform owners in financial services,
            healthcare, and critical infrastructure.
          </p>

          <div
            className="flex flex-wrap items-center gap-3 mb-20 opacity-0"
            style={{ animation: "fadeUp 0.55s ease-out 0.2s forwards" }}
          >
            <Link
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#2563eb] transition-colors"
            >
              Book a discovery call
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
            >
              Explore our services <Icon name="arrowRight" />
            </Link>
          </div>
        </div>

        <div className="mt-0">
          <p className="text-xs font-mono text-[var(--ink3)] uppercase tracking-widest mb-4">
            Disciplines
          </p>
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3">
            {DISCIPLINES.map((discipline, idx) => (
              <Link
                key={discipline}
                href="#services"
                className="text-sm text-[var(--ink2)] hover:text-[var(--ink)] transition-colors"
                onMouseEnter={() => setActiveDiscipline(idx)}
              >
                <span className="font-mono text-[var(--ink3)] mr-1.5">
                  0{idx + 1}
                </span>
                {discipline}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
