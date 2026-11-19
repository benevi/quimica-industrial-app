import type { IconName } from "./icons";

export const lessonSteps: { id: string; label: string; icon: IconName }[] = [
  { id: "idea", label: "Idea clave", icon: "bulb" },
  { id: "ver", label: "Imágenes y vídeos", icon: "play" },
  { id: "planta", label: "Ejemplo de planta", icon: "factory" },
  { id: "hoja", label: "Hoja de producción", icon: "sheet" },
  { id: "vocabulario", label: "Vocabulario", icon: "abc" },
  { id: "test", label: "Test", icon: "quiz" },
];

/** Pasos que tiene una lección concreta: «Imágenes y vídeos» solo si hay material. */
export const stepsFor = (hasMedia: boolean) => lessonSteps.filter((s) => s.id !== "ver" || hasMedia);
