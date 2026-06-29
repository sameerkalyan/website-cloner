import Link from "next/link";
import { Icon } from "@/components/icons";

export function AnnouncementBanner() {
  return (
    <aside className="relative z-20 bg-[var(--ink)] text-[var(--pa)]">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between gap-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 min-w-0">
          <span className="inline-flex items-center gap-2 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
            </span>
            <span className="text-xs font-mono font-medium text-[var(--accent)]">
              Now active
            </span>
          </span>
          <p className="text-sm text-[var(--pa)]/90 truncate">
            EU AI Act enforcement has begun. Is your organisation prepared?
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--pa)] whitespace-nowrap hover:text-[var(--accent)] transition-colors"
        >
          Download the readiness guide
          <Icon name="arrowRight" />
        </Link>
      </div>
    </aside>
  );
}
