import { PROOF_ITEMS } from "@/components/site-data";

export function ProofBlock() {
  return (
    <section className="py-16 bg-[var(--pa)] border-y border-[var(--line)]" aria-label="Proof anchors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {PROOF_ITEMS.map((item) => (
            <div key={item.metric} className="hover-lift border-l-2 border-[var(--accent)] pl-5">
              <p className="text-3xl md:text-4xl font-sans font-bold text-[var(--ink)] leading-none mb-2 metric-value">
                {item.metric}
              </p>
              <p className="text-sm text-[var(--ink2)] leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
