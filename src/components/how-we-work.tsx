import { ENGAGEMENT_PHASES } from "@/components/site-data";

export function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 bg-[var(--pa2)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="max-w-2xl mb-16">
          <p className="text-sm font-mono text-[var(--ink3)] uppercase tracking-widest mb-3">
            Operating model
          </p>
          <p className="text-3xl md:text-4xl font-sans font-semibold text-[var(--ink)]">
            How engagements run.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {ENGAGEMENT_PHASES.map((phase) => (
            <div key={phase.phase} className="relative timeline-phase">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-sans font-bold text-[var(--accent)] metric-value">
                  {phase.phase}
                </span>
                <div className="h-px flex-1 bg-[var(--line)]" />
              </div>

              <h3 className="text-xl font-sans font-semibold text-[var(--ink)] mb-1">
                {phase.title}
              </h3>
              <p className="text-xs font-mono text-[var(--ink3)] uppercase tracking-widest mb-6">
                {phase.duration}
              </p>

              <ul className="space-y-3">
                {phase.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-[var(--ink2)]">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-[var(--accent)] shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
