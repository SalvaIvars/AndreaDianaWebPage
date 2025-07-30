"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Headphones, Music2, Tag, Search } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

type Recurso = {
  titulo: string;
  descripcion: string;
  tipo: "audio" | "pdf" | "link";
  etiquetas: string[];
  enlace: string;
};

const recursos: Recurso[] = [
  {
    titulo: "Meditación guiada para reconectar con tu cuerpo",
    descripcion:
      "Audio restaurador para comenzar o cerrar tu día con presencia.",
    tipo: "audio",
    etiquetas: ["meditación", "cuerpo", "inicio"],
    enlace: "/audios/meditacion-cuerpo.mp3",
  },
  {
    titulo: "Cuaderno de introspección",
    descripcion:
      "PDF con ejercicios para explorar emociones, cuerpo y energía.",
    tipo: "pdf",
    etiquetas: ["emociones", "escritura", "autoconocimiento"],
    enlace: "/docs/cuaderno-introspeccion.pdf",
  },
  {
    titulo: "Playlist para movimiento libre",
    descripcion:
      "Música para acompañar tu danza intuitiva o caminatas conscientes.",
    tipo: "link",
    etiquetas: ["movimiento", "danza", "música"],
    enlace: "https://open.spotify.com/playlist/xxxxxxx",
  },
];

export default function RecursosPage() {
  const [busqueda, setBusqueda] = useState("");
  const [etiquetaActiva, setEtiquetaActiva] = useState<string | null>(null);

  const todasEtiquetas = Array.from(
    new Set(recursos.flatMap((r) => r.etiquetas))
  ).sort();

  const getIcon = (tipo: string) => {
    switch (tipo) {
      case "audio":
        return <Headphones className="text-green-600 w-7 h-7" />;
      case "pdf":
        return <BookOpen className="text-green-600 w-7 h-7" />;
      case "link":
        return <Music2 className="text-green-600 w-7 h-7" />;
      default:
        return null;
    }
  };

  const recursosFiltrados = recursos.filter((r) => {
    const coincideBusqueda =
      r.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      r.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    const coincideEtiqueta =
      !etiquetaActiva || r.etiquetas.includes(etiquetaActiva);
    return coincideBusqueda && coincideEtiqueta;
  });

  return (
    <SectionWrapper bg="bg-white">
      <section className="pt-16 pb-24 px-4 md:px-8 lg:px-12 bg-gray-50 min-h-[85vh]">
        <motion.h1
          className="text-5xl font-bold text-center text-green-700 mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Recursos Creativos
        </motion.h1>

        {/* Buscador */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="flex items-center w-full border border-gray-300 rounded-xl px-4 py-2 bg-white shadow-sm">
            <Search className="text-green-500 mr-2" />
            <input
              type="text"
              placeholder="Buscar recurso..."
              className="w-full outline-none text-gray-700"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
        </div>

        {/* Etiquetas móviles: scroll horizontal */}
        <div className="md:hidden flex overflow-x-auto gap-2 py-4 px-1 mb-6 -mx-1">
          {todasEtiquetas.map((et) => (
            <button
              key={et}
              onClick={() =>
                setEtiquetaActiva(etiquetaActiva === et ? null : et)
              }
              className={`whitespace-nowrap px-3 py-1 rounded-full text-sm border transition ${
                etiquetaActiva === et
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              #{et}
            </button>
          ))}
        </div>

        {/* Grid principal */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {/* Sidebar solo en desktop */}
          <aside className="hidden md:block md:col-span-1 space-y-3 sticky top-24">
            <h3 className="text-lg font-semibold text-green-800 flex items-center gap-2">
              <Tag className="w-5 h-5" /> Etiquetas
            </h3>
            <button
              onClick={() => setEtiquetaActiva(null)}
              className={`block w-full text-left px-3 py-1 rounded-lg ${
                etiquetaActiva === null
                  ? "bg-green-100 text-green-800 font-semibold"
                  : "hover:bg-green-50 text-gray-700"
              }`}
            >
              Todas
            </button>
            {todasEtiquetas.map((et) => (
              <button
                key={et}
                onClick={() => setEtiquetaActiva(et)}
                className={`block w-full text-left px-3 py-1 rounded-lg ${
                  etiquetaActiva === et
                    ? "bg-green-100 text-green-800 font-semibold"
                    : "hover:bg-green-50 text-gray-700"
                }`}
              >
                #{et}
              </button>
            ))}
          </aside>

          {/* Recursos */}
          <div className="md:col-span-3 space-y-8">
            <div className="grid gap-10 md:grid-cols-2">
              {recursosFiltrados.map((r, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {getIcon(r.tipo)}
                    <h2 className="text-lg font-semibold text-green-800">
                      {r.titulo}
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm">{r.descripcion}</p>
                  <a
                    href={r.enlace}
                    target="_blank"
                    className="text-green-600 underline font-medium hover:text-green-800"
                  >
                    {r.tipo === "audio"
                      ? "🎧 Escuchar"
                      : r.tipo === "pdf"
                      ? "📄 Leer"
                      : "🔗 Ver recurso"}
                  </a>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {r.etiquetas.map((et) => (
                      <span
                        key={et}
                        className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"
                      >
                        #{et}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {recursosFiltrados.length === 0 && (
              <p className="text-center text-gray-500 mt-10">
                No se encontraron recursos con esos filtros.
              </p>
            )}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
