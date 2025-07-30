export type RecursoTipo = "audio" | "pdf" | "link";

export interface Recurso {
  titulo: string;
  descripcion: string;
  tipo: RecursoTipo;
  etiquetas: string[];
  enlace: string;
}
