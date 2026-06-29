import Link from "next/link";
import { Icon } from "@/components/icons";
import { FOOTER_LINKS } from "@/components/site-data";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--pa)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
          <div className="col-span-2">
            <Link href="#" className="flex items-center gap-2.5 mb-6">
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-md border border-[var(--pa)] bg-[var(--ink)] text-[var(--pa)] font-mono text-xs font-medium">
                SC
              </span>
              <span className="text-sm font-semibold tracking-tight text-[var(--pa)]">
                SMIIT CyberAI
              </span>
            </Link>
            <p className="text-sm text-[var(--pa)]/70 leading-relaxed max-w-xs mb-6">
              AI Governance and Infrastructure Consultancy for regulated
              enterprise. Specialist, independent, and anchored in practice.
              London, UK.
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="https://linkedin.com"
                className="text-[var(--pa)]/60 hover:text-[var(--accent)] transition-colors"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" />
              </Link>
              <Link
                href="https://x.com"
                className="text-[var(--pa)]/60 hover:text-[var(--accent)] transition-colors"
                aria-label="X (Twitter)"
              >
                <Icon name="xTwitter" />
              </Link>
              <Link
                href="mailto:hello@smiitcyberai.com"
                className="text-[var(--pa)]/60 hover:text-[var(--accent)] transition-colors"
                aria-label="Email"
              >
                <Icon name="mail" />
              </Link>
            </div>
          </div>
          {([
            { title: "Services", links: FOOTER_LINKS.services },
            { title: "Intelligence", links: FOOTER_LINKS.intelligence },
            { title: "Frameworks", links: FOOTER_LINKS.frameworks },
            { title: "Company", links: FOOTER_LINKS.company },
          ]).map((group) => (
            <div key={group.title}>
              <p className="text-xs font-mono text-[var(--pa)]/50 uppercase tracking-widest mb-4">
                {group.title}
              </p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--pa)]/70 hover:text-[var(--pa)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-[var(--pa)]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--pa)]/50">
            © 2026 SMIIT CyberAI
          </p>
          <nav className="flex flex-wrap items-center gap-6">
            <Link
              href="#"
              className="text-xs text-[var(--pa)]/50 hover:text-[var(--pa)] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-[var(--pa)]/50 hover:text-[var(--pa)] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-xs text-[var(--pa)]/50 hover:text-[var(--pa)] transition-colors"
            >
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
