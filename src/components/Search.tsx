"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "./icons";

export type SearchIndex = {
  lessons: { slug: string; title: string; titleEn: string; summary: string; level: number; levelTitle: string }[];
  terms: { es: string; en: string; def: string; lesson: string; lessonTitle: string }[];
};

export const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

type Hit = { kind: "lesson" | "term"; href: string; title: string; sub: string; detail: string; score: number };

/** Buscador global: lecciones y términos del glosario (Ctrl+K o «/»). */
export function Search({ index }: { index: SearchIndex }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      const typing = t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable;
      if ((e.key === "k" && (e.ctrlKey || e.metaKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQ("");
      setSel(0);
    }
  }, [open]);

  const hits = useMemo<Hit[]>(() => {
    const n = norm(q.trim());
    if (n.length < 2) return [];
    const out: Hit[] = [];
    for (const l of index.lessons) {
      const t = norm(`${l.title} ${l.titleEn}`);
      const s = norm(l.summary);
      if (t.includes(n) || s.includes(n))
        out.push({ kind: "lesson", href: `/leccion/${l.slug}`, title: l.title, sub: `Nivel ${l.level} · ${l.levelTitle}`, detail: l.summary, score: t.startsWith(n) ? 0 : t.includes(n) ? 0.4 : 3 });
    }
    const seen = new Set<string>();
    for (const t of index.terms) {
      const k = norm(`${t.es} ${t.en}`);
      if (!k.includes(n) || seen.has(norm(t.es))) continue;
      seen.add(norm(t.es));
      out.push({ kind: "term", href: `/leccion/${t.lesson}#vocabulario`, title: `${t.es} · ${t.en}`, sub: t.lessonTitle, detail: t.def, score: norm(t.es).startsWith(n) || norm(t.en).startsWith(n) ? 0.5 : 2 });
    }
    return out.sort((a, b) => a.score - b.score).slice(0, 12);
  }, [q, index]);

  function go(h: Hit) {
    setOpen(false);
    router.push(h.href);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex shrink-0 items-center gap-2 rounded-lg border border-line bg-bg px-2.5 py-1.5 text-muted hover:text-ink"
        aria-label="Buscar"
      >
        <Icon name="search" className="h-4 w-4" />
        <span className="hidden md:inline">Buscar</span>
        <kbd className="hidden rounded border border-line px-1 text-[10px] md:inline">Ctrl K</kbd>
      </button>

      {open && createPortal(
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-[10vh]" onClick={() => setOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Buscar en el aula"
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Icon name="search" className="h-5 w-5 text-muted" />
              <input
                ref={input}
                autoFocus
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setSel(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(s + 1, hits.length - 1)); }
                  if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
                  if (e.key === "Enter" && hits[sel]) go(hits[sel]);
                }}
                placeholder="Busca un concepto: «pH», «centrífuga», «yield», «OOS»…"
                className="w-full bg-transparent py-4 text-base outline-none"
              />
              <kbd className="rounded border border-line px-1.5 text-xs text-muted">Esc</kbd>
            </div>
            <ul className="max-h-[60vh] overflow-y-auto p-2">
              {q.trim().length < 2 && (
                <li className="px-3 py-6 text-center text-sm text-muted">
                  Escribe al menos dos letras. Busca en las {index.lessons.length} lecciones y en el glosario, en español o en inglés.
                </li>
              )}
              {q.trim().length >= 2 && hits.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">Sin resultados para «{q}».</li>}
              {hits.map((h, i) => (
                <li key={h.kind + h.href + h.title}>
                  <Link
                    href={h.href}
                    onClick={() => setOpen(false)}
                    onMouseEnter={() => setSel(i)}
                    className={`flex gap-3 rounded-xl px-3 py-2.5 ${i === sel ? "bg-accent-soft" : ""}`}
                  >
                    <span className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg ${h.kind === "lesson" ? "bg-accent text-white" : "bg-soft text-accent"}`}>
                      <Icon name={h.kind === "lesson" ? "book" : "abc"} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-medium">{h.title}</span>
                      <span className="block truncate text-xs text-muted">
                        {h.kind === "lesson" ? "Lección" : "Término"} · {h.sub}
                      </span>
                      <span className="mt-0.5 line-clamp-2 block text-sm text-muted">{h.detail}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
