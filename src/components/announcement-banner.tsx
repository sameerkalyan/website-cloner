export function AnnouncementBanner() {
  return (
    <aside className="relative z-30 bg-[var(--ink)] text-[var(--pa)] mt-16">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center gap-2.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
        </span>
        <span className="text-xs font-mono font-medium text-[var(--accent)]">
          Now accepting Q3 engagements
        </span>
      </div>
    </aside>
  );
}
