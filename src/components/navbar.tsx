"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { NAV_ITEMS } from "@/components/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled((prev) => {
      if (prev) return prev;
      return window.scrollY > 40;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--pa)]/85 backdrop-blur supports-[backdrop-filter]:bg-[var(--pa)]/75 border-b-[var(--line)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between lg:px-8">
        <Link
          href="#"
          prefetch={false}
          className="flex items-center gap-2.5 shrink-0"
        >
          <span className="inline-flex items-center justify-center h-7 w-7 rounded-md border border-[var(--line)] bg-[var(--ink)] text-[var(--pa)] font-mono text-xs font-medium">
            SC
          </span>
          <span className="text-sm font-semibold tracking-tight text-[var(--ink)]">
            SMIIT CyberAI
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-[var(--ink2)] hover:text-[var(--ink)] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Link
              href="#services"
              className="hidden sm:inline-flex text-sm font-medium text-[var(--ink2)] hover:text-[var(--ink)] transition-colors"
            >
              Readiness check
            </Link>
            <Link
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            >
              Book a call
            </Link>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 text-[var(--ink)]"
          aria-label="Toggle menu"
        >
          <Icon name="menu" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t-[var(--line)] bg-[var(--pa)]">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base text-[var(--ink2)] hover:text-[var(--ink)]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
              onClick={() => setMobileOpen(false)}
            >
              Book a call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
