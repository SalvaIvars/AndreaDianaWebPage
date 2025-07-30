export interface BlogPost {
  slug: string;
  titulo: string;
  imagen: string;
  contenido: string;
  etiquetas: string[];
  fecha?: string;
  destacado?: boolean;
}
