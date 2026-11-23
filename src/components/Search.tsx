"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Icon, type IconName } from "./icons";
import { allNavItems } from "./shell/nav";

export type SearchIndex = {
  lessons: { slug: string; title: string; titleEn: string; summary: string; level: number; levelTitle: string }[];
  terms: { es: string; en: string; def: string; lesson: string; lessonTitle: string }[];
  siglas: { sigla: string; es: string; en?: string }[];
};

export { norm } from "@/lib/text";
import { norm } from "@/lib/text";

type Hit = { kind: "lesson" | "term" | "page"; icon?: IconName; href: string; title: string; sub: string; detail: string; score: number };

/** Buscador global: lecciones y términos del glosario (Ctrl+K o «/»). */
/** Abre el buscador desde cualquier botón de la app. */
export function openSearch() {
  window.dispatchEvent(new Event("aula:buscar"));
}

/** Buscador global (Ctrl K o /). Busca secciones de la app, lecciones y términos. */
export function Search() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState<SearchIndex | null>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const returnTo = useRef<HTMLElement | null>(null);
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
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("aula:buscar", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("aula:buscar", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      returnTo.current = document.activeElement as HTMLElement | null;
      setQ("");
      setSel(0);
      // El índice (lecciones y glosario) se descarga solo la primera vez que se abre el buscador
      if (!index)
        Promise.all([import("@/content/catalog"), import("@/content/terms"), import("@/content/siglas")]).then(([c, t, sg]) =>
          setIndex({
            lessons: c.lessons.map((l) => ({ slug: l.slug, title: l.title, titleEn: l.titleEn, summary: l.summary, level: l.level, levelTitle: c.levels.find((lv) => lv.number === l.level)?.title ?? "" })),
            terms: t.allTerms,
            siglas: sg.siglas,
          }),
        );
    } else if (returnTo.current) {
      // Al cerrar, el foco vuelve a donde estaba
      returnTo.current.focus();
      returnTo.current = null;
    }
  }, [open, index]);

  // Mantiene el foco dentro del buscador mientras está abierto
  function trapTab(e: React.KeyboardEvent) {
    if (e.key !== "Tab" || !dialog.current) return;
    const items = dialog.current.querySelectorAll<HTMLElement>("input, a[href], button");
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  const hits = useMemo<Hit[]>(() => {
    const n = norm(q.trim());
    if (n.length < 2 || !index) return [];
    const out: Hit[] = [];
    for (const it of allNavItems) {
      const t = norm(`${it.label} ${it.en}`);
      if (t.includes(n) || norm(it.hint).includes(n))
        out.push({ kind: "page", href: it.href, title: it.label, sub: "Sección de la app", detail: it.hint, icon: it.icon, score: t.startsWith(n) ? -1 : t.includes(n) ? 0.2 : 2.5 });
    }
    for (const l of index.lessons) {
      const t = norm(`${l.title} ${l.titleEn}`);
      const s = norm(l.summary);
      if (t.includes(n) || s.includes(n))
        out.push({ kind: "lesson", href: `/leccion/${l.slug}`, title: l.title, sub: `Nivel ${l.level} · ${l.levelTitle}`, detail: l.summary, score: t.startsWith(n) ? 0 : t.includes(n) ? 0.4 : 3 });
    }
    for (const x of index.siglas) {
      const k = norm(x.sigla);
      if (k.includes(n) || (n.length > 3 && norm(x.es).includes(n)))
        out.push({ kind: "term", href: "/glosario", title: x.sigla, sub: "Sigla", detail: x.en ? `${x.es} (${x.en})` : x.es, score: k === n || k.startsWith(n) ? -0.5 : 1.5 });
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

      {open && createPortal(
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-[10vh]" onClick={() => setOpen(false)}>
          <div
            ref={dialog}
            role="dialog"
            aria-modal="true"
            aria-label="Buscar en el aula"
            onKeyDown={trapTab}
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Icon name="search" className="h-5 w-5 text-muted" />
              <input
                ref={input}
                autoFocus
                aria-label="Buscar lecciones, términos y secciones"
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
                  {index ? `Escribe al menos dos letras. Busca en las ${index.lessons.length} lecciones y en el glosario, en español o en inglés.` : "Cargando el índice…"}
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
                    <span className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg ${h.kind === "term" ? "bg-soft text-accent" : "bg-accent text-[var(--on-accent)]"}`}>
                      <Icon name={h.icon ?? (h.kind === "lesson" ? "book" : "abc")} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-medium">{h.title}</span>
                      <span className="block truncate text-xs text-muted">
                        {h.kind === "page" ? h.sub : `${h.kind === "lesson" ? "Lección" : "Término"} · ${h.sub}`}
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
