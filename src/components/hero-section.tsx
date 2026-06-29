"use client";

import { useState, useEffect } from "react";
import { ReadinessPanel } from "@/components/readiness-panel";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { DISCIPLINES } from "@/components/site-data";

export function HeroSection() {
  const [activeDiscipline, setActiveDiscipline] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveDiscipline((prev) => (prev + 1) % DISCIPLINES.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[var(--pa)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-2 text-sm font-mono text-[var(--ink3)] mb-8">
              AI Governance & Infrastructure Consultancy · London
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
              </span>
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading leading-heading text-[var(--ink)] mb-6">
              <span className="block italic text-[var(--ink2)]">
                Most enterprise AI is
              </span>
              <span className="block font-bold">ungoverned.</span>
              <span className="block italic text-[var(--accent)]">
                We change that.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--ink2)] leading-relaxed max-w-2xl mb-10">
              SMIIT CyberAI is the specialist firm for AI governance and AI
              infrastructure in regulated industries. We help organisations meet
              EU AI Act obligations, build resilient cloud architecture, and
              deploy AI systems with confidence — supported by
              forward-deployed engineers.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Explore our services
              </Link>
              <Link
                href="#booking"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
              >
                Talk to us <Icon name="arrowRight" />
              </Link>
            </div>

            <div className="mt-16 md:mt-20">
              <p className="text-xs font-mono text-[var(--ink3)] uppercase tracking-widest mb-4">
                Disciplines
              </p>
              <nav className="flex flex-wrap gap-x-6 gap-y-2">
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
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <ReadinessPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
