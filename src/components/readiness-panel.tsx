import { READINESS_DATA } from "@/components/site-data";

export function ReadinessPanel() {
  return (
    <aside className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-8">

      <p className="text-xs font-mono text-[var(--ink3)] uppercase tracking-widest mb-2">
        Governance Readiness Index
      </p>
      <p className="text-sm text-[var(--ink3)] mb-6">FIG.01</p>
      <ul className="space-y-4">
        {READINESS_DATA.map((item) => (
          <li key={item.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono text-[var(--ink2)]">
                {item.label}
              </span>
              <span className="text-xs font-mono text-[var(--ink3)]">
                {item.pct}%
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-[var(--pa2)]">
              <div
                className="h-full rounded-full bg-[var(--accent)] transition-all duration-700 ease-out"
                style={{ width: `${item.pct}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-[var(--ink3)]">
        Illustrative framework · Six governance dimensions scored against
        recognised standards.
      </p>
    </aside>
  );
}
