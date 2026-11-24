"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "./icons";
import { stepsFor } from "./lessonSteps";
import { useProgress } from "@/lib/progress";


export function LessonSidebar({
  slug,
  level,
  levelTitle,
  siblings,
  hasMedia = false,
}: {
  slug: string;
  level: number;
  levelTitle: string;
  siblings: { slug: string; title: string }[];
  hasMedia?: boolean;
}) {
  const lessonSteps = useMemo(() => stepsFor(hasMedia), [hasMedia]);
  const { progress } = useProgress();
  const [active, setActive] = useState("idea");

  useEffect(() => {
    const els = lessonSteps.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-80px 0px -55% 0px" },
    );
    els.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, [lessonSteps]);

  const done = siblings.filter((s) => progress[s.slug]?.done).length;

  // Lleva la lección actual a la vista dentro del carril (solo se desplaza el carril, nunca la página)
  const railRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const rail = railRef.current;
    const cur = rail?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!rail || !cur || rail.scrollHeight <= rail.clientHeight) return;
    const r = rail.getBoundingClientRect();
    const c = cur.getBoundingClientRect();
    if (c.top < r.top) rail.scrollTop -= r.top - c.top + 8;
    else if (c.bottom > r.bottom) rail.scrollTop += c.bottom - r.bottom + 8;
  }, [slug]);

  return (
    <div
      ref={railRef}
      className="space-y-8 text-sm xl:sticky xl:top-10 xl:max-h-[calc(100vh-5rem)] xl:overflow-y-auto xl:overscroll-contain xl:px-1 xl:pb-2"
    >
      <div>
        <p className="mb-2 px-2 font-medium">En esta lección</p>
        <ol className="space-y-0.5">
          {lessonSteps.map((s, i) => {
            const on = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={on ? "location" : undefined}
                  className={`flex items-center gap-2.5 rounded-md px-2 py-1 ${on ? "font-semibold text-ink" : "text-muted hover:text-ink"}`}
                >
                  <span aria-hidden className={`bubble h-6 w-6 text-xs tabular-nums ${on ? "bubble-current" : "text-muted"}`}>
                    {i + 1}
                  </span>
                  {s.label}
                </a>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="border-t border-line pt-6">
        <p className="mb-2 flex items-start justify-between gap-2 px-2 font-medium">
          <Link href={`/nivel/${level}`} className="hover:text-accent">Nivel {level}. {levelTitle}</Link>
          <span className="shrink-0 font-normal tabular-nums text-muted">{done}/{siblings.length}</span>
        </p>
        <ol className="space-y-0.5">
          {siblings.map((s) => {
            const here = s.slug === slug;
            const ok = progress[s.slug]?.done;
            return (
              <li key={s.slug}>
                <Link
                  href={`/leccion/${s.slug}`}
                  aria-current={here ? "page" : undefined}
                  className={`relative flex items-start gap-2 rounded-md px-2 py-1 leading-snug ${
                    here ? "bg-accent-soft font-semibold text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {here && <span aria-hidden className="absolute inset-y-0 left-0 w-0.5 rounded-full bg-accent" />}
                  <span aria-hidden className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center">
                    {ok ? (
                      <Icon name="check" className="h-4 w-4 text-ok" />
                    ) : here ? (
                      <span className="bubble bubble-current h-3 w-3" />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
                    )}
                  </span>
                  <span className="line-clamp-2 min-w-0" title={s.title}>
                    {ok && <span className="sr-only">Hecha: </span>}
                    {s.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
