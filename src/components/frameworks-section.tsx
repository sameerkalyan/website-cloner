"use client";

import { FrameworksMarquee } from "@/components/frameworks-marquee";
import { FRAMEWORKS } from "@/components/site-data";

export function FrameworksSection() {
  return (
    <section id="frameworks" className="py-24 bg-[var(--pa)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="max-w-2xl mb-12">
          <p className="text-sm font-mono text-[var(--ink3)] uppercase tracking-widest mb-3">
            Standards
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-heading text-[var(--ink)]">
            Every engagement anchored to recognised standards.
          </h2>
        </header>

        <FrameworksMarquee />

        <div className="mt-12 divide-y divide-[var(--line)]">
          {FRAMEWORKS.map((fw) => (
            <div
              key={fw.id}
              className="py-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-6 first:pt-0"
            >
              <span className="text-xs font-mono font-medium uppercase tracking-widest text-[var(--accent)] w-32 shrink-0">
                {fw.category}
              </span>
              <span className="text-lg font-semibold text-[var(--ink)] w-52 shrink-0">
                {fw.name}
              </span>
              <span className="text-sm text-[var(--ink2)]">
                {fw.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
