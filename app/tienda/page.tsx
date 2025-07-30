"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Tag } from "lucide-react";

const productos = [
  {
    nombre: "Pack Esencias Florales",
    descripcion:
      "Combinación personalizada para armonizar tu energía emocional.",
    precio: "25€",
    imagen: "/images/imagen1.jpg",
    categoria: "esencias",
  },
  {
    nombre: "Guía de Meditaciones",
    descripcion: "Meditaciones guiadas para cada día del retiro.",
    precio: "15€",
    imagen: "/images/imagen1.jpg",
    categoria: "guía",
  },
  {
    nombre: "Sesión Individual Online",
    descripcion: "Consulta personal de medicina china y coaching energético.",
    precio: "50€",
    imagen: "/images/imagen1.jpg",
    categoria: "sesión",
  },
];

const categorias = ["todas", "esencias", "guía", "sesión"];

export default function Tienda() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("todas");
  const [productoActivo, setProductoActivo] = useState<number | null>(null);

  const productosFiltrados = productos.filter((p) => {
    const coincideCategoria =
      categoria === "todas" || p.categoria === categoria;
    const coincideBusqueda =
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <section className="py-24 px-4 md:px-8 bg-white min-h-screen">
      <motion.h2
        className="text-5xl font-bold text-center text-green-700 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tienda
      </motion.h2>

      {/* Buscador */}
      <div className="max-w-3xl mx-auto mb-6">
        <div className="flex items-center w-full border border-gray-300 rounded-xl px-4 py-2 bg-white shadow-sm">
          <Search className="text-green-500 mr-2" />
          <input
            type="text"
            placeholder="Buscar producto..."
            className="w-full outline-none text-gray-700"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      {/* Categorías en móvil */}
      <div className="md:hidden flex overflow-x-auto gap-2 py-4 -mx-1 px-1 mb-6">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className={`whitespace-nowrap px-3 py-1 rounded-full text-sm border ${
              categoria === cat
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            #{cat}
          </button>
        ))}
      </div>

      {/* Grid principal */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Sidebar en desktop */}
        <aside className="hidden md:block md:col-span-1 space-y-3 sticky top-24">
          <h3 className="text-lg font-semibold text-green-800 flex items-center gap-2">
            <Tag className="w-5 h-5" /> Categorías
          </h3>
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`block w-full text-left px-3 py-1 rounded-lg ${
                categoria === cat
                  ? "bg-green-100 text-green-800 font-semibold"
                  : "hover:bg-green-50 text-gray-700"
              }`}
            >
              #{cat}
            </button>
          ))}
        </aside>

        {/* Productos */}
        <div className="md:col-span-3 space-y-8">
          <div className="grid gap-10 sm:grid-cols-2">
            {productosFiltrados.map((p, i) => (
              <motion.div
                key={i}
                className="bg-green-50 p-6 rounded-2xl shadow hover:shadow-md transition flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Image
                  src={p.imagen}
                  alt={p.nombre}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover h-48 w-full mb-4"
                />
                <h3 className="text-2xl font-semibold text-green-800">
                  {p.nombre}
                </h3>
                <p className="text-gray-700 text-sm mt-2 mb-4">
                  {p.descripcion}
                </p>
                <span className="text-green-700 font-bold text-lg mb-4">
                  {p.precio}
                </span>
                <button
                  onClick={() => setProductoActivo(i)}
                  className="bg-green-700 text-white px-4 py-2 rounded-full text-sm hover:bg-green-800 transition"
                >
                  Más información
                </button>
              </motion.div>
            ))}
          </div>

          {productosFiltrados.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No se encontraron productos.
            </p>
          )}
        </div>
      </div>

      {/* Modal de detalle */}
      <AnimatePresence>
        {productoActivo !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setProductoActivo(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-lg w-full p-6 relative shadow-xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setProductoActivo(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                {productos[productoActivo].nombre}
              </h3>
              <p className="text-gray-700 mb-4">
                {productos[productoActivo].descripcion}
              </p>
              <p className="text-green-600 font-semibold text-lg">
                {productos[productoActivo].precio}
              </p>
              <button
                disabled
                className="mt-6 bg-gray-300 text-gray-700 px-4 py-2 rounded-full w-full cursor-not-allowed"
              >
                Pronto disponible
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
