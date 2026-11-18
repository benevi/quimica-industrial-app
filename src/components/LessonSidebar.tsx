"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { lessonSteps } from "./lessonSteps";
import { useProgress } from "@/lib/progress";


export function LessonSidebar({
  slug,
  level,
  levelTitle,
  color,
  siblings,
}: {
  slug: string;
  level: number;
  levelTitle: string;
  color: string;
  siblings: { slug: string; title: string }[];
}) {
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
  }, []);

  const done = siblings.filter((s) => progress[s.slug]?.done).length;

  return (
    <div className="space-y-6 text-sm lg:sticky lg:top-20">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">En esta lección</p>
        <ol className="space-y-0.5">
          {lessonSteps.map((s, i) => {
            const on = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`flex items-center gap-2.5 rounded-lg px-2 py-1.5 ${on ? "bg-surface font-medium text-ink shadow-sm" : "text-muted hover:text-ink"}`}
                >
                  <span
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-semibold"
                    style={on ? { background: color, color: "white" } : { background: "var(--soft)" }}
                  >
                    {i + 1}
                  </span>
                  {s.label}
                </a>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="hidden lg:block">
        <p className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted">
          <Link href={`/nivel/${level}`} className="hover:text-ink">Nivel {level}. {levelTitle}</Link>
          <span className="tabular-nums">{done}/{siblings.length}</span>
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
                  className={`flex items-start gap-2 rounded-lg px-2 py-1.5 leading-snug ${here ? "bg-surface font-medium text-ink shadow-sm" : "text-muted hover:text-ink"}`}
                >
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center">
                    {ok ? <Icon name="check" className="h-4 w-4 text-ok" /> : <span className="h-2 w-2 rounded-full" style={{ background: here ? color : "var(--line)" }} />}
                  </span>
                  {s.title}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
