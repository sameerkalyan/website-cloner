import Link from "next/link";
import { Icon } from "@/components/icons";
import { LEAD_MAGNETS } from "@/components/site-data";

export function FreeResourcesSection() {
  return (
    <section className="py-24 bg-[var(--pa)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-[var(--ink3)] uppercase tracking-widest mb-3">
            Start here
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-heading text-[var(--ink)]">
            Start here, at no cost.
          </h2>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {LEAD_MAGNETS.map((magnet) => (
            <div
              key={magnet.id}
              className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-8 border-t-4 border-t-[var(--accent)]"
            >
              <div className="mb-5">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <Icon name={magnet.icon as any} />
                </span>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--ink3)] mb-2">
                {magnet.title}
              </p>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">
                {magnet.subtitle}
              </h3>
              <p className="text-sm text-[var(--ink2)] leading-relaxed mb-6">
                {magnet.description}
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
              >
                {magnet.cta} <Icon name="arrowRight" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
