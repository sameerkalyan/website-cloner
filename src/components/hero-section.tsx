"use client";

import { useState, useEffect } from "react";
import { ReadinessPanel } from "@/components/readiness-panel";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { DISCIPLINES } from "@/components/site-data";

export function HeroSection() {
const [, setActiveDiscipline] = useState(0);

useEffect(() => {
const id = window.setInterval(() => {
setActiveDiscipline((prev) => (prev + 1) % DISCIPLINES.length);
}, 3500);
return () => window.clearInterval(id);
}, []);

return (
<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[var(--pa)] gradient-bg">
<div className="absolute inset-0 dot-grid opacity-50" />

<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-12 lg:gap-16 items-start">
<div className="lg:col-span-7">
<div
className="flex items-center gap-2.5 text-[11px] font-mono text-[var(--ink3)] mb-8 uppercase tracking-widest opacity-0"
style={{ animation: "fadeUp 0.5s ease-out 0.05s forwards" }}
>
<span className="accent-dot relative flex h-2 w-2" />
AI Governance &amp; Infrastructure Consultancy · London
</div>

<h1
className="text-[3.4rem] md:text-7xl font-display font-bold leading-[0.95] tracking-tight text-[var(--ink)] mb-8 opacity-0"
style={{ animation: "fadeUp 0.55s ease-out 0.1s forwards" }}
>
<span className="block text-[var(--ink2)]/80">Most enterprise AI is</span>
<span className="block text-[var(--ink)] mt-1">ungoverned.</span>
<span className="block text-[var(--accent)] mt-1">We fix that.</span>
</h1>

<div
className="max-w-2xl mb-10 opacity-0"
style={{ animation: "fadeUp 0.55s ease-out 0.2s forwards" }}
>
<p className="text-lg md:text-xl text-[var(--ink2)] leading-relaxed">
SMIIT CyberAI is the specialist firm for AI governance and AI
infrastructure in regulated industries. We help organisations meet
EU AI Act obligations, build resilient cloud architecture, and
deploy AI systems with confidence — supported by forward-deployed
engineers.
</p>
</div>

<div className="flex flex-wrap items-center gap-3">
<Link
href="#services"
className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#2563eb] transition-colors"
>
Explore our services
</Link>
<Link
href="#booking"
className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
>
Book a discovery call <Icon name="arrowRight" />
</Link>
</div>

<div className="mt-16 md:mt-20">
<p className="text-xs font-mono text-[var(--ink3)] uppercase tracking-widest mb-4">
Disciplines
</p>
<nav className="flex flex-wrap gap-x-6 gap-y-2">
{DISCIPLINES.map((discipline, idx) => (
<Link
key={discipline}
href="#services"
className="text-sm text-[var(--ink2)] hover:text-[var(--ink)] transition-colors"
onMouseEnter={() => setActiveDiscipline(idx)}
>
<span className="font-mono text-[var(--ink3)] mr-1.5">
0{idx + 1}
</span>
{discipline}
</Link>
))}
</nav>
</div>
</div>
<div className="lg:col-span-5 mt-12 lg:mt-0">
<ReadinessPanel />
</div>
</div>
</div>
</section>
);
}
