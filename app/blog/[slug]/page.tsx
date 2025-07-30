"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "../../components/SectionWrapper";
import { motion } from "framer-motion";

type Post = {
  slug: string;
  titulo: string;
  imagen: string;
  contenido: string;
  etiquetas: string[];
};

const posts: Post[] = [
  {
    slug: "cuerpo-territorio-emocional",
    titulo: "El cuerpo como territorio emocional",
    imagen: "/images/blog-cuerpo.jpg",
    etiquetas: ["cuerpo", "emociones"],
    contenido: `
El cuerpo no solo es una estructura biológica; es también un archivo emocional. Cada movimiento guarda una historia, cada tensión una señal.

Cuando caminamos por la naturaleza, algo se libera. El paso, el ritmo, el silencio. En ese andar lento empezamos a ver el cuerpo como un mapa, donde cada emoción ha dibujado un sendero.

En los retiros trabajamos con esta idea: moverse como forma de escucha, de expresión, de liberación. El cuerpo lo sabe, solo necesita espacio.
    `,
  },
  {
    slug: "ritual-tierra-reconexion",
    titulo: "Ritual de tierra para reconectar",
    imagen: "/images/blog-tierra.jpg",
    etiquetas: ["naturaleza", "ritual"],
    contenido: `
Este ritual es muy sencillo. Solo necesitas: tierra, una vela, agua, y tu intención clara.

Busca un lugar tranquilo. Siéntate cerca de la tierra y apoya las manos. Cierra los ojos y respira.

Visualiza que entregas aquello que ya no te sirve a la tierra. Agradece. Respira. Y cuando termines, enciende tu vela como símbolo de luz interior.

Puedes escribir lo vivido en un diario. Hazlo tuyo, cada vez.
    `,
  },
];

const recursos = [
  {
    titulo: "Meditación guiada para reconectar con tu cuerpo",
    enlace: "/audios/meditacion-cuerpo.mp3",
    etiquetas: ["cuerpo", "emociones"],
  },
  {
    titulo: "Cuaderno de introspección",
    enlace: "/docs/cuaderno-introspeccion.pdf",
    etiquetas: ["emociones", "autoconocimiento"],
  },
  {
    titulo: "Playlist para movimiento libre",
    enlace: "https://open.spotify.com/playlist/xxxxxx",
    etiquetas: ["movimiento", "naturaleza"],
  },
];

export default function EntradaBlog() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  const index = posts.findIndex((p) => p.slug === slug);
  const anterior = posts[index - 1];
  const siguiente = posts[index + 1];

  const relacionados = recursos.filter((r) =>
    r.etiquetas.some((tag) => post.etiquetas.includes(tag))
  );

  const destacados = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <SectionWrapper bg="bg-white">
      <article className="py-24 px-6 max-w-3xl mx-auto space-y-6 text-gray-800">
        <Image
          src={post.imagen}
          alt={post.titulo}
          width={800}
          height={500}
          className="w-full rounded-lg shadow-md object-cover"
        />
        <h1 className="text-4xl font-bold text-green-700">{post.titulo}</h1>
        {post.contenido.split("\n").map((p, i) => (
          <p key={i} className="text-lg leading-relaxed">
            {p.trim()}
          </p>
        ))}

        {/* Recursos relacionados */}
        {relacionados.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              Recursos relacionados
            </h3>
            <ul className="list-disc list-inside text-green-700">
              {relacionados.map((r, i) => (
                <li key={i}>
                  <a
                    href={r.enlace}
                    className="underline hover:text-green-900"
                    target="_blank"
                  >
                    {r.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Navegación entre artículos */}
        <div className="flex justify-between mt-16 text-sm text-gray-600">
          {anterior ? (
            <Link
              href={`/blog/${anterior.slug}`}
              className="hover:underline text-green-700"
            >
              ← {anterior.titulo}
            </Link>
          ) : (
            <span />
          )}
          {siguiente ? (
            <Link
              href={`/blog/${siguiente.slug}`}
              className="hover:underline text-green-700"
            >
              {siguiente.titulo} →
            </Link>
          ) : (
            <span />
          )}
        </div>

        {/* Artículos destacados */}
        <div className="mt-16 border-t pt-8">
          <h3 className="text-xl font-semibold text-green-800 mb-6">
            También puede interesarte
          </h3>
          <div className="grid gap-6">
            {destacados.map((p, i) => (
              <Link
                key={i}
                href={`/blog/${p.slug}`}
                className="block border p-4 rounded-lg hover:shadow-sm transition"
              >
                <h4 className="text-green-700 font-semibold">{p.titulo}</h4>
                <p className="text-gray-600 text-sm line-clamp-2 mt-1">
                  {p.contenido.split("\n")[0].trim()}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Comentarios simulados */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-green-800 mb-4">
            ¿Qué te dejó este artículo?
          </h3>
          <form className="space-y-4">
            <textarea
              rows={4}
              placeholder="Comparte tu sentir o reflexión..."
              className="w-full border rounded-lg p-3 text-sm"
            />
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
            >
              Enviar comentario
            </button>
          </form>
        </div>
      </article>
    </SectionWrapper>
  );
}
