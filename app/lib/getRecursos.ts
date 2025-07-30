import { Recurso, RecursoTipo } from "../types/recurso";
import raw from "./recursos.json";

export function getRecursos(): Recurso[] {
  return raw
    .filter(
      (r) =>
        r.titulo &&
        r.descripcion &&
        ["audio", "pdf", "link"].includes(r.tipo) &&
        Array.isArray(r.etiquetas) &&
        typeof r.enlace === "string"
    )
    .map((r) => ({
      ...r,
      tipo: r.tipo as RecursoTipo,
    }));
}
