import Link from "next/link";
import { Icon } from "@/components/icons";
import { SERVICES } from "@/components/site-data";

export function TwoPillarDisciplines() {
  return (
    <section className="py-24 bg-[var(--pa)] border-y border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-[var(--ink3)] uppercase tracking-widest mb-3">
            § Two primary disciplines
          </p>
          <p className="text-2xl md:text-3xl font-heading font-semibold leading-heading text-[var(--ink)]">
            Two pillars. One practice. Zero compromise.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-8">
          {[SERVICES[0], SERVICES[1]].map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-8 md:p-10"
            >
              <p className="text-xs font-mono text-[var(--ink3)] uppercase tracking-widest mb-4">
                Pillar {s.id <= 9 ? `0${s.id}` : s.id} —{" "}
                {s.id === 1 ? "Primary" : "Secondary"} · {s.tag}
              </p>
              <h3 className="text-xl md:text-2xl font-heading font-semibold leading-heading text-[var(--ink)] mb-4">
                {s.title}
              </h3>
              <p className="text-base text-[var(--ink2)] leading-relaxed mb-6">
                {s.description}
              </p>
              <ul className="space-y-2.5">
                {s.bullets.slice(0, 4).map((b, i) => (
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
              <div className="mt-6 pt-6 border-t border-[var(--line)]">
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
                >
                  Explore {s.tag} <Icon name="arrowRight" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
