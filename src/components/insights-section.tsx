"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { BLOG_ARTICLES } from "@/components/site-data";
import type { BlogArticle } from "@/types";

type Filter = "All topics" | "AI Governance" | "Infrastructure" | "AI Agents" | "Transformation";

export function InsightsSection() {
  const [filter, setFilter] = useState<Filter>("All topics");

  const filters: Filter[] = [
    "All topics",
    "AI Governance",
    "Infrastructure",
    "AI Agents",
    "Transformation",
  ];

  const filtered =
    filter === "All topics"
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter((a) => a.category === filter);

  return (
    <section id="insights" className="py-24 bg-[var(--pa2)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-mono text-[var(--ink3)] uppercase tracking-widest mb-3">
              Intelligence Hub
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold leading-heading text-[var(--ink)]">
              Analysis for compliance and engineering leaders.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all ${
                  filter === f
                    ? "bg-[var(--ink)] text-[var(--pa)]"
                    : "bg-transparent text-[var(--ink2)] border border-[var(--line)] hover:border-[var(--ink)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article: BlogArticle) => (
            <article
              key={article.id}
              className="group flex flex-col rounded-xl border border-[var(--line)] bg-[var(--card)] p-6 hover:border-[var(--ink)] transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-[var(--ink3)]">
                    {article.date}
                  </span>
                  <span className="text-xs text-[var(--ink3)]">·</span>
                  <span className="text-xs font-mono text-[var(--accent)]">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-snug text-[var(--ink)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--ink2)] leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-[var(--line)]">
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
                >
                  Read article
                  <Icon name="arrowRight" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <article className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-8 md:p-10">
            <p className="text-xs font-mono text-[var(--ink3)] uppercase tracking-widest mb-3">
              Newsletter
            </p>
            <h3 className="text-xl font-semibold text-[var(--ink)] mb-2">
              The SMIIT Intelligence Brief
            </h3>
            <p className="text-sm text-[var(--ink2)] mb-6">
              Fortnightly analysis for technology and compliance leaders. No
              noise, just signal.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 min-w-0 rounded-full border border-[var(--line)] bg-[var(--pa)] px-4 py-2 text-sm text-[var(--ink)] placeholder:text-[var(--ink3)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}
