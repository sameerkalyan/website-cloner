import Link from "next/link";
import { Icon } from "@/components/icons";
import { INDUSTRIES } from "@/components/site-data";

export function IndustriesSection() {
  return (
    <section className="py-24 bg-[var(--pa2)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-[var(--ink3)] uppercase tracking-widest mb-3">
            Industries
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-heading text-[var(--ink)]">
            Where governance and infrastructure carry the most weight.
          </h2>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="flex flex-col rounded-2xl border border-[var(--line)] bg-[var(--card)] p-8"
            >
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-3">
                {ind.name}
              </h3>
              <p className="text-sm text-[var(--ink2)] leading-relaxed mb-6 flex-1">
                {ind.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {ind.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--pa)] border border-[var(--line)] text-[var(--ink2)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
