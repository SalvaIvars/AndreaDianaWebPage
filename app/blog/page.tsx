"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "../components/SectionWrapper";

const posts = [
  {
    titulo: "El cuerpo como territorio emocional",
    extracto:
      "¿Y si escuchar el cuerpo fuera la forma más pura de sabiduría? Una reflexión sobre memoria, emoción y movimiento.",
    categoria: "cuerpo",
    imagen: "/images/background.jpg",
    slug: "cuerpo-territorio-emocional",
    fecha: "Julio 2025",
  },
  {
    titulo: "Ritual de tierra para reconectar",
    extracto:
      "Una práctica sencilla con elementos naturales para volver a ti. Perfecto para cerrar ciclos o comenzar etapas.",
    categoria: "naturaleza",
    imagen: "/images/background.jpg",
    slug: "ritual-tierra-reconexion",
    fecha: "Junio 2025",
  },
];

export default function BlogPage() {
  return (
    <SectionWrapper bg="bg-white">
      <section className="py-24 px-6 bg-gray-50 min-h-screen">
        <motion.h1
          className="text-5xl font-bold text-center text-green-700 mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Blog Creativo
        </motion.h1>

        <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Image
                src={post.imagen}
                alt={post.titulo}
                width={600}
                height={400}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <span className="text-xs text-green-600 font-semibold uppercase">
                  {post.fecha} · #{post.categoria}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 mt-2">
                  {post.titulo}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{post.extracto}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-green-700 font-medium mt-4 inline-block hover:underline"
                >
                  Leer más →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
