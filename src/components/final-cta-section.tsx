import Link from "next/link";
import { Icon } from "@/components/icons";

export function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--ink)] text-[var(--pa)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="text-sm font-mono text-[var(--accent)] mb-6">
              Ready to begin?
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-[var(--pa)] mb-6">
              Your AI.{" "}
              <span className="italic text-[var(--accent)]">
                Properly governed.
              </span>
            </h2>
            <p className="text-lg text-[var(--pa)]/70 leading-relaxed mb-8">
              Take the first step towards compliant, confident AI adoption. Free
              assessments and senior conversations — no strings, no process.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#booking"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Book a discovery call
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--pa)] hover:text-[var(--accent)] transition-colors"
              >
                Take the free assessment <Icon name="arrowRight" />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <span className="text-[20rem] lg:text-[28rem] font-display font-bold text-[var(--pa)]/5 leading-none select-none pointer-events-none">
              governed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
