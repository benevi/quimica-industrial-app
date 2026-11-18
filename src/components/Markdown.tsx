import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Term } from "@/content/types";

/* eslint-disable @typescript-eslint/no-explicit-any */
type MdNode = { type: string; value?: string; children?: MdNode[]; data?: any };

/** En las citas (cuadros de fórmulas), cada salto de línea del texto se respeta. */
function remarkQuoteBreaks() {
  const walk = (node: MdNode, inQuote: boolean) => {
    if (!node.children) return;
    const q = inQuote || node.type === "blockquote";
    node.children = node.children.flatMap((c) => {
      if (q && c.type === "text" && c.value?.includes("\n")) {
        return c.value.split("\n").flatMap((part, i) => (i === 0 ? [{ type: "text", value: part }] : [{ type: "break" }, { type: "text", value: part }]));
      }
      walk(c, q);
      return [c];
    });
  };
  return (tree: MdNode) => walk(tree, false);
}

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Subraya la primera aparición de cada término del vocabulario de la lección
 * y muestra su definición (con el término en inglés) al pasar el ratón o con el teclado.
 */
function remarkTerms(terms: Term[]) {
  return () => (tree: MdNode) => {
    const list = terms
      .map((t) => ({ t, key: t.es.split(" (")[0].split(" / ")[0].trim() }))
      .filter((x) => x.key.length >= 2)
      .sort((a, b) => b.key.length - a.key.length);
    if (!list.length) return;
    const used = new Set<string>();
    const re = new RegExp(`(?<![\\p{L}\\p{N}])(${list.map((x) => esc(x.key)).join("|")})(es|s)?(?![\\p{L}\\p{N}])`, "iu");
    const find = (m: string) => list.find((x) => x.key.toLowerCase() === m.toLowerCase());

    const walk = (node: MdNode) => {
      if (!node.children || ["heading", "link", "inlineCode", "code", "tableCell", "blockquote"].includes(node.type)) return;
      node.children = node.children.flatMap((c) => {
        if (c.type !== "text" || !c.value) {
          walk(c);
          return [c];
        }
        const out: MdNode[] = [];
        let rest = c.value;
        for (;;) {
          const local = new RegExp(re.source, "iu");
          let m: RegExpExecArray | null = null;
          let offset = 0;
          // busca la primera coincidencia de un término aún no usado
          for (;;) {
            const mm = local.exec(rest.slice(offset));
            if (!mm) break;
            const hit = find(mm[1]);
            if (hit && !used.has(hit.key)) {
              m = mm;
              m.index += offset;
              break;
            }
            offset += mm.index + mm[0].length;
          }
          if (!m) break;
          const hit = find(m[1])!;
          used.add(hit.key);
          if (m.index > 0) out.push({ type: "text", value: rest.slice(0, m.index) });
          out.push({
            type: "term",
            data: { hName: "span", hProperties: { className: ["term"], tabIndex: 0 } },
            children: [
              { type: "text", value: m[0] },
              {
                type: "pop",
                data: { hName: "span", hProperties: { className: ["term-pop"], role: "tooltip" } },
                children: [
                  { type: "b", data: { hName: "b" }, children: [{ type: "text", value: hit.t.es }] },
                  { type: "i", data: { hName: "i", hProperties: { lang: "en" } }, children: [{ type: "text", value: hit.t.en }] },
                  { type: "text", value: hit.t.def },
                ],
              },
            ],
          });
          rest = rest.slice(m.index + m[0].length);
        }
        if (rest) out.push({ type: "text", value: rest });
        return out;
      });
    };
    walk(tree);
  };
}

export function Markdown({ children, terms }: { children: string; terms?: Term[] }) {
  const plugins: any[] = [remarkGfm, remarkQuoteBreaks];
  if (terms?.length) plugins.push(remarkTerms(terms));
  return (
    <div className="prose-app">
      <ReactMarkdown remarkPlugins={plugins}>{children.trim()}</ReactMarkdown>
    </div>
  );
}
