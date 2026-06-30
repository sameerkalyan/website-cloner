import { Icon } from "@/components/icons";

const TRUST_SIGNALS = [
  {
    title: "Security certified",
    description: "SOC 2 Type II compliant. All client work isolated under ISO 27001-aligned controls.",
  },
  {
    title: "Your NDA, your terms",
    description: "We work under your agreement. No mandatory contractor T&Cs.",
  },
  {
    title: "UK-based entity",
    description: "London-headquartered. UK law governs all engagements. Professional liability insured.",
  },
];

export function TrustSecurity() {
  return (
    <section className="py-20 bg-[var(--pa2)] border-t border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {TRUST_SIGNALS.map((signal) => (
            <div key={signal.title} className="hover-lift card-glow flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="h-10 w-10 rounded-full bg-[var(--pa)] border border-[var(--line)] flex items-center justify-center">
                  <Icon name="check" className="h-5 w-5 text-[var(--accent)]" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[var(--ink)] mb-1.5">
                  {signal.title}
                </h3>
                <p className="text-sm text-[var(--ink2)] leading-relaxed">
                  {signal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}