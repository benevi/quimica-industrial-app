import { Archivo, Atkinson_Hyperlegible_Mono, Atkinson_Hyperlegible_Next } from "next/font/google";

/**
 * Tipografías de las dos ediciones (docs/diseno.md):
 * - Archivo, semiestrecha, para títulos: el aire de las placas de identificación de los equipos.
 * - Atkinson Hyperlegible Next para el texto: diseñada para leerse bien, también con poca vista o con prisa.
 * - Atkinson Hyperlegible Mono solo para códigos de equipo, lotes y valores de proceso (R-204, 78,5 °C).
 */
export const display = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-display", display: "swap" });
export const body = Atkinson_Hyperlegible_Next({ subsets: ["latin"], variable: "--font-body", display: "swap" });
export const mono = Atkinson_Hyperlegible_Mono({ subsets: ["latin"], variable: "--font-code", display: "swap" });

export const fontVariables = `${display.variable} ${body.variable} ${mono.variable}`;
