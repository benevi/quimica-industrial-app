"use client";

import { useMemo, useState } from "react";
import { pictograms, type GhsCode } from "@/content/fds";
import { GhsPictogram } from "@/components/GhsPictogram";

const codes = Object.keys(pictograms) as GhsCode[];

function shuffle<T>(a: T[], seed: number) {
  const x = [...a];
  let s = seed;
  for (let i = x.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
}

/** Mini juego: reconoce los 9 pictogramas. Sale el dibujo y eliges qué peligro indica. */
export function PictogramGame() {
  const [round, setRound] = useState(1);
  const order = useMemo(() => shuffle(codes, round * 7 + 3), [round]);
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<GhsCode | null>(null);
  const [right, setRight] = useState(0);

  const code = order[i];
  const options = useMemo(() => (code ? shuffle([code, ...shuffle(codes.filter((c) => c !== code), i + round).slice(0, 3)], i * 13 + round) : []), [code, i, round]);

  if (!code)
    return (
      <div className="rounded-2xl border border-line bg-surface p-5">
        <p className="text-lg font-semibold">
          {right} de {codes.length} pictogramas reconocidos
        </p>
        <p className="mt-1 text-sm text-muted">{right === codes.length ? "Perfecto: ya los distingues todos." : "Repite hasta reconocerlos todos a la primera."}</p>
        <button
          onClick={() => {
            setRound((r) => r + 1);
            setI(0);
            setPick(null);
            setRight(0);
          }}
          className="mt-3 rounded-lg bg-accent px-4 py-2 font-medium text-white hover:opacity-90"
        >
          Otra ronda
        </button>
      </div>
    );

  return (
    <div className="rounded-2xl border border-line bg-surface p-5">
      <p className="text-sm text-muted">
        Pictograma {i + 1} de {codes.length} · {right} aciertos
      </p>
      <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="shrink-0 self-center">
          <GhsPictogram code={code} size={130} />
        </div>
        <div className="grid flex-1 gap-2">
          <p className="font-medium">¿Qué peligro indica?</p>
          {options.map((c) => {
            let cls = "border-line hover:border-accent";
            if (pick && c === code) cls = "border-ok bg-ok-soft";
            else if (pick === c) cls = "border-bad bg-bad-soft";
            return (
              <button
                key={c}
                disabled={!!pick}
                onClick={() => {
                  setPick(c);
                  if (c === code) setRight((x) => x + 1);
                }}
                className={`rounded-lg border px-3 py-2 text-left text-sm ${cls}`}
              >
                {pictograms[c].means}
              </button>
            );
          })}
          {pick && (
            <div className="mt-1 rounded-lg bg-soft px-3 py-2 text-sm">
              <strong>
                {code} · {pictograms[code].name}
              </strong>{" "}
              <span className="text-muted">({pictograms[code].en})</span>. Ejemplos: {pictograms[code].examples}
              <div>
                <button
                  onClick={() => {
                    setI((x) => x + 1);
                    setPick(null);
                  }}
                  className="mt-2 rounded-lg bg-accent px-3 py-1.5 font-medium text-white hover:opacity-90"
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
