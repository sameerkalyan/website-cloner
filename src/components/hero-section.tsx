import Link from "next/link";
import { Icon } from "@/components/icons";

export function HeroSection() {
  return (
    <section className="relative pt-8 pb-20 md:pt-12 md:pb-28 bg-[var(--pa)]">
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <div
            className="flex items-center gap-2.5 text-[11px] font-mono text-[var(--ink3)] mb-6 uppercase tracking-widest opacity-0"
            style={{ animation: "fadeUp 0.5s ease-out 0.05s forwards" }}
          >
            <span className="accent-dot relative flex h-2 w-2" />
            AI Governance &amp; Infrastructure Consultancy · London
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-[4.5rem] font-sans font-extrabold leading-[1.05] tracking-tight text-[var(--ink)] mb-8 opacity-0"
            style={{ animation: "fadeUp 0.55s ease-out 0.1s forwards", textWrap: "balance" }}
          >
            <span className="block">EU AI Act enforcement</span>
            <span className="block mt-2 font-serif italic font-normal text-[var(--accent)]">has begun.</span>
          </h1>

          <p
            className="text-base md:text-lg text-[var(--ink2)] leading-relaxed mb-4 opacity-0"
            style={{ animation: "fadeUp 0.55s ease-out 0.15s forwards" }}
          >
            We help regulated organisations move from obligation to evidence — governance programmes,
            cloud architecture, and forward-deployed engineers who ship.
          </p>

          <p
            className="text-sm text-[var(--ink3)] mb-10 opacity-0"
            style={{ animation: "fadeUp 0.55s ease-out 0.175s forwards" }}
          >
            For Heads of Compliance, CISOs, and AI platform owners in financial services,
            healthcare, and critical infrastructure.
          </p>

          <div
            className="flex flex-wrap items-center gap-3 opacity-0"
            style={{ animation: "fadeUp 0.55s ease-out 0.2s forwards" }}
          >
            <Link
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#2563eb] transition-colors"
            >
              Book a discovery call
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
            >
              Explore our services <Icon name="arrowRight" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
