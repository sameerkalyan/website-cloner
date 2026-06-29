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
    return window.scrollY > 32;
  });
}, []);

useEffect(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, [onScroll]);

return (
  <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "glass border-b border-[var(--line)]" : "bg-[var(--pa)]"
    }`}
  >
  <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between lg:px-8">
    <Link
      href="#"
      prefetch={false}
      className="flex items-center gap-2.5 shrink-0 group"
    >
      <span className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-[var(--accent)] font-mono text-xs font-semibold text-white">
        SC
      </span>
      <span className="text-sm font-semibold tracking-tight text-[var(--ink)]">
        SMIIT CyberAI
      </span>
    </Link>

    <div className="hidden md:flex items-center gap-8">
      <ul className="flex items-center gap-7">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-[13px] text-[var(--ink3)] hover:text-[var(--ink)] transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 pl-7 border-l border-[var(--line)]">
        <Link
          href="#services"
          className="hidden sm:inline-flex text-[13px] font-medium text-[var(--ink3)] hover:text-[var(--ink)] transition-colors"
        >
          Readiness check
        </Link>
        <Link
          href="#booking"
          className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-4 py-2 text-[13px] font-medium text-white hover:bg-[#2563eb] transition-colors"
        >
          Book a call
        </Link>
      </div>
    </div>

    <button
      onClick={() => setMobileOpen((v) => !v)}
      className="md:hidden inline-flex items-center justify-center h-10 w-10 text-[var(--ink2)] hover:text-[var(--ink)] transition-colors"
      aria-label="Toggle menu"
    >
      <Icon name="menu" />
    </button>
  </nav>

  {mobileOpen && (
    <div className="md:hidden border-t border-[var(--line)] bg-[var(--pa)]/95 backdrop-blur">
      <div className="px-6 py-5 flex flex-col gap-4">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-[15px] text-[var(--ink2)] hover:text-[var(--ink)]"
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="#booking"
          className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white"
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
