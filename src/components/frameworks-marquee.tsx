"use client";

import { useRef, useEffect, useState } from "react";
import { MARQUEE_ITEMS, REPEATS } from "@/components/icons";

export function FrameworksMarquee() {
const trackRef = useRef<HTMLDivElement>(null);
const [paused, setPaused] = useState(false);

useEffect(() => {
const el = trackRef.current;
if (!el) return;
const onEnter = () => setPaused(true);
const onLeave = () => setPaused(false);
el.addEventListener("mouseenter", onEnter);
el.addEventListener("mouseleave", onLeave);
return () => {
el.removeEventListener("mouseenter", onEnter);
el.removeEventListener("mouseleave", onLeave);
};
}, []);

const repeated = Array.from({ length: REPEATS }, () => MARQUEE_ITEMS).flat();

return (
<div
ref={trackRef}
className="overflow-hidden border-y border-[var(--line)] bg-[var(--pa)] -mx-6 lg:-mx-8"
>
  <div
    className="inline-flex animate-marquee"
    style={{ animationPlayState: paused ? "paused" : undefined }}
  >
    {repeated.map((item, i) => (
      <span
        key={`${item}-${i}`}
        className="inline-flex items-center px-6 py-4 text-sm md:text-base text-[var(--ink2)] whitespace-nowrap"
      >
        {item}
        <span className="mx-4 text-[var(--line2)]">/</span>
      </span>
    ))}
  </div>
</div>
);
}
