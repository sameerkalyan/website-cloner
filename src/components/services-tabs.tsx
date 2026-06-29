"use client";

import { useState } from "react";
import { SERVICES } from "@/components/site-data";
import type { Service } from "@/types";
import { Icon } from "@/components/icons";

export function ServicesTabs() {
  const [active, setActive] = useState<Service>(SERVICES[0]);

  return (
    <section id="services" className="py-24 bg-[var(--pa)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="max-w-2xl mb-12">
          <p className="text-sm font-mono text-[var(--ink3)] uppercase tracking-widest mb-3">
            Our practice
          </p>
          <p className="text-2xl md:text-3xl font-display font-semibold text-[var(--ink)]">
            Two pillars. One practice. Zero compromise.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex lg:flex-col flex-wrap gap-2 shrink-0">
            {SERVICES.map((s) => (
              <button
                type="button"
                key={s.id}
                onClick={() => setActive(s)}
                className={`px-4 py-2.5 text-sm font-medium rounded-full border text-left transition-all cursor-pointer ${
                  active.id === s.id
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                    : "border-[var(--line)] text-[var(--ink2)] hover:border-[var(--ink)] hover:text-[var(--ink)]"
                }`}
              >
                {s.title}
              </button>
            ))}
            <p className="text-xs text-[var(--ink3)] pt-2 leading-relaxed">
              Extended capabilities available via partner network.
            </p>
          </div>

          <div className="flex-1 border border-[var(--line)] rounded-xl p-8 md:p-10 bg-[var(--card)]">
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="flex-1">
                <span className="inline-block px-2.5 py-1 text-xs font-mono font-medium bg-[var(--accent)]/10 text-[var(--accent)] rounded-full mb-4">
                  {active.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-[var(--ink)] mb-4">
                  {active.title}
                </h3>
                <p className="text-base md:text-lg text-[var(--ink2)] leading-relaxed mb-6">
                  {active.description}
                </p>
                <ul className="space-y-2.5">
                  {active.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-[var(--ink2)]"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 text-[var(--accent)] shrink-0"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {active.frameworks && (
                <aside className="xl:w-64 shrink-0 space-y-4 border-t xl:border-t-0 xl:border-l border-[var(--line)] pt-6 xl:pt-0 xl:pl-8">
                  <p className="text-xs font-mono text-[var(--ink3)] uppercase tracking-widest">
                    Frameworks
                  </p>
                  <ul className="space-y-2">
                    {active.frameworks.map((f) => (
                      <li
                        key={f}
                        className="flex items-center justify-between text-sm py-1.5 border-b border-[var(--line)]"
                      >
                        <span className="text-[var(--ink2)]">{f}</span>
                        <span className="text-[10px] font-mono text-[var(--ink3)] uppercase tracking-wider px-2 py-0.5 bg-[var(--pa)] rounded-full">
                          {active.sideItems[0]}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-xs font-mono text-[var(--ink3)] uppercase tracking-widest">
                      Stack coverage
                    </span>
                    <span className="text-xs font-mono text-[var(--accent)]">
                      Covered
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.stackRows?.map((s, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded bg-[var(--pa)] border border-[var(--line)] text-[var(--ink2)] font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </aside>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
