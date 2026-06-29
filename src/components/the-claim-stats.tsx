"use client";

import Link from "next/link";
import { Icon } from "@/components/icons";

export function TheClaimStats() {
  return (
    <section className="py-24 md:py-32 bg-[var(--card)] border-y border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <span className="text-8xl md:text-9xl font-heading font-semibold text-[var(--ink)] leading-none">
              73%
            </span>
          </div>
          <div className="pt-2">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold leading-heading text-[var(--ink)] mb-6">
              of organisations have deployed AI without a governance framework.
            </h2>
            <p className="text-base text-[var(--ink2)] leading-relaxed mb-8">
              The governance gap is especially acute in regulated industries —
              financial services, healthcare, and critical infrastructure — where
              the consequences of ungoverned AI compound over time.
            </p>
            <blockquote className="border-l-2 border-[var(--accent)] pl-6 py-1">
              <p className="text-lg font-heading italic text-[var(--ink2)] leading-relaxed">
                The organisations that govern AI well will not just avoid
                regulatory risk — they will move faster, with greater confidence,
                than those who do not.
              </p>
            </blockquote>
            <div className="mt-8">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
              >
                Explore our services <Icon name="arrowRight" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
