"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
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

  return (
    <div className="space-y-8 text-sm xl:sticky xl:top-10">
      <div>
        <p className="mb-2 px-2 font-medium">En esta lección</p>
        <ol className="space-y-0.5">
          {lessonSteps.map((s, i) => {
            const on = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`flex items-center gap-2.5 rounded-md px-2 py-1 ${on ? "font-medium text-ink" : "text-muted hover:text-ink"}`}
                >
                  <span
                    className="grid h-5 w-5 shrink-0 place-items-center rounded-full text-[11px] font-semibold tabular-nums"
                    style={on ? { background: "var(--accent)", color: "var(--on-accent)" } : { background: "var(--soft)" }}
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
                  className={`flex items-start gap-2 rounded-md px-2 py-1 leading-snug ${here ? "font-medium text-ink" : "text-muted hover:text-ink"}`}
                >
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center">
                    {ok ? <Icon name="check" className="h-4 w-4 text-ok" /> : <span className="h-2 w-2 rounded-full" style={{ background: here ? "var(--signal)" : "var(--line-strong)" }} />}
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
