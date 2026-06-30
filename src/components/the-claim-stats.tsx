"use client";

import Link from "next/link";
import { Icon } from "@/components/icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { STAT_73PCT_NOTE } from "@/components/site-data";

export function TheClaimStats() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 border-y border-[var(--line)]">
      <div ref={ref} className={`mx-auto max-w-7xl px-6 lg:px-8 ${isVisible ? "reveal visible" : ""}`}>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <span className="text-[7rem] md:text-[9rem] font-sans font-bold text-[var(--ink)] leading-[0.85] metric-value">
              73
              <span className="text-[var(--accent)]">%</span>
            </span>
            <h2 className="text-2xl md:text-3xl font-sans font-semibold text-[var(--ink)] mt-6 leading-snug">
              of organisations have deployed AI without a governance framework.
            </h2>
            <p className="text-[11px] text-[var(--ink3)] mt-3 leading-relaxed">{STAT_73PCT_NOTE}</p>
          </div>
          <div className="pt-4 md:pt-8">
            <p className="text-base text-[var(--ink2)] leading-relaxed mb-8">
              The governance gap is especially acute in regulated industries —
              financial services, healthcare, and critical infrastructure — where
              the consequences of ungoverned AI compound over time.
            </p>
            <blockquote className="border-l-2 border-[var(--accent)] pl-6 py-1">
              <p className="text-lg font-sans italic text-[var(--ink2)] leading-relaxed">
                The organisations that govern AI well will not just avoid
                regulatory risk — they will move faster, with greater confidence,
                than those who do not.
              </p>
            </blockquote>
            <div className="mt-8">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
              >
                Explore our services <Icon name="arrowRight" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
