"use client";

import Link from "next/link";
import { Icon } from "@/components/icons";
import { STAT_73PCT_NOTE, PROOF_ITEMS } from "@/components/site-data";

export function TheClaimStats() {
  return (
    <section className="py-24 md:py-32 border-y border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <span className="text-[7rem] md:text-[9rem] font-display font-bold text-[var(--ink)] leading-[0.85] metric-value">
              73
              <span className="text-[var(--accent)]">%</span>
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-[var(--ink)] mt-6 leading-snug">
              of organisations have deployed AI without a governance framework.
            </h2>
            <p className="text-[11px] text-[var(--ink3)] mt-3 leading-relaxed">
              {STAT_73PCT_NOTE}
            </p>
          </div>
          <div className="pt-4 md:pt-8">
            <p className="text-base text-[var(--ink2)] leading-relaxed mb-8">
              The governance gap is especially acute in regulated industries —
              financial services, healthcare, and critical infrastructure — where
              the consequences of ungoverned AI compound over time.
            </p>
            <div className="border-t border-[var(--line)] pt-6 mb-8">
              <p className="text-[10px] font-mono text-[var(--ink3)] uppercase tracking-widest mb-4">
                Selected outcomes
              </p>
              <div className="space-y-4">
                {PROOF_ITEMS.map((item) => (
                  <div key={item.metric} className="flex items-start gap-3">
                    <span className="text-sm font-mono font-bold text-[var(--accent)] mt-0.5">
                      {item.metric}
                    </span>
                    <span className="text-sm text-[var(--ink2)] leading-relaxed">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
