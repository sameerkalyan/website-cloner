import Link from "next/link";
import { Icon } from "@/components/icons";
import { BOOKING_TYPES } from "@/components/site-data";

export function BookingSection() {
  return (
    <section id="booking" className="py-24 bg-[var(--pa2)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="max-w-2xl mb-6">
          <p className="text-sm font-mono text-[var(--ink3)] uppercase tracking-widest mb-3">
            Talk to us
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-heading text-[var(--ink)]">
            A direct conversation. No process required.
          </h2>
        </header>
        <p className="text-base text-[var(--ink2)] leading-relaxed max-w-2xl mb-16">
          No charge for initial conversations. We respond within one business day.
          Senior-level engagement from the first call — practical next steps, not
          a sales process.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {BOOKING_TYPES.map((type) => (
            <Link
              key={type.id}
              href={type.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-[var(--line)] bg-[var(--card)] p-8 hover:border-[var(--ink)] transition-colors"
            >
              <Icon
                name="calendar"
                className="h-5 w-5 text-[var(--accent)] mb-4"
              />
              <span className="text-xs font-mono text-[var(--ink3)] uppercase tracking-widest mb-2">
                {type.duration}
              </span>
              <h3 className="text-lg font-semibold text-[var(--ink)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                {type.label}
              </h3>
              <p className="text-sm text-[var(--ink2)] leading-relaxed mb-4 flex-1">
                {type.description}
              </p>
              <span className="text-sm font-semibold text-[var(--ink)] inline-flex items-center gap-1.5">
                Book now <Icon name="arrowRight" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
